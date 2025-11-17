import { Request, Response } from "express";
import { MetaService } from "./meta.service";
import { IJWTPayload } from "../../types/common";
import sendResponse from "../../shared/sendResponse";
import catchAsync from "../../shared/catchAsync";
import { prisma } from "../../shared/prisma";
import { PaymentStatus } from "../../../generated/enums";

const fetchDashboardMetaData = catchAsync( async(req: Request & {user?: IJWTPayload}, res: Response) => {
    
    const user = req.user as IJWTPayload;
    const result = await MetaService.fetchDashboardMetaData(user);

        sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Meta data fetched successfuly..!",
        data: result
    })
})



const getAdminMetaData = async() => {
    const patientCount = await prisma.patient.count();
    const doctorCount = await prisma.doctor.count();
    const adminCount = await prisma.admin.count();
    const appoinmentCount = await prisma.appoinment.count();
    const paymentCount = await prisma.payment.count();

    const totalRevenue = await prisma.payment.aggregate({
        _sum: {
            amount: true
        },
        where: {
            status: PaymentStatus.PAID
        }
    });

}

export const MetaController = {
fetchDashboardMetaData
}