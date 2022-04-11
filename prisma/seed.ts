import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const projects: Prisma.ProjectCreateInput[] = [
    {
        name: "Klarna App",
        type: "ENTERPRISE",
        description: "Focusing mostly on the iOS side, I contribute daily to the foundation of the app to ensure a smoooth experience for users and developers.",
        technologies: "Swift,React,AWS,Kotlin,Yarn,Jenkins,CocoaPods,Gradle",
        links: {
            create: [
                {
                    displayName: "Engineering @ Klarna",
                    content: "https://engineering.klarna.com",
                    type: "GENERIC",
                },
                {
                    displayName: "Klarna on the App Store",
                    content: "https://apps.apple.com/app/klarna-shop-now-pay-later/id1115120118",
                    type: "APPSTORE"
                }
            ]
        }
    },
    {
        name: "Stocard for iOS",
        type: "ENTERPRISE",
        description: "I contributed to many different projects including Stocard Pay, improvements to the Account system, implementing WebSocket communication with the backend, and many others.",
        technologies: "Swift,SwiftUI,WidgetKit,TypeScript,Kotlin,WebSocket,Apple Pay,WatchKit,Bitrise,CocoaPods",
        links: {
            create: [
                {
                    displayName: "Official Website",
                    content: "https://stocardapp.com/",
                    type: "GENERIC"
                },
                {
                    displayName: "Stocard on the App Store",
                    content: "https://apps.apple.com/app/stocard-loyalty-cards-wallet/id444578884",
                    type: "APPSTORE"
                }
            ]
        }
    },
    {
        name: "Pria & Pillo Health",
        type: "ENTERPRISE",
        description: "I built the apps for iOS and Android from scratch, leading the Mobile team of Pillo Health. I also participated substantially in defining the system architecture and definining the company operating model.",
        technologies: "Swift,Kotlin,Kotlin MultiPlatform,Azure,Azure DevOps,CocoaPods,Carthage,Gradle",
        links: {
            create: [
                {
                    displayName: "Pria by Stanley Black & Decker",
                    content: "https://www.okpria.com",
                    type: "GENERIC"
                },
                {
                    displayName: "Pria on the App Store",
                    content: "https://apps.apple.com/us/app/pria-by-black-decker/id1435313823",
                    type: "GENERIC"
                }
            ]
        }
    }
]

const languages: Prisma.LanguageCreateInput[] = [
    {
        name: "Swift",
        description: "The choice I make eyes-closed when developing for any Apple platform.",
        iconUri: "/swift.webp"
    },
    {
        name: "Kotlin",
        description: "My favorite cross-platform and multi-purpose language, for anything from Android to backend dev with Ktor.",
        iconUri: "/kotlin.webp"
    },
    {
        name: "PHP",
        description: "A well-established language that I learned to love and hate. I used it mostly for Enterprise apps and websites.",
        iconUri: "/php.webp"
    },
    {
        name: "C#",
        description: "I've seen my fair share of lines of code in C#, mostly in Enterprise environments. Also, the only choice for the Xamarin apps I built.",
        iconUri: "/csharp.webp"
    },
    {
        name: "Python",
        description: "Whenever I need to automate something or write a script, this is the language I use.",
        iconUri: "/python.webp"
    },
    {
        name: "JavaScript",
        description: "Not my favorite language, but definitely one of the most versatile. I used it mostly with React and jQuery.",
        iconUri: "/javascript.webp"
    },
    {
        name: "TypeScript",
        description: "Replacing JavaScript with this one whenever I can. Always combining it with either React or Next.js.",
        iconUri: "/typescript.webp"
    },
    {
        name: "SASS",
        description: "The preferred way to write CSS in all of the web apps I built.",
        iconUri: "/sass.webp"
    }
]

async function main() {
    projects.map(async (p) => await prisma.project.create({data: p}))
    languages.map(async (l) => await prisma.language.create({data: l}))
}

main()
    .catch((e) => { console.error(e); process.exit(1); })
    .finally(async () => await prisma.$disconnect())