import express from "express";
import getProfile from "./getProfile";

const router = express.Router({ mergeParams: true });

router.get("/", getProfile);

export default router;
