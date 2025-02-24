import React, { useState } from "react";
import "./Sidebar.css"; // Importamos los estilos

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado del sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Botón para abrir el sidebar */}
      <button className="toggle-button" onClick={toggleSidebar}>
        OPEN DRAWER
      </button>

      {/* Sidebar con clases dinámicas */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li>📥 Inbox</li>
          <li>⭐ Starred</li>
          <li>✉️ Send Email</li>
          <li>📝 Drafts</li>
          <li>📂 All Mail</li>
          <li>🗑️ Trash</li>
          <li>🚫 Spam</li>
        </ul>
      </div>

      {/* Capa de fondo para cerrar el sidebar al hacer clic fuera */}
      {isOpen && <div className="backdrop" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Sidebar;
