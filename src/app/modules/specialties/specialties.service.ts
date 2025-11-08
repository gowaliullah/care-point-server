import { Request } from "express";
import { prisma } from "../../shared/prisma";
import { fileUploder } from "../../helper/fileUploder";
import { Specialties } from "../../../generated/client";

const inserIntoDB = async (req: Request) => {

    const file = req.file;

    if (file) {
        const uploadToCloudinary = await fileUploder.uploadToCloudinary(file);
        req.body.icon = uploadToCloudinary?.secure_url;
    }

    const result = await prisma.specialties.create({
        data: req.body
    });

    return result;
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