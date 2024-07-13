import { z } from "zod";

        // TODO: Fix the input being taking as a number and make sure it accepts 2 words vs 2 characters
export const userFormValidation = z.object({
    name: z.string()
    .min(2, "Name must be at least 2 words.")
    .max(50, "Name must be at most 50 characters."),
    email: z.string().email("Invalid email address"),
    phone: z.string().refine((phone) => /^\+\d{10,15}$/.test(phone), 'Invalid phone number'), 
  })