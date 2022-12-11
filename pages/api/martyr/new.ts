import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../prisma";
import { Martyr } from "../../../types/types";

const handler = async (req: NextApiRequest, res: NextApiResponse<Martyr>) => {
  const { body } = req;
  const _Martyr: Martyr = await prisma.martyr.create({
    data: body,
  });
  res.status(200).json(_Martyr);
};

export default handler;
