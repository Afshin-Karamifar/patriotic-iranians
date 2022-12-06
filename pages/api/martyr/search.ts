import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../prisma";
import { Martyr } from "../../../types/types";

const handler = async (req: NextApiRequest, res: NextApiResponse<Martyr[]>) => {
  const { body } = req;
  const Martyrs = await prisma.martyr.findMany({
    where: { ...body },
  });
  await prisma.$disconnect();
  res.status(200).json(Martyrs);
};

export default handler;
