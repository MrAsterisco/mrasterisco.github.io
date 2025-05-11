import Container from "../_components/Container";
import Footer from "../_components/Footer";
import GetInTouchButton from "../_components/GetInTouchButton";
import Navigation from "../_components/Navigation";

export default function Leadership() {
  return (
    <>
      <Navigation />
      <Container title="My Leadership Manifesto" className="mt-12">
        <p className="text-slate-700 dark:text-slate-300 mt-2">
          This document is a non-exhaustive description of the philosophy that drives my work as a manager and leader.
          I developed the content of this document over the years, and I am constantly updating it with ideas and concepts as I embed them in my work.
          I am sharing it with the world in the hope that it can help others in their journey or spawn new conversations around what it means to be a leader.
        </p>

        <p className="mt-4 font-bold">
          Do you have a different perspective? I would love to hear from you.
        </p>

        <GetInTouchButton className="mt-4 inline-block" />
      </Container>

      <div className="flex flex-col items-stretch gap-8 mt-12">
        <Container title="Culture of Trust">
          <p className="font-bold">
            I believe that trust is the foundation of any successful team.
          </p>
          <ul className="mt-4 text-slate-700 dark:text-slate-300">
            <li>I trust that my team members are doing their best to achieve the goals we set together.</li>
            <li>I trust that they are capable of making the right decisions and I trust that they will ask for help when they need it.</li>
            <li>I trust that they will take ownership of their work and that they will be accountable for their actions.</li>
            <li>I trust that they will be honest with me and with each other and I know they will expect me to be honest with them.</li>
          </ul>
        </Container>

        <Container title="Lead with Clarity and Calm">
          <p className="font-bold">
            I believe that a leader should be a source of clarity and calm for their team.
          </p>
          <ul className="mt-4 text-slate-700 dark:text-slate-300">
            <li>I strive to provide clear direction and expectations to my team.</li>
            <li>I aim to create an environment where my team feels safe to express their ideas and concerns.</li>
            <li>I actively protect the team from disruptions, ensuring they can give their best, regardless of the situation.</li>
          </ul>
        </Container>

        <Container title="Pragmatism over Perfection">
          <p className="font-bold">
            I believe that perfection is the enemy of progress.
          </p>
          <ul className="mt-4 text-slate-700 dark:text-slate-300">
            <li>I think that progress is made by iterating. <i>Rome wasn&apos;t built in a day</i>.</li>
            <li>I encourage my team to focus on delivering value rather than striving for perfection.</li>
            <li>I am ready to step into the decision-making process to find the correct balance between quality and value.</li>
          </ul>
        </Container>

        <Container title="Be Cost-Effective, Build for the Future">
          <p className="font-bold">
            I believe that a leader should be a steward of the company&apos;s resources.
          </p>
          <ul className="mt-4 text-slate-700 dark:text-slate-300">
            <li>I encourage my team to think about the long-term impact of their decisions.</li>
            <li>I strive to create a culture of cost-effectiveness and sustainability.</li>
            <li>I am always thinking about what&apos;s happening now, while looking at what&apos;s next.</li>
          </ul>
        </Container>

        <Container title="Empower Through Infrastructure">
          <p className="font-bold">
            I believe that processes and tools should be enablers, not blockers.
          </p>
          <ul className="mt-4 text-slate-700 dark:text-slate-300">
            <li>I strive to create an environment where my team has the tools they need to succeed.</li>
            <li>I believe that most mistakes happen when processes or tool are not set up correctly.</li>
            <li>I am always looking for ways to improve our flows to make work easier and more efficient.</li>
          </ul>
        </Container>

        <Container title="Don't Forget the Human">
          <p className="font-bold">
            I believe that a leader should be a human first.
          </p>
          <ul className="mt-4 text-slate-700 dark:text-slate-300">
            <li>I strive to create an environment where my team feels happy, challenged, and safe.</li>
            <li>I encourage my team to bring their whole selves to work.</li>
            <li>I strongly believe that humans build value, not money, tools, or AI.</li>
          </ul>
        </Container>
      </div>
      <Footer />
    </>
  )
}