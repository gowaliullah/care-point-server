import Express from "express";
import { PatientController } from "./patient.controller";

const router = Express.Router()


router.get(
    "/",
    PatientController.getAllPatientFromDB 
)

router.get(
    "/:id",
    PatientController.getSinglePatinetFromDB 
)


export const patientRoutes = router