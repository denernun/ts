import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    _id: 'ABC123',
    name: 'Product Name',
    price: 28.9,
  });
});

export default router;
