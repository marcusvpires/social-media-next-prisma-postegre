
import prisma from '../../../lib/prisma';

export default async function handle(req, res) {
  const { scr, width, height } = req.body;

  const result = await prisma.image.create({
    data: { scr, width, height },
  })
  res.json(result);
}
