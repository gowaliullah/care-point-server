import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { PatientServices } from "./patient.service";


const getAllPatientFromDB = catchAsync(async(req: Request, res: Response) => {

    const result = await PatientServices.getAllPatientFromDB();

     sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "All patients retreive successfuly..!",
        // meta: result.meta,
        data: result
    })
})


const getSinglePatinetFromDB = catchAsync(async(req: Request, res: Response) => {
    const {id} = req.params;

    const result = await PatientServices.getSinglePatinetFromDB(id);

     sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Patient data is retreive successfuly..!",
        data: result
    })
})

export const PatientController = {
    getAllPatientFromDB,
    getSinglePatinetFromDB
}