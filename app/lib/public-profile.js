import prisma from "./prisma";

export async function getLinksPublic({ id }) {
  const card = await prisma.card.findUnique({
    where: { id: id },
    include: {
      links: {
        orderBy: {
          order: "asc",
        },
      },
    },
  });

  if (!card) {
    throw new Error("Card not found");
  }

  return card;
}

export async function getProfilePublic({ id }) {
  const profileInfo = await prisma.card.findUnique({
    where: {
      id: id,
    },
  });

  if (!profileInfo) {
    throw new Error("Profile not found");
  }

  return profileInfo;
}
