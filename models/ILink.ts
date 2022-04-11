import { LinkType } from "@prisma/client"

export default interface ILink {
    displayName: string
    uri: string,
    type: LinkType
}