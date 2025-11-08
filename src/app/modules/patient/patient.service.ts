import { prisma } from "../../shared/prisma"

const getAllPatientFromDB = async () => {
    const patients = await prisma.patient.findMany();

    return patients
}


const getSinglePatinetFromDB = async(id: string) => {
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