import { Prisma } from "@prisma/client";

export const Enterprise: Prisma.ProjectCreateInput[] = [
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
        name: "InerziaSoft.eu",
        type: "ENTERPRISE",
        timePeriod: "2017 - present",
        description: "InerziaSoft.eu is the official website of my dad's side hustle \"InerziaSoft\". My contributions in the company are many and a lot of my own products are published under InerziaSoft. The InerziaSoft.eu website allows users to explore our apps, potential customers to discover our Enterprise products, and anybody to ask questions and get support. Together with other peers from InerziaSoft, I rebuilt the website from scratch in 2017. I have been responsible of it ever since, publishing new updates and keeping it up-to-date.",
        technologies: "Core,React,JavaScript,PostgreSQL,SASS",
        sortIndex: 1,
        links: {
            create: [
                {
                    displayName: "InerziaSoft.eu",
                    content: "https://inerziasoft.eu"
                }
            ]
        }
    },
    {
        name: "Meteo",
        type: "ENTERPRISE",
        timePeriod: "2016 - present",
        description: "Meteo (\"Weather\" in Italian) is a complex system composed of a fully-featured website and a bare-bones server infrastructure, involving multiple technologies, that allow broadcasting of two offline-only devices to the Internet. Together with other peers from InerziaSoft, I designed, built and optimized the system to work 24/7 with almost zero human interaction needed. The system is still in use today and serves hundreds of users every day.",
        technologies: "Core,jQuery,PostgreSQL,PHP,SASS,RealVNC,OpenVPN,pfSense,VMWare ESXI,UptimeRobot",
        links: {
            create: [
                {
                    displayName: "Meteo on InerziaSoft.eu",
                    content: "https://inerziasoft.eu/enterprise/showcase/Meteo",
                    type: "GENERIC"
                },
                {
                    displayName: "Ship's Information Savona Official Website",
                    content: "https://shipsinformationsavona.it",
                    type: "GENERIC"
                }
            ]
        },
        sortIndex: 2
    },
    {
        name: "Dispatch",
        type: "ENTERPRISE",
        timePeriod: "2013 - present",
        description: "Dispatch is a cross functional management system conceived specifically for Harbor Pilots and Mooring Men of the Ports of Savona, Vado Ligure and Imperia. Dispatch was originally developed to be installed on-premises, but it has since evolved into Dispatch in the Cloud, which allows our users to benefit of a more powerful system that's always available without breaking the bank. Dispatch includes a number of smart features, such as automatic invoices and balances, effective statistics and more. The system began operating as primary solution for the Harbor Pilots in 2015; the next year, I contributed to the deploy of the system in the cloud for the Moorning Men. The system has zero minutes of downtime to this day.",
        technologies: "Core,jQuery,PostgreSQL,PHP,SASS",
        links: {
            create: [
                {
                    displayName: "Dispatch on InerziaSoft.eu",
                    content: "https://inerziasoft.eu/enterprise/showcase/Dispatch",
                    type: "GENERIC"
                }
            ]
        },
        sortIndex: 3
    },
    {
        name: "The InerziaSoft Web Infrastructure",
        type: "ENTERPRISE",
        timePeriod: "2016 - present",
        description: "Most of the Enterprise apps published by InerziaSoft are running on a custom server that I built and manage regularly. The server runs ESXI and most of the services are deployed as virtual machines. The infrastructure is secured with pfSense and CloudFlare.",
        technologies: "VMWare ESXI,pfSense,nginx,Cloudflare,UNIX,Python",
        sortIndex: 4
    },
    {
        name: "DispatchConnect",
        type: "ENTERPRISE",
        timePeriod: "2016 - present",
        description: "DispatchConnect is a companion app for Dispatch in the Cloud which allows for easy and secure access to a dedicated Dispatch instance from anywhere in the world. DispatchConnect encrypts the connection to Dispatch out-of-the-box, so even users that are not familiar with the best security practice can take advantage of Dispatch from anywhere they are, without risking data leaks. I recently rebuilt the app from scratch, which used to be for Windows-only, using Xamarin to bring it up-to-date with the latest WinUI framework as well as release it on macOS.",
        technologies: "C#,WinUI 3,Xamarin.macOS,.NET",
        links: {
            create: [
                {
                    displayName: "Dispatch on InerziaSoft.eu",
                    content: "https://inerziasoft.eu/enterprise/showcase/Dispatch",
                    type: "GENERIC"
                }
            ]
        },
        sortIndex: 5
    },
    {
        name: "Stocard for iOS",
        timePeriod: "2020 - 2022",
        type: "ENTERPRISE",
        description: "I contributed to many different projects including Stocard Pay, improvements to the Account system, implementing WebSocket communication with the backend, and many others.",
        technologies: "Swift,SwiftUI,RxSwift,WidgetKit,TypeScript,Kotlin,WebSocket,Apple Pay,WatchKit,Bitrise,CocoaPods",
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
        sortIndex: 6
    },
    {
        name: "Pria & Pillo Health",
        timePeriod: "2015 - 2019",
        type: "ENTERPRISE",
        description: "I built the apps for iOS and Android from scratch, leading the Mobile team of Pillo Health. I also participated substantially in defining the system architecture and definining the company operating model.",
        technologies: "Swift,Kotlin,Kotlin MultiPlatform,RxSwift,RxKotlin,Azure,Azure DevOps,CocoaPods,Carthage,Gradle",
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
                    type: "APPSTORE"
                }
            ]
        },
        sortIndex: 7
    },
    {
        name: "Multiple Enterprise Web Apps",
        timePeriod: "2015 - 2017",
        type: "ENTERPRISE",
        description: "During this period, I contributed to multiple Web Apps developed in C# for many different scopes and different customers. I drove and built some new features, but my main focus was on improving performances, general mainteinance, and support.",
        technologies: "ASP.NET MVC,Oracle,TFS,LINQ,Entity Framework",
        sortIndex: 8
    },
    {
        name: "Progetto DAE Liguria",
        timePeriod: "2014 - 2015",
        type: "ENTERPRISE",
        description: "I built the iOS app from scratch allowing users to locate the closest defibrillator. This app was part of the Progetto DAE Liguria and has been removed from the App Store in 2019.",
        technologies: "Objective-C,UIKit,MapKit,SQL Lite",
        sortIndex: 9,
        links: {
            create: [
                {
                    displayName: "Progetto DAE Liguria on AppAdvice",
                    content: "https://appadvice.com/game/app/progetto-dae-liguria/964212844",
                    type: "GENERIC"
                }
            ]
        }
    }
]

export const Products: Prisma.ProjectCreateInput[] = [
    {
        name: "InerziaTimer",
        type: "PRODUCTS",
        timePeriod: "2021 - present",
        description: "InerziaTimer is an app for macOS that focuses on one thing: timers. While this was originally my dad's idea, I recently took over the development of version 3.0. I am currently working on a brand new implementation which will support multiple timers, a sleek new UI (built in SwiftUI) and many other advanced features. I've putting in the hours to bring the new version of InerziaTimer to the App Store, but I do not want to rush it and release an half-backed product to the thousands of users that use InerziaTimer already every day. So, stay tuned!",
        technologies: "SwiftUI,Core Data,Combine",
        sortIndex: 0,
        links: {
            create: [
                {
                    displayName: "InerziaTimer on InerziaSoft.eu",
                    content: "https://inerziasoft.eu/products/showcase/inerziatimer",
                    type: "GENERIC"
                },
                {
                    displayName: "InerziaTimer on the App Store",
                    content: "https://apps.apple.com/app/id566833665",
                    type: "APPSTORE"
                }
            ]
        }
    },
    {
        name: "Redirekt",
        type: "PRODUCTS",
        timePeriod: "2020 - present",
        description: "Redirekt is an app for iOS, iPadOS and macOS that allows you to store your bookmarks in a browser-indipendent fashion; it also supports smart rules to help you navigate the crazy amount of browsers that exist nowadays. Redirekt is free to use with fair use limits; for advanced users, Redirekt Pro is offered with a very cheap subscription. I built this product from scratch, driving it from the concept to the first version on the App Store, and now continuing to work on it with new features, bug fixes and improvements.",
        technologies: "Swift,Firebase,UIKit,Mac Catalyst,RevenueCat,AppCenter",
        sortIndex: 1,
        links: {
            create: [
                {
                    displayName: "Redirekt on InerziaSoft.eu",
                    content: "https://inerziasoft.eu/products/showcase/redirekt",
                    type: "GENERIC"
                },
                {
                    displayName: "Redirekt on the App Store",
                    content: "https://apps.apple.com/app/id1505386498",
                    type: "APPSTORE"
                }
            ]
        }
    },
    {
        name: "InerziaIcon",
        type: "PRODUCTS",
        timePeriod: "2007 - present",
        description: "InerziaIcon is the first app I've ever created. I started working on it in 2007, experimenting around with AppleScript Studio, but it has since developed into a fully featured tool to manage and change icons on your Mac. In 2012, I rewrote it completely in Objective-C and released it on the App Store with InerziaSoft. The app featured an iTunes-like UI, allowing users to add, sort and edit their icons. It was also trying to compete with the omnipresent CandyBar by providing features to change the system icons. In 2020, I finally found the time to rewrite it from scratch in Swift, adding support for SVG and PDF icons, and switch to a refreshed business model based on in-app purchases.",
        technologies: "Swift,Objective-C,AppKit,RevenueCat,AppCenter,SVGKit",
        sortIndex: 2,
        links: {
            create: [
                {
                    displayName: "InerziaIcon on InerziaSoft.eu",
                    content: "https://inerziasoft.eu/products/showcase/inerziaicon",
                    type: "GENERIC"
                },
                {
                    displayName: "InerziaIcon on the App Store",
                    content: "https://apps.apple.com/app/id581760164",
                    type: "APPSTORE"
                }
            ]
        }
    },
    {
        name: "InerziaSmartWallpaper",
        type: "PRODUCTS",
        timePeriod: "2015 - 2016",
        description: "For my first app in Swift, I wanted to build something simple that would involve some network connectivity. This small macOS utility, inspired by the Chromecast home screen, was able to download a new wallpaper every day from Bing or the Chromecast backgrounds directory.",
        technologies: "Swift,AppKit",
        sortIndex: 3
    },
    {
        name: "InerziaStudios",
        type: "PRODUCTS",
        timePeriod: "2012 - 2015",
        description: "Built for the pre-Netflix era, this app allowed macOS users to manage their movies catalogue. Among other features that made it the iTunes for movies, it also featured a custom movie player based on VLCKit and the ability to import data automatically from TMBD and Wikipedia. The app has been discontinued after the debut of Netflix in Italy in 2015.",
        technologies: "Objective-C,AppKit,VLCKit",
        sortIndex: 3
    }
]

export const OpenSource: Prisma.ProjectCreateInput[] = [
    {
        name: "This Website",
        type: "OPENSOURCE",
        timePeriod: "2020 - present",
        description: "My personal portfolio of projects and interesting facts about my career. The version you're currently browsing has been introduced in 2022, after a new rewrite using Next.js and Prisma.",
        technologies: "Next.js,Prisma,TypeScript,React,PostgreSQL,SASS,Yarn",
        sortIndex: 0,
        links: {
            create: [
                {
                    displayName: "This website on GitHub",
                    content: "https://github.com/MrAsterisco/mrasteris.co",
                    type: "GITHUB"
                }
            ]
        }
    },
    {
        name: "RxFireAuth",
        type: "OPENSOURCE",
        timePeriod: "2020 - present",
        description: "A Reactive-compatible wrapper around the Firebase Authentication SDK for iOS written in Swift and compatible with CocoaPods and Swift Package Manager. While I created this library to simplify the development of Redirekt for iOS, the supported platforms also include Mac Catalyst and macOS.",
        technologies: "Swift,Firebase,CocoaPods,Swift Package Manager,AppAuth,RxSwift,Jazzy",
        sortIndex: 1,
        links: {
            create: [
                {
                    displayName: "RxFireAuth on GitHub",
                    content: "https://github.com/MrAsterisco/RxFireAuth",
                    type: "GITHUB"
                },
                {
                    displayName: "RxFireAuth on CocoaPods",
                    content: "https://cocoapods.org/pods/RxFireAuth",
                    type: "GENERIC"
                }
            ]
        }
    },
    {
        name: "RxFireAuth-Android",
        type: "OPENSOURCE",
        timePeriod: "2021 - present",
        description: "A mirror version of RxFireAuth for Android. The library is entirely written in Kotlin and it's helping me laying the foundation of Redirekt for Android.",
        technologies: "Kotlin,Firebase,Gradle,RxKotlin",
        sortIndex: 2,
        links: {
            create: [
                {
                    displayName: "RxFireAuth-Android on GitHub",
                    content: "https://github.com/MrAsterisco/RxFireAuth-Android",
                    type: "GITHUB"
                }
            ]
        }
    },
    {
        name: "Time",
        type: "OPENSOURCE",
        timePeriod: "2019 - present",
        description: "A Kotlin Multiplatform implementation of the Time library for Android. The library uses 100% platform-independent code, which makes it compatible with any platform where Kotlin is supported.",
        technologies: "Kotlin,Kotlin Multiplatform,Gradle,GitHub Packages",
        sortIndex: 3,
        links: {
            create: [
                {
                    displayName: "Time on GitHub",
                    content: "https://github.com/MrAsterisco/Time",
                    type: "GITHUB"
                }
            ]
        }
    },
    {
        name: "SortedList",
        type: "OPENSOURCE",
        timePeriod: "2019 - present",
        description: "An efficient implementation of a sorted list for Kotlin Multiplatform, based on an AVL tree. The library uses 100% platform-independent code.",
        technologies: "Kotlin,Kotlin Multiplatform,Gradle,GitHub Packages",
        sortIndex: 4,
        links: {
            create: [
                {
                    displayName: "SortedList on GitHub",
                    content: "https://github.com/MrAsterisco/SortedList",
                    type: "GITHUB"
                }
            ]
        }
    },
    {
        name: "Core",
        type: "OPENSOURCE",
        timePeriod: "2016 - present",
        description: "Core is a framework to build web applications in PHP and JavaScript. It currently moves most of the Enterprise web apps of InerziaSoft with great performances and stability. It features advanced functions such as automatic routing discovery, APIs, authentication, ORM and more. It is based on the FatFree framework.",
        technologies: "PHP,JavaScript,Python,FatFree,Composer,NPM",
        sortIndex: 5,
        links: {
            create: [
                {
                    displayName: "Core on GitLab",
                    content: "https://gitlab.com/InerziaSoft/Core",
                    type: "GITLAB"
                }
            ]
        }
    },
    {
        name: "homebridge-hisense-tv",
        type: "OPENSOURCE",
        timePeriod: "2021 - present",
        description: "A Homebridge plugin to control RemoteNow-compatible HiSense TVs. I built it from scratch to explore the Homebridge platform and also add my own TV to HomeKit. It is based on an existing Python script that communicates with the TV via MQTT.",
        technologies: "TypeScript,Python,MQTT,Homebridge,NPM",
        sortIndex: 6,
        links: {
            create: [
                {
                    displayName: "homebridge-hisense-tv on GitHub",
                    content: "https://github.com/MrAsterisco/homebridge-hisense-tv",
                    type: "GITHUB"
                }
            ]
        }
    },
    {
        name: "StyleableLabel",
        type: "OPENSOURCE",
        timePeriod: "2020 - present",
        description: "A simple UILabel subclass that supports corner radii and content insets without breaking AutoLayout.",
        technologies: "Swift,UIKit,CocoaPods,Swift Package Manager",
        sortIndex: 7,
        links: {
            create: [
                {
                    displayName: "StyleableLabel on GitHub",
                    content: "https://github.com/MrAsterisco/StyleableLabel",
                    type: "GITHUB"
                }
            ]
        }
    },
    {
        name: "OAuth2-Password",
        type: "OPENSOURCE",
        timePeriod: "2019 - 2020",
        description: "A fork of a Java library that implements the OAuth2-Password standard. I converted the library to Kotlin with some minor improvements. While the repository is still available, it is currently in an unsupported state.",
        technologies: "Kotlin,Gradle,OAuth",
        sortIndex: 8,
        links: {
            create: [
                {
                    displayName: "OAuth2-Password on GitHub",
                    content: "https://github.com/MrAsterisco/OAuth2-Password",
                    type: "GITHUB"
                }
            ]
        }
    },
    {
        name: "MSAL",
        type: "OPENSOURCE",
        timePeriod: "2017 - 2019",
        description: "A fork of the original MSAL SDK from Microsoft. The library allows users to authenticate to your app using Microsoft Azure Active Directory. The original fork by Microsoft had a lot of issues and was not suitable for the needs of the Pillo Health at the time.",
        technologies: "Objective-C,Azure,CocoaPods,Azure Active Directory",
        sortIndex: 9,
        links: {
            create: [
                {
                    displayName: "MSAL on GitHub",
                    content: "https://github.com/MrAsterisco/MSAL",
                    type: "GITHUB"
                }
            ]
        }
    },
    {
        name: "SmartISODateFormatter",
        type: "OPENSOURCE",
        timePeriod: "2018 - 2019",
        description: "An improved implementation of a DateFormatter that understands the ISO format. While Apple provides an implementation, it does not support parsing different formats at the same time, which is what I focused on in this small library. The library is compatible with iOS, macOS, watchOS and tvOS.",
        technologies: "Swift,CocoaPods",
        sortIndex: 10,
        links: {
            create: [
                {
                    displayName: "SmartISODateFormatter on GitHub",
                    content: "https://github.com/MrAsterisco/SmartISODateFormatter",
                    type: "GITHUB"
                }
            ]
        }
    },
    {
        name: "fattura-elettronica",
        type: "OPENSOURCE",
        timePeriod: "2018 - 2019",
        description: "A PHP library to create, update and validate Italian electronic invoices. Based on another library, I contributed by implementing most of the missing parts of the XML schema definition.",
        technologies: "PHP,Composer",
        sortIndex: 11,
        links: {
            create: [
                {
                    displayName: "fattura-elettronica on GitHub",
                    content: "https://github.com/InerziaSoft/fattura-elettronica",
                    type: "GITHUB"
                }
            ]
        }
    }
]