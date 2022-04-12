import { PrismaClient } from "@prisma/client";
import Projects from "./projects";
import Languages from "./languages";

const prisma = new PrismaClient()

async function main() {
    Projects.map(async (p) => await prisma.project.create({data: p}))
    Languages.map(async (l) => await prisma.language.create({data: l}))
}

main()
    .catch((e) => { console.error(e); process.exit(1); })
    .finally(async () => await prisma.$disconnect())