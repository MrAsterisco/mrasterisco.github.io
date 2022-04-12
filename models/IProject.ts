import { ProjectType } from "@prisma/client"
import ILink from "./ILink"

export default interface IProject {
    id: number
    name: string
    timePeriod: string
    type: ProjectType
    description: string
    technologies: string
    links: ILink[]
}