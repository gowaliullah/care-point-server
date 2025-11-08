import { Request } from "express";
import { prisma } from "../../shared/prisma";
import { Specialties } from "../../../generated/client";
import { fileUploder } from "../../helper/fileUploder";

const inserIntoDB = async (req: Request) => {
    
     if (req.file) {
        const fileUpload = await fileUploder.uploadToCloudinary(req.file)
        req.body.icon = fileUpload?.secure_url
    }

    return await prisma.specialties.create({
        data: req.body
    })
};

const getAllFromDB = async (): Promise<Specialties[]> => {
    return await prisma.specialties.findMany();
}

const deleteFromDB = async (id: string): Promise<Specialties> => {
    const result = await prisma.specialties.delete({
        where: {
            id,
        },
    });
    return result;
};

export const SpecialtiesService = {
    inserIntoDB,
    getAllFromDB,
    deleteFromDB
}