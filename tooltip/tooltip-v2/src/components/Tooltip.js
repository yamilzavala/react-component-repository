import React, { useState, useEffect, useRef } from "react";
import "./Tooltip.css";

const Tooltip = ({ text, position = "top", children }) => {
  const [visible, setVisible] = useState(false); // Controla si el tooltip es visible
  const [shouldRender, setShouldRender] = useState(false); // Controla si el tooltip debe estar en el DOM
  const [adjustedPosition, setAdjustedPosition] = useState(position);
  const tooltipRef = useRef(null);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!shouldRender || !tooltipRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let newPosition = position;

    if (position === "top" && containerRect.top - tooltipRect.height < 0) {
      newPosition = "bottom";
    } else if (
      position === "bottom" &&
      containerRect.bottom + tooltipRect.height > viewportHeight
    ) {
      newPosition = "top";
    } else if (
      position === "left" &&
      containerRect.left - tooltipRect.width < 0
    ) {
      newPosition = "right";
    } else if (
      position === "right" &&
      containerRect.right + tooltipRect.width > viewportWidth
    ) {
      newPosition = "left";
    }

    setAdjustedPosition(newPosition);
  }, [shouldRender, position]);

  const handleMouseEnter = () => {
    // Esperamos 1 segundo antes de mostrar el tooltip
    timeoutRef.current = setTimeout(() => {
      setShouldRender(true);
      setTimeout(() => {
        setVisible(true);
      }, 10); // Pequeño delay para activar la animación
    }, 300);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    setVisible(false);

    // Después de la animación, eliminamos el tooltip del DOM
    setTimeout(() => {
      setShouldRender(false);
    }, 300);
  };

  return (
    <div
      className="tooltip-container"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {shouldRender && (
        <div
          className={`tooltip tooltip-${adjustedPosition} ${
            visible ? "visible" : ""
          }`}
          ref={tooltipRef}
        >
          {text}
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
