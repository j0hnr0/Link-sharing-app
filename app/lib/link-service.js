import prisma from "./prisma";

export async function getUserCardLink({ userId }) {
  const card = await prisma.card.findUnique({
    where: {
      userId: userId,
    },
    include: {
      links: {
        orderBy: {
          order: "asc",
        },
      },
    },
  });

  return card;
}

export async function saveUserLinks({ userId, links }) {
  const card = await prisma.card.findUnique({
    where: { userId },
  });

  await prisma.link.deleteMany({
    where: { cardId: card.id },
  });

  if (!links || links.length === 0) {
    return [];
  }

  await prisma.link.createMany({
    data: links.map((link, index) => ({
      platform: link.platform,
      url: link.url,
      order: index,
      cardId: card.id,
    })),
  });

  const savedLinks = await prisma.link.findMany({
    where: { cardId: card.id },
    orderBy: { order: "asc" },
  });

  return savedLinks;
}
