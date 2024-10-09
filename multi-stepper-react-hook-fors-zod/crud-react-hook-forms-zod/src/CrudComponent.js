import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Esquema de validación con Zod
const schema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Debe ser un email válido"),
});

const CrudComponent = () => {
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Configuración de react-hook-form con validación Zod
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  // Agregar un nuevo item
  const onSubmit = (data) => {
    if (editingId !== null) {
      // Modificar un item
      setItems((prev) =>
        prev.map((item) =>
          item.id === editingId ? { ...item, ...data } : item
        )
      );
      setEditingId(null);
      reset();
    } else {
      // Agregar un nuevo item
      setItems((prev) => [...prev, { id: Date.now(), ...data }]);
      reset(); // Limpiar el formulario
    }
  };

  // Cargar datos para editar
  const onEdit = (id) => {
    const item = items.find((item) => item.id === id);
    reset(item);
    setEditingId(id);
  };

  // Eliminar un item
  const onDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>CRUD con React Hook Form y Zod</h1>

      {/* Formulario */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre</label>
          <input {...register("name")} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label>Email</label>
          <input {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <button type="submit">
          {editingId !== null ? "Modificar" : "Agregar"}
        </button>
      </form>

      {/* Lista de items */}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} ({item.email})
            <button onClick={() => onEdit(item.id)}>Editar</button>
            <button onClick={() => onDelete(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudComponent;
