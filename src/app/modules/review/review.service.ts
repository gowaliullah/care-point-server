import { IJWTPayload } from "../../types/common"
import { prisma } from "../../shared/prisma"
import httpStatus from 'http-status';
import ApiError from "../../errors/ApiError"

const insertIntoDB = async(user: IJWTPayload, payload: any) => {
    const patientdata = await prisma.patient.findUniqueOrThrow({
        where: {
            email: user.email
        }
    })

    const appoinmentData = await prisma.appoinment.findUniqueOrThrow({
        where: {
            id: payload.appoinmentId
        }
    })

    if(patientdata.id !== appoinmentData.patientId) {
        throw new ApiError(httpStatus.BAD_REQUEST, "This is not your appoinment");
    }

    return await prisma.$transaction(async(tnx) => {
        const result = await tnx.review.create({
            data: {
                appointmentId: appoinmentData.id,
                doctorId: appoinmentData.doctorId,
                patientId: appoinmentData.patientId,
                rating: payload.rating,
                comment: payload.comment
            }
        })

           const avgRating = await tnx.review.aggregate({
                _avg: {
                    rating: true
                },
                where: {
                    doctorId: appoinmentData.doctorId
                }
           })

           await tnx.doctor.update({
                where: {
                    id: appoinmentData.doctorId
                },
                data: {
                    averageRating: avgRating._avg.rating as number
                }
           })

           return result;
    }) 

}


export const reviewService = {
    insertIntoDB
}