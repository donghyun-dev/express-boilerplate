import express from 'express';
const router = express.Router();

router.get('/login', async (req, res) => {
  res.json({
    success: true,
  });
});

export default router;
