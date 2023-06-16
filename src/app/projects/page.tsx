import { Project } from '@/components/project';

import { PROJECTS_DATA } from './data';

export default function ProjectsPage() {
  return (
    <section>
      <h2 className="sr-only">Projects Outside work</h2>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {PROJECTS_DATA.map((i) => (
          <Project key={i.title} {...i} />
        ))}
      </ul>
    </section>
  );
}

export const metadata = {
  title: 'Projects',
};
