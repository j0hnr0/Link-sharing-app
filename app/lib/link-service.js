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
