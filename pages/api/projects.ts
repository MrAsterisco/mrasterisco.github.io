import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res
        .status(200)
        .json(
            await prisma.project.findMany(
                {
                    include: {links: true},
                    orderBy: [{sortIndex: "asc"}]
                }
            )
        )
}