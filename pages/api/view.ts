import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";
import { View } from "../../types/types";

const handler = async (req: NextApiRequest, res: NextApiResponse<View>) => {
  await prisma.view.updateMany({
    data: {
      quantity: {
        increment: 1,
      },
    },
  });

  const View = await prisma.view.findUnique({
    where: {
      id: "638490f86f331123a8bbeca2",
    },
  });
  await prisma.$disconnect();
  res.status(200).json(View!);
};

export default handler;
