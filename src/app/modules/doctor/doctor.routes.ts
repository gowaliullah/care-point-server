import { DoctorController } from "./doctor.controller";
import express from "express"

const router = express.Router()



router.get(
    "/",
    DoctorController.getAllDoctorFromDB
)


router.get(
    "/:id",
    DoctorController.doctorGetByIdFromDb
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
