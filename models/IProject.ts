import { ProjectType } from "@prisma/client"
import ILink from "./ILink"

export default interface IProject {
    id: number
    name: string
    type: ProjectType
    description: string
    technologies: string
    links: ILink[]
}