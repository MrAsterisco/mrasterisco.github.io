import { Prisma } from "@prisma/client";

const Languages: Prisma.LanguageCreateInput[] = [
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

export default Languages