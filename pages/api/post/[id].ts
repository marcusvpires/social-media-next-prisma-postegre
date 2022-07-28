import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

interface IPost {
  title?: string;
  content?: string;
  preview?: string;
  published?: boolean;
  author: {
    email?  : string;
    id?: string;
  };
};

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET':
        GET(req, res);
        break;
      case 'PUT':
        PUT(req, res);
        break;
      case 'DELETE':
        DELETE(req, res);
        break;
      default:
        throw new Error(`O método '${req.method}' não existe`);
    }
  } catch (error: unknown) {
    res.json({ ok: false, error: error.toString(), body: req.body });
  }
}

const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const result = await prisma.post.findUnique({
      where: { id: String(id) },
      select: {
        id: true,
        title: true,
        content: true,
        published: true,
        author: {
          select: {
            name: true,
            image: true,
          },
        },
      },
    });
    res.json({ ok: true, post: result });
  } catch (error) {
    res.json({ ok: false, error: error.toString(), body: req.body });
  }
};

const PUT = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const { post } = req.body
    let warn = ''
    if (post.authorId || post.author) {
      delete post.authorId
      delete post.author
      warn = `Não é permitido alterar o 'authorId' ou 'author{}'` 
    }
    const result = await prisma.post.update({
      where: { id: String(id) },
      data: post,
    });
    res.json({ ok: true, post: result, warn });
  } catch (error) {
    res.json({ ok: false, error: error.toString(), body: req.body });
  }
};

const DELETE = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    console.log(id)
    const result = await prisma.post.delete({
      where: { id: String(id) }
    });
    res.json({ ok: true, post: result });
  } catch (error) {
    res.json({ ok: false, error: error.toString(), body: req.body });
  }
};