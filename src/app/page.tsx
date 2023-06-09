export default function AppHome() {
  return (
    <main className="space-y-8 p-4 pb-20">
      <section>
        <h1 className="text-4xl font-bold">Vishnumohan R K</h1>
        <p className="my-4 text-neutral-400">
          I&apos;m a Front-End Web Developer passionate about building
          performant, accessible and user friendly apps.
        </p>
      </section>
      <section>
        <h2 className="text-3xl font-bold">Projects</h2>
        <ul className="my-4 space-y-4">
          <Project
            name="Store Snippets"
            desc="A Code Snippet Sharing, Storing app."
          />
          <Project
            name="Notez App"
            desc="A Full Stack Note taking app with user authentication, Rich text editing and MarkDown support."
          />
          <Project
            name="NPM Package Size - Browser Extension"
            desc="A Chrome Extension that adds Bundlephobia Minzip size badge to the corresponding NPM package page."
          />
          <Project
            name="Sentiment Analysis on Textual Images"
            desc="A Web Application to obtain the Sentiment of any given textual image."
          />
          <Project
            name="Twitter Sentiment Analysis"
            desc="A Web Application to visualize sentiments for tweets analyzed using NLP."
          />
          <Project
            name="World Demographics"
            desc="A Web Application that shows the details of every country in the world."
          />
          <Project
            name="IP Geolocation Details"
            desc="A Web Application that shows the geolocation details of any given domain or IP Address."
          />
        </ul>
      </section>
      <section>
        <h2 className="text-3xl font-bold">Links</h2>
        <ul className="my-4 flex space-x-4">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/vishnumohanrk"
              className="font-semibold underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
              href="https://www.linkedin.com/in/vishnumohanrk/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

function Project({ name, desc }: { name: string; desc: string }) {
  return (
    <li>
      <article>
        <h3 className="font-semibold underline">{name}</h3>
        <p className="mt-1 text-neutral-400">{desc}</p>
      </article>
    </li>
  );
}
