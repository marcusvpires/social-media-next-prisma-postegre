import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { email, src } = req.body;

  try {
    const result = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        image: src,
      },
    })
    res.json({ ok: true, email, result});
  } catch(_error) {
    const message = (_error as Error).message;
    res.json({ ok: false, email, message });
  }
}
