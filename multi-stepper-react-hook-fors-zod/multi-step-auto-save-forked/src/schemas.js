import { z } from "zod";

const step1Schema = z.object({
  firstName: z.string().min(2, "Nombre demasiado corto"),
  lastName: z.string().min(2, "Apellido demasiado corto"),
});

const step2Schema = z.object({
  email: z.string().email("Debe ser un email válido"),
  phoneNumber: z.string().min(10, "Número no válido"),
});

// Exporta los esquemas
export { step1Schema, step2Schema };
