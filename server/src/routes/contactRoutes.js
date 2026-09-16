import express from 'express';
import { submitContact, getSubmissions } from '../controllers/contactController.js';

const router = express.Router();

router.post('/', submitContact);
router.get('/', getSubmissions);

export default router;
