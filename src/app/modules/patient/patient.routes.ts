import { PatientController } from "./patient.controller";
import { UserRole } from "../../../generated/enums";
import Express from "express";
import auth from "../../middlewares/auth";

const router = Express.Router()


router.get(
    "/",
    PatientController.getAllPatientFromDB 
)

router.get(
    "/:id",
    PatientController.getSinglePatinetFromDB 
)


router.patch(
    "/",
    auth(UserRole.PATIENT),
    PatientController.updateIntoDB 
)


export const patientRoutes = router