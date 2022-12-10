import { Router } from "express";
import AuthApi from "./AuthApi.js";
import UserApi from "./UserApi.js";
import TransationsApi from "./TransationsApi.js";
const router = Router();

router.use("/transation", TransationsApi);
router.use("/auth", AuthApi);
router.use("/user", UserApi);

export default router;
