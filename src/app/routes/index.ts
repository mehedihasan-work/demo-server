import { Router } from "express";

const router = Router();

const allRouters: any[] = [];

allRouters.forEach((route) => router.use(route));

export const BaseRouter = router;
