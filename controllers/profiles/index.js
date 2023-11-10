import { prisma } from "../../libs/index.js";
import { VSUpdateProfile } from "../../validation-schema/index.js";

export const updateProfiles = async (req, res, next) => {
  try {
    const user = req.user;

    const { identityType, identityNumber, gender, religion, address } =
      req.body;

    VSUpdateProfile.parse(req.body);

    const updated = await prisma.profiles.update({
      where: {
        id: user.Profile.id,
      },
      data: {
        identityType,
        identityNumber,
        gender,
        religion,
        address,
      },
    });

    res.status(200).json({
      status: true,
      message: `Profile updated successfully with id ${user.Profile.id}`,
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};
