import Container from "./_components/Container";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import TechnologyList from "./_components/TechnologyList";

export default function Home() {
  return (
    <>
    <Header />
    <main>
      <div className='mt-12'>
        <p className="text-2xl/10 md:text-4xl/14 text-slate-700 dark:text-slate-300 mx-8 md:mx-12 lg:mx-20 [&>span]:text-accent [&>span]:font-medium">
          I lead <span>high-performing teams</span> building <span>scalable and cost-effective systems</span>, aligning business goals with technical strategy across <span>backend, infrastructure, web, and native apps</span>.
        </p>
      </div>

      <Container 
        className="mt-12 text-slate-800 dark:text-slate-200 [&_span]:font-bold" 
        title="My Experience"
        linkTitle="Learn More >"
        linkURL="https://www.linkedin.com/in/alessiomoiso1993/"
      >
        <div className="mt-6">
          <h2 className="text-2xl md:text-3xl">5+ Years as <span>Manager</span></h2>
          <h5 className="text-lg md:text-xl">2+ in <span>Senior Leadership</span></h5>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl md:text-3xl">12+ Years as <span>Individual Contributor</span></h2>
          <h5 className="text-lg md:text-xl">6+ in <span>Building Complex and Scalable Systems</span></h5>
        </div>
      </Container>

      <Container
        className="mt-12"
        title="My Toolbelt"
      >
        <TechnologyList
          title={<>I build <span>native apps</span> with</>}
          technologies={[
            {
              logoURL: "/swift.webp",
              logoAlt: "Swift logo",
              name: "Swift",
            },
            {
              logoURL: "/kotlin.webp",
              logoAlt: "Kotlin logo",
              name: "Kotlin",
            },
            {
              logoURL: "/dotnet.webp",
              logoAlt: ".NET logo",
              name: "C# with .NET",
            },
            {
              logoURL: "/reactnative.webp",
              logoAlt: "React Native logo",
              name: "React Native",
            }
          ]}
        />

        <TechnologyList
          className="mt-8"
          title={<>I build <span>frontends and backends</span> with</>}
          technologies={[
            {
              logoURL: "/go.webp",
              logoAlt: "Go logo",
              name: "Go",
            },
            {
              logoURL: "/next.webp",
              logoAlt: "Next.js logo",
              name: "Next.js",
            },
            {
              logoURL: "/typescript.webp",
              logoAlt: "TypeScript logo",
              name: "TypeScript",
            },
            {
              logoURL: "/php.webp",
              logoAlt: "PHP logo",
              name: "PHP",
            },
            {
              logoURL: "/python.webp",
              logoAlt: "Python logo",
              name: "Python",
            },
            {
              logoURL: "/postgres.webp",
              logoAlt: "PostgreSQL logo",
              name: "PostgreSQL",
            }
          ]}
        />

        <TechnologyList
          className="mt-8"
          title={<>I build <span>infrastructure</span> with</>}
          technologies={[
            {
              logoURL: "/aws.webp",
              logoAlt: "AWS logo",
              name: "AWS",
            },
            {
              logoURL: "/gcp.webp",
              logoAlt: "Google Cloud Platform logo",
              name: "Google Cloud",
            },
            {
              logoURL: "/docker.webp",
              logoAlt: "Docker logo",
              name: "Docker",
            },
            {
              logoURL: "/kubernetes.webp",
              logoAlt: "Kubernetes logo",
              name: "Kubernetes",
            },
            {
              logoURL: "/terraform.webp",
              logoAlt: "Terraform logo",
              name: "Terraform",
            },
          ]}
        />
      </Container>
    </main>

    <Footer />
    </>
  );
}
