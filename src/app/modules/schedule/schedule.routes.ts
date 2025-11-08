import express from "express"
import { ScheduleController } from "./schedule.controller";

const router = express.Router()



router.get(
    "/",
    ScheduleController.scheduleForDoctor
)

router.post(
    "/",   
    ScheduleController.insertIntoDB
)



export const scheduleRoutes = router;
