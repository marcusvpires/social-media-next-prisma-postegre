import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { src, email } = req.body;
  if (email) {
    console.log("API update", email)
    const result = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        image: src,
      },
    })
    res.json(result);
  } else {
    console.log("API not update", email)
    res.json({ ok: false })
  }
}
