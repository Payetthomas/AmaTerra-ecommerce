import { Router } from "express";
import { newsletterController } from "../Controllers/newsletterController.js";

export const router = Router();

router.post("/", newsletterController.createOne);