import React, { useState } from "react";
import styled from "styled-components";

// Definimos las posibles posiciones para el tooltip
type TooltipPosition = "top" | "right" | "bottom" | "left";

// Tipamos las props del componente
interface TooltipProps {
  text: string;
  position?: TooltipPosition; // Posición es opcional, por defecto será 'top'
  children: React.ReactNode;
}

// Estilos dinámicos para el contenedor del Tooltip
const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

// Estilos del tooltip que aparecerá en diferentes posiciones
const TooltipBox = styled.div<{ position: TooltipPosition }>`
  position: absolute;
  background-color: #333;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 12px;
  z-index: 10;
  visibility: visible;
  opacity: 1;
  transition: opacity 0.3s ease;

  // Estilos dinámicos basados en la posición del Tooltip
  ${({ position }) =>
    position === "top" &&
    `
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 8px;
    
    &::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #333 transparent transparent transparent;
    }
  `}

  ${({ position }) =>
    position === "right" &&
    `
    top: 50%;
    left: 125%;
    transform: translateY(-50%);
    margin-left: 8px;
    
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: -5px;
      transform: translateY(-50%);
      border-width: 5px;
      border-style: solid;
      border-color: transparent #333 transparent transparent;
    }
  `}
  
  ${({ position }) =>
    position === "bottom" &&
    `
    top: 125%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 8px;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent #333 transparent;
    }
  `}
  
  ${({ position }) =>
    position === "left" &&
    `
    top: 50%;
    right: 125%;
    transform: translateY(-50%);
    margin-right: 8px;
    
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -5px;
      transform: translateY(-50%);
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent transparent #333;
    }
  `}
`;

// Tooltip Component
const Tooltip: React.FC<TooltipProps> = ({
  children,
  text,
  position = "top",
}) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <TooltipContainer
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      {visible && <TooltipBox position={position}>{text}</TooltipBox>}
    </TooltipContainer>
  );
};

export default Tooltip;
