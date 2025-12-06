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

  const profileData = {
    profileImage: profileImage || null,
    firstName,
    lastName,
    email: email || null,
  };

  const profile = await prisma.card.upsert({
    where: { userId },
    update: profileData,
    create: {
      userId,
      ...profileData,
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
