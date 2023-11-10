import { z } from "zod";

export const VSCreateUsers = z.object({
  name: z.string({ required_error: "Name is required" }).min(3, {
    message: "Name must be at least 3 characters",
  }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email is invalid" })
    .min(1, { message: "Email cannot be empty" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, { message: "Password cannot be empty" }),
  confirm_password: z
    .string({ required_error: "Confirm Password is required" })
    .min(1, { message: "Confirm Password cannot be empty" }),
  phoneNumber: z
    .string({ required_error: "Phone number is required" })
    .min(10, { message: "Phone number must be 10 digits" })
    .max(13, { message: "Phone number must be 13 digits" }),
});

export const VSUpdateProfile = z.object({
  identityType: z
    .string({ required_error: "Identity type is required" })
    .min(1, {
      message: "Identity type cannot be empty",
    }),
  identityNumber: z
    .string({ required_error: "Identity number is required" })
    .min(1, {
      message: "Identity number cannot be empty",
    }),
  religion: z.string({ required_error: "Religion is required" }).min(1, {
    message: "Religion cannot be empty",
  }),
  gender: z.string({ required_error: "Gender is required" }).min(1, {
    message: "Gender cannot be empty",
  }),
  address: z.string({ required_error: "Address is required" }).min(1, {
    message: "Address cannot be empty",
  }),
});

export const VSCreateAccount = z.object({
  name: z.string({ required_error: "Name is required" }).min(3, {
    message: "Name must be at least 3 characters",
  }),
  balance: z
    .number({ required_error: "Balance is required" })
    .min(1, { message: "Balance cannot be empty" })
    .nonnegative({ message: "Balance cannot be negative" }),
});

export const VSCreateTransaction = z.object({
  sourceAccountNumber: z
    .string({ required_error: "Source account number is required" })
    .min(1, {
      message: "Source account number cannot be empty",
    }),
  destinationAccountNumber: z
    .string({ required_error: "Destination account number is required" })
    .min(1, {
      message: "Destination account number cannot be empty",
    }),
  amount: z
    .number({ required_error: "Amount is required" })
    .min(1, { message: "Amount cannot be empty" })
    .nonnegative({ message: "Amount cannot be negative" }),
});

export const VSLogin = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email is invalid" })
    .min(1, { message: "Email cannot be empty" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, { message: "Password cannot be empty" }),
});
