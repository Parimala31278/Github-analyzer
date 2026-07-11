import express from "express";
import { getGithubData } from "../controllers/githubController.js";

const router = express.Router();

router.get("/:username", getGithubData);

export default router;