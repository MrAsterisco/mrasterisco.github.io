import { Prisma } from "@prisma/client";

const Projects: Prisma.ProjectCreateInput[] = [
    {
        name: "Klarna App",
        type: "ENTERPRISE",
        timePeriod: "2022 - present",
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
        },
        sortIndex: 0
    },
    {
        name: "Stocard for iOS",
        timePeriod: "2020 - 2022",
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
        },
        sortIndex: 1
    },
    {
        name: "Pria & Pillo Health",
        timePeriod: "2015 - 2019",
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
        },
        sortIndex: 2
    },
    {
        name: "Enterprise Web Apps for RINA",
        timePeriod: "2015 - 2016",
        type: "ENTERPRISE",
        description: "I contributed to two web apps involved in the certification processes of boats by RINA. While I built some new features, my focus was mostly on improving performances, general mainteinance, and support.",
        technologies: "ASP.NET MVC,Oracle,TFS,LINQ,Entity Framework",
        sortIndex: 3
    },
    {
        name: "Progetto DAE Liguria",
        timePeriod: "2014 - 2015",
        type: "ENTERPRISE",
        description: "I built the iOS app from scratch allowing users to locate the closest defibrillator. This app was part of the Progetto DAE Liguria and has been removed from the App Store in 2019.",
        technologies: "Objective-C,UIKit,MapKit,SQL Lite",
        sortIndex: 4
    }
]

export default Projects