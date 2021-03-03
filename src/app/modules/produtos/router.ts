import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    _id: 'id',
    name: 'name',
    price: 1.0,
  });
});

export default router;
