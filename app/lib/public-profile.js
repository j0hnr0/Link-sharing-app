import prisma from "./prisma";

export async function getPublicUserCard({ id }) {
  const card = await prisma.card.findUnique({
    where: { id: id },
    include: { links: true },
  });

  if (!card) {
    throw new Error("Card not found");
  }

  return card;
}
