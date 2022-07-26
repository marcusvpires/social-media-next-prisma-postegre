import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

type PostType = {
  title: string;
  content: string;
  preview?: string;
  published?: boolean;
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
      case 'PUT':
        PUT(req, res);
        break;
      case 'DELETE':
        DELETE(req, res);
        break;
      case 'OPTIONS':
        OPTIONS(req, res);
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
    const { where = {} } = req.body;
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
    });
    res.json({ ok: true, posts: result });
  } catch (error) {
    res.json({ ok: false, error: error.toString(), body: req.body });
  }
};

const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { post } = req.body;
    const { title, content, preview = '', published = false, author } = post;
    if (!title || !content || !author || (!author.email && !author.id)) {
      throw new Error(`O post deve ter 'title', 'content', 'author = { email ou id }'`);
    } else {
      const result = await prisma.post.create({
        data: {
          title,
          content,
          preview,
          published,
          author: {
            connect: { email: author.email },
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

const PUT = async (req: NextApiRequest, res: NextApiResponse) => {
  res.json({ ok: true, method: 'PUT' });
};

const DELETE = async (req: NextApiRequest, res: NextApiResponse) => {
  res.json({ ok: true, method: 'DELETE' });
};

const OPTIONS = async (req: NextApiRequest, res: NextApiResponse) => {
  res.json({ ok: true, method: 'OPTIONS' });
};
