import prisma from "./prisma";

export async function createProfile({
  userId,
  profileImage,
  firstName,
  lastName,
  email,
}) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const profile = await prisma.card.create({
    data: {
      userId,
      profileImage: profileImage || null,
      firstName,
      lastName,
      email: email || null,
    },
  });

  return profile;
}

export async function getProfileInfo({ userId }) {
  const profileInfo = await prisma.card.findUnique({
    where: {
      userId: userId,
    },
  });

  return profileInfo;
}
