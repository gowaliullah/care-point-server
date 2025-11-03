import express from "express"
import { UserController } from "./user.controller";
import { fileUploder } from "../../helper/fileUploder";

const router = express.Router()


router.post(
    "/create-patient",
    fileUploder.upload.single('file'),
    UserController.createPatient
)


export const userRoutes = router;
 