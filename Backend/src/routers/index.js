import { Router } from "express";

import { router as newsletterRouter } from "./newsletter.js";
import { router as productRouter } from "./product.js";
import { router as categoryRouter } from "./category.js"; 

export const router = Router();

router.use('/newsletter', newsletterRouter);

router.use('/product', productRouter);

router.use('/category', categoryRouter);

