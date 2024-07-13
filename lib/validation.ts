import { z } from "zod";

export const userFormValidation = z.object({
    name: z.string()
    .min(4, "Name must be at least 2 words.")
    .max(50, "Name must be at most 50 characters."),
    email: z.string().email("Invalid email address"),
    phone: z.string().refine((phone) => /^\+\d{10,15}$/.test(phone), 'Invalid phone number'), 
  })