import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { ScheduleService } from "./schedule.service";



const insertIntoDB = catchAsync(async (req: Request, res: Response) => {

    const result = await ScheduleService.insertIntoDB(req.body);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Schedule Created successfuly..!",
        data: result
    })
});


const scheduleForDoctor = catchAsync(async (req: Request, res: Response) => {
    
    return "result"
})


export const ScheduleController = {
    insertIntoDB,
    scheduleForDoctor
}