import { Router } from 'express';

const router = Router();

// Placeholder routes
router.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'API is running' });
});

export default router;
