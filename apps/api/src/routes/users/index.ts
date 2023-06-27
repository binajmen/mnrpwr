import express from "express";
import getUser from "./getUser";
import getUsers from "./getUsers";
import profileRouter from "./profile";

const router = express.Router();

router.get("/", getUsers);
router.get("/:userId", getUser);

router.use("/:userId/profile", profileRouter);

export default router;
