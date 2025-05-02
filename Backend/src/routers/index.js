import { Router } from "express";

import { router as newsletterRouter } from "./newsletter.js"; 

export const router = Router();

router.use('/newsletter', newsletterRouter); 