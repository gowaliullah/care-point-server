import { paginationHelper } from "../../shared/pagination";
import { prisma } from "../../shared/prisma"

const getAllPatientFromDB = async (options: any) => {
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper.pagination(options);

    const patients = await prisma.patient.findMany({
        skip,
        take: Number(limit),
        orderBy: {
            [sortBy]: sortOrder
        }

    });

    const total = await prisma.patient.count()

    return {
        meta: {
            page,
            limit,
            total
        },
        data: patients
    }
}


const getSinglePatinetFromDB = async (id: string) => {
    const patient = await prisma.patient.findFirstOrThrow({
        where: {
            id
        }
    })

    return patient
}

export const PatientServices = {
    getAllPatientFromDB,
    getSinglePatinetFromDB
}