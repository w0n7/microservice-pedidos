import { NextFunction, Request, Response } from "express";
import { CustomError } from "@/utils/customError.js";
import { ZodError } from "zod";
export function errorHandle(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("Error caught by middleware", error);

  if (error instanceof CustomError) {
    return res.status(error.status).json({
      status: error,
      message: error.message,
    });
  }

  if (error instanceof ZodError) {
    return res.status(400).json({
      message: "Erro de validação",
      issues: error.format(),
    });
  }

  return res.status(500).json({ message: error.message });
}
