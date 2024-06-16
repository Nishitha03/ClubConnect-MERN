/*import express from "express";
import { sendReservation } from "../controller/reservation.js";

const router = express.Router();

router.post("/send", sendReservation);

export default router;*/
// routes/userRouter.js
import express from "express";
import { loginUser } from "../controller/userController.js";

const router = express.Router();

router.post("/login", loginUser);

export default router;
