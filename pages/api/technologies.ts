import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const technologies = [...new Set((await prisma.project.findMany())
        .map((p) => p.technologies)
        .map((t) => t.split(","))
        .flat())]
        .sort((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}))

    return res
        .status(200)
        .json(
            technologies
        )
}