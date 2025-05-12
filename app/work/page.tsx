import Link from "next/link";
import Container from "../_components/Container";
import GetInTouchButton from "../_components/GetInTouchButton";
import Navigation from "../_components/Navigation";
import Footer from "../_components/Footer";
import FeaturedProject from "../_components/FeaturedProject";
import { InerziaSoft, Linearity } from "../_models/projects";
import App from "../_components/App";
import { Apps } from "../_models/apps";
import Button from "../_components/Button";

export default function Work() {
  return (
    <>
      <Navigation />

      <Container title="My Work" className="mt-12">
        <p className="text-slate-700 dark:text-slate-300 mt-2">
          I&apos;ve worked in a variety of environments, from fast-paced startups to large corporations. I also run my own side venture, <Link href={"https://inerziasoft.eu"} target="_blank" className="underline">InerziaSoft</Link>, where I’ve built complex web and native applications. On this page, you’ll find a curated selection of my work, including some of the most interesting projects I’ve contributed to.
        </p>

        <p className="italic text-slate-700 dark:text-slate-300 mt-4">
          This is a non-exhaustive list of my work. I have worked on so many things that I can&apos;t list all of them here.
        </p>

        <p className="font-bold">
          Would you like to know more?
        </p>

        <GetInTouchButton className="mt-4 inline-block" />
      </Container>

      <div className="flex md:flex-row flex-col flex-wrap items-stretch gap-4 mt-12">
        <FeaturedProject project={Linearity} />
        <FeaturedProject project={InerziaSoft} />
      </div>

      <Container
        className="mt-12"
        title="Apps">
        <p className="text-slate-700 dark:text-slate-300 text-sm">
          I built and contributed to several apps. Here&apos;s a selection of some of the most interesting ones.
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          {
            Apps.map((app) => (
              <App
                key={app.name}
                name={app.name}
                iconSrc={app.iconSrc}
                iconAlt={app.iconAlt}
                linkURL={app.linkURL}
                platforms={app.platforms}
              />
            ))
          }
        </div>
      </Container>

      <Container
        className="mt-12"
        title="Open Source">
        <p className="text-slate-700 dark:text-slate-300 text-sm">
          I am a strong believer in the power of open source software. I have contributed to several open source projects, and I am often releasing my own projects as open source.
        </p>

        <Button
          className="mt-4 inline-block"
          href="https://github.com/MrAsterisco"
          target="_blank"
          title="Check out my GitHub profile" />
      </Container>

      <Container
        className="mt-12"
        title="Articles">
        <p className="text-slate-700 dark:text-slate-300 text-sm">
          When I have time, I like to write articles about my experiences, my leadership style, and my thoughts on technologies and trends. I don&apos; write as often as I would like, but you can read some of my articles on Medium.
        </p>

        <Button
          className="mt-4 inline-block"
          href="https://medium.com/@alessio.mm"
          target="_blank"
          title="Read my articles on Medium" />
      </Container>
      <Footer />
    </>
  )
}