import { PrismaClient, Major, Prisma } from "@prisma/client";

import { CreateMajorDto } from "../types/major";

const prisma = new PrismaClient();

export const createMajor = async (major: CreateMajorDto): Promise<Major> => {
    return prisma.major.create({ data: major });
};

export const getMajors = async (): Promise<Major[]> => {
    return prisma.major.findMany();
}

export const getMajor = async (id: string): Promise<Major | null> => {
    return prisma.major.findUnique({ where: { id } });
}

export const updateMajor = async (id: string, data: { name?: string; description?: string; code?: string  }): Promise<Major | null> => {
    return prisma.major.update({ where: { id },data });
}

export const removeMajor = async (id: string): Promise<Major | null> => {
    return prisma.major.delete({ where: { id } });
}
