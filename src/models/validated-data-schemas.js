import { z } from "zod";

export const validatedRegister = z.object({
  gmail: z
    .string({
      required_error: "Gmail is required for registration",
    })
    .email({
      required_error: "The gmail is incorrect please try again",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, {
      required_error: "Password must be at least (8) characters",
    }),
});

export const validatedLogin = z.object({
  gmail: z
    .string({
      required_error: "Gmail is required",
    })
    .email({
      required_error: "Invalid email",
    }),

  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, {
      required_error: "Password must be at least (8) characters",
    }),
});
