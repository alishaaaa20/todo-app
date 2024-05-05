import { z } from "zod";

export const taskSchema = z.object({
  id: z.number().int().nonnegative(),
  title: z.string().min(1, "Title is required"),
});

export type Task = z.infer<typeof taskSchema>;
