import express from 'express';
import { createSeeker } from '../controllers/seekerController.js';

const router = express.Router();

router.post('/createSeeker', createSeeker);

export default router;
