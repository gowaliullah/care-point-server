import { Request, Response } from "express";
import sendResponse from "../../shared/sendResponse";
import catchAsync from "../../shared/catchAsync";
import httpStatus from 'http-status';
import { IJWTPayload } from "../../types/common";
import { prisma } from "../../shared/prisma";
import { reviewService } from "./review.service";

const insertIntoDB = catchAsync(async(req: Request & {user?: IJWTPayload}, res: Response) => {
    const user = req.user;
    const result = await reviewService.insertIntoDB(user as IJWTPayload, req.body);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "Review Created successfully....!",
        data: result
    })
})



export const reviewController = {
    insertIntoDB
}