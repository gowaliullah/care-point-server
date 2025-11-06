import express from "express"
import { ScheduleController } from "./user.controller";

const router = express.Router()


router.post(
    "/",   
    ScheduleController.insertIntoDB
)



export const scheduleRoutes = router;
