import Container from "./_components/Container";
import Experience from "./_components/Experience";
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

      <Experience />

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
