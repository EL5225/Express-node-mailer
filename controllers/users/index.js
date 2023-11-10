import { prisma } from "../../libs/index.js";
export const getUsers = async (req, res, next) => {
  try {
    const users = await prisma.users.findMany({
      orderBy: {
        id: "asc",
      },
      select: {
        id: true,
        name: true,
        email: true,
        Profile: {
          select: {
            id: true,
            phoneNumber: true,
            identityType: true,
            identityNumber: true,
            gender: true,
            religion: true,
            address: true,
          },
        },
      },
    });

    if (users.length === 0) {
      return res.status(404).json({
        status: false,
        message: "Not Found",
        error: "No users were found",
      });
    }

    return res.status(200).json({
      status: true,
      message: "Users data retrieved successfully",
      data: { ...users },
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  const { id } = req.params;

  const userById = await prisma.users.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!userById) {
    return res.status(404).json({
      status: false,
      message: "Not Found",
      error: "User not found",
    });
  }

  const user = await prisma.users.delete({
    where: {
      id: Number(id),
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  return res.status(200).json({
    status: true,
    message: "User deleted successfully",
    data: user,
  });
};
