import { LinkType } from "@prisma/client"

export default interface ILink {
    displayName: string
    content: string,
    type: LinkType
}