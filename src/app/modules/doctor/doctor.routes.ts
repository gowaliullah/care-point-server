import express from "express"
import { DoctorController } from "./doctor.controller";

const router = express.Router()



router.get(
    "/",
    DoctorController.getAllDoctorFromDB
)

router.post(
    "/suggestion",
    DoctorController.getAISuggestion
)

router.patch(
    "/:id",
    DoctorController.updateDoctorProfile
)



export const doctorRoutes = router;
