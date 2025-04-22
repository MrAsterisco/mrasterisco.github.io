import React from 'react';
import Container from './Container';
import ExperienceTile from './ExperienceTile';

export default function Experience() {
  return (
    <Container
      className="mt-12 text-slate-800 dark:text-slate-200 [&_span]:font-bold"
      title="My Experience"
      linkTitle="Learn More >"
      linkURL="https://www.linkedin.com/in/alessiomoiso1993/"
    >
      <div className="flex flex-col md:flex-row gap-8 mt-12 mb-12">
        <ExperienceTile
          years={2}
          prefix="in"
          title="Senior Leadership" />

        <ExperienceTile
          years={5}
          prefix="as"
          title="Engineering Manager" />

        <ExperienceTile
          years={12}
          prefix="as"
          title="Software Engineer" />
      </div>
    </Container>
  )
}