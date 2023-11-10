import { prisma } from "../libs/index.js";

export const getAllUsers = async () => {
  return await prisma.users.findMany();
};

export const getAllProfiles = async () => {
  return await prisma.profiles.findMany();
};

export const getBankAccounts = async () => {
  return await prisma.bankAccounts.findMany();
};
