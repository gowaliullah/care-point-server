import express from "express"
import auth from "../../middlewares/auth";
import { UserRole } from "../../../generated/enums";
import { PaymentController } from "./payment.controller";

const router = express.Router()



router.post(
    "/",
    auth(UserRole.PATIENT),
    PaymentController.handleStripeWebhookEvent
)



export const appoinmentRoutes = router;