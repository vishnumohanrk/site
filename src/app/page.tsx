import { LINKS, PROJECTS_DATA } from './data';

export default function AppHome() {
  return (
    <main className="space-y-8 p-4 pb-20">
      <section>
        <h1 className="text-4xl font-bold">Vishnumohan R K</h1>
        <p className="my-4 text-neutral-400">
          Passionate React front-end web dev creating stellar, user-centric web
          apps with performance and accessibility in mind.
        </p>
      </section>
      <section>
        <h2 className="text-3xl font-bold">Projects</h2>
        <ul className="my-4 space-y-6">
          {PROJECTS_DATA.map((i) => (
            <li key={i.name}>
              <article>
                <h3 className="font-semibold underline">
                  <a href={i.link} target="_blank" rel="noopener noreferrer">
                    {i.name}
                  </a>
                </h3>
                <p className="mt-1 text-neutral-400">{i.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-3xl font-bold">Links</h2>
        <ul className="my-4 flex space-x-4">
          {LINKS.map((i) => (
            <li key={i.name}>
              <a
                href={i.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline"
              >
                {i.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
