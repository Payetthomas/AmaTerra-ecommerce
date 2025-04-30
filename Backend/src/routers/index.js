import { Router } from "express";

import { router as newsletterRouter } from "./newsletter"; 

export const router = Router();

router.use('/newsletter', newsletterRouter); 