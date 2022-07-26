import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import Options from '../../../components/TextEditor/Options';
import prisma from '../../../lib/prisma';

type PostType = {
  title: string;
  content: string;
  preview?: string;
  published?: boolean;
  createdAt: string;
  updatedAt: string;
  author: {
    email?: string;
    id?: string;
  };
};

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET':
        GET(req, res);
        break;
      case 'POST':
        POST(req, res);
        break;
      case 'OPTION':
        OPTION(req, res);
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
    const { email } = req.headers;
    let where = {};
    if (email) {
      where = {
        author: { email: email },
      };
    }
    const result = await prisma.post.findMany({
      where: where,
      select: {
        id: true,
        title: true,
        preview: true,
        published: true,
        author: {
          select: {
            name: true,
            image: true,
          },
        },
      },
      orderBy: [
        {
          updatedAt: 'desc'
        }
      ]
    });
    res.json({ ok: true, posts: result });
  } catch (error) {
    res.json({ ok: false, error: error.toString(), body: req.body });
  }
};

const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session = await getSession({ req });
    if (!session?.user?.email) throw new Error('Requisição não autorizada');
    const { post } = req.body;
    const { title, content, preview = '', published = false } = post;
    if (!title || !content) {
      throw new Error(`O post deve ter 'title' e 'content'`);
    } else {
      const result = await prisma.post.create({
        data: {
          title,
          content,
          preview,
          published,
          author: {
            connect: { email: session?.user?.email },
          },
        },
        include: {
          author: true,
        },
      });
      res.json({ ok: true, method: 'POST', post: result });
    }
  } catch (error) {
    res.json({ ok: false, error: error.toString(), body: req.body });
  }
};

const OPTION = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.json({ ok: true, method: 'OPTIONS' });
  } catch (error) {
    res.json({ ok: false, error: error.toString(), body: req.body });
  }
};
