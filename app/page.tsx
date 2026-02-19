export default function Home() {
  const year = new Date().getFullYear();

  const Pill = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1 text-sm text-neutral-200">
      {children}
    </span>
  );

  const Card = ({
    title,
    subtitle,
    bullets,
    tech,
    diagram,
    links,
  }: {
    title: string;
    subtitle: string;
    bullets: string[];
    tech: string;
    diagram?: string;
    links?: { label: string; href: string }[];
  }) => (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 transition hover:-translate-y-0.5 hover:border-neutral-600 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-neutral-300">{subtitle}</p>
        </div>
      </div>

      <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-neutral-300">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      {diagram ? (
        <pre className="mt-5 whitespace-pre-wrap rounded-xl border border-neutral-800 bg-black/60 p-4 font-mono text-sm text-emerald-300">
{diagram}
        </pre>
      ) : null}

      <p className="mt-5 text-xs text-neutral-500">{tech}</p>

      {links?.length ? (
        <div className="mt-4 flex flex-wrap gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white underline decoration-neutral-700 underline-offset-4 hover:decoration-neutral-300"
            >
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none fixed inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 20% 10%, rgba(59,130,246,0.12), transparent 45%), radial-gradient(circle at 80% 20%, rgba(16,185,129,0.08), transparent 40%), radial-gradient(circle at 50% 90%, rgba(236,72,153,0.06), transparent 50%)",
        }}
      />

      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 border-b border-neutral-900 bg-neutral-950/70 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold tracking-tight">
            VS
          </a>
          <div className="flex items-center gap-5 text-sm text-neutral-300">
            <a className="hover:text-white" href="#projects">
              Projects
            </a>
            <a className="hover:text-white" href="#skills">
              Skills
            </a>
            <a className="hover:text-white" href="#writing">
              Writing
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
            <a
              href="/Vidhya_resume_SE.pdf"
              download
              className="rounded-xl border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-white transition hover:border-neutral-600 hover:bg-neutral-900"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      <div id="top" className="mx-auto max-w-5xl px-6 py-14">
        {/* HERO */}
        <section className="mb-14">
          <p className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1 text-xs text-neutral-300">
            Open to roles • Data Engineering / ML Platform
          </p>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Vidhya Suram
          </h1>

          <p className="mt-3 text-xl text-neutral-300">
            Data Engineer • Distributed Systems • AWS • Azure • Databricks • DBT • GenAI • ML/AI
          </p>

          <p className="mt-5 max-w-2xl text-neutral-400 leading-relaxed">
            I build scalable, production-grade data platforms and ML pipelines—focused on reliability,
            performance, and measurable impact.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-white px-5 py-2.5 text-black font-medium transition hover:bg-neutral-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-neutral-800 px-5 py-2.5 text-white transition hover:border-neutral-600 hover:bg-neutral-900"
            >
              Contact
            </a>
            <a
              href="/Vidhya_Suram_Resume.pdf"
              download
              className="rounded-xl border border-neutral-800 px-5 py-2.5 text-white transition hover:border-neutral-600 hover:bg-neutral-900"
            >
              Download Resume
            </a>
            <a
              href="https://linkedin.com/in/vidhya131"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-neutral-800 px-5 py-2.5 text-white transition hover:border-neutral-600 hover:bg-neutral-900"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/vidhya131"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-neutral-800 px-5 py-2.5 text-white transition hover:border-neutral-600 hover:bg-neutral-900"
            >
              GitHub
            </a>
          </div>

          {/* IMPACT METRICS */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 transition hover:border-neutral-600">
              <p className="text-3xl font-bold">4+ yrs</p>
              <p className="mt-2 text-sm text-neutral-400">Production Data Engineering</p>
            </div>
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 transition hover:border-neutral-600">
              <p className="text-3xl font-bold">Billions</p>
              <p className="mt-2 text-sm text-neutral-400">Records processed at scale</p>
            </div>
  
          </div>
        </section>

        {/* ABOUT */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-4 max-w-4xl text-neutral-300 leading-relaxed">
            Data Engineer with 4+ years of experience building large-scale ETL pipelines, real-time
            microservices, and ML production workflows on AWS. Previously at Experian working on
            systems handling billions of consumer records. Currently pursuing MS in Computer Science
            (AI Track) at Binghamton University.
          </p>

          {/* CURRENTLY EXPLORING */}
          <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
            <h3 className="text-lg font-semibold">Currently Exploring</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-300">
              <li>LLM evaluation & monitoring for production pipelines</li>
              <li>Cost/performance tuning for distributed Spark workloads</li>
              <li>RAG system design patterns (retrieval quality, chunking, guardrails)</li>
            </ul>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mb-14 scroll-mt-28">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <p className="mt-2 text-sm text-neutral-400">
            Case-study style highlights showing problem → approach → impact.
          </p>

          <div className="mt-6 grid gap-6">
            <Card
              title="Scalable ETL Platform on AWS"
              subtitle="Designed distributed ETL pipelines processing massive datasets with reliability, observability, and cost efficiency."
              bullets={[
                "Built PySpark transformations on EMR orchestrated via Airflow with automated retries and monitoring.",
                "Optimized S3 lifecycle policies + Spot Instances + autoscaling to reduce AWS costs.",
                "Enabled analytics via S3 → Redshift and dashboards for operational visibility.",
              ]}
              diagram={`Kafka → Airflow → EMR (PySpark)
           ↓
          S3 → Redshift → QuickSight`}
              tech="Tech: PySpark, Airflow, EMR, S3, Glue, Lambda, Redshift, CloudWatch"
            />

            <Card
              title="Real-Time Microservices & Failure Automation"
              subtitle="Built a fault-tolerant microservice layer to improve real-time processing and reduce manual operations."
              bullets={[
                "Deployed Flask microservices on ECS with Jenkins CI/CD for repeatable, safe deployments.",
                "Integrated Kafka for real-time failure detection, error routing, and automated restart mechanisms.",
                "Improved reliability by reducing incident response time and increasing service resilience.",
              ]}
              diagram={`Client Requests → Async Service Layer → Model Invocation
                 ↓
                Kafka (signals) → Auto-recovery → Logs/Monitoring`}
              tech="Tech: Python, Flask, Asyncio/Aiohttp, Kafka, ECS, Jenkins, CloudWatch"
            />

            <Card
              title="GenAI LinkedIn Post Generator"
              subtitle="Built a GenAI app that generates style-consistent posts using topic extraction + few-shot prompting."
              bullets={[
                "Two-stage pipeline: extract topics + generate posts with influencer-style conditioning.",
                "Streamlit UI for topic/language/length controls for fast iteration.",
                "Designed prompts for consistency and reduced hallucination through constraints.",
              ]}
              tech="Tech: Python, Streamlit, LangChain, LLMs (Groq-hosted)"
              links={[
                { label: "GitHub Repo", href: "https://github.com/vidhya131/linkedin-post-generator" },
              ]}
            />
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mb-14 scroll-mt-28">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <p className="mt-2 text-sm text-neutral-400">Grouped for fast recruiter scanning.</p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
              <p className="text-xs text-neutral-500">Cloud & Data Engineering</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Pill>AWS</Pill>
                <Pill>EMR</Pill>
                <Pill>Glue</Pill>
                <Pill>Lambda</Pill>
                <Pill>S3</Pill>
                <Pill>Redshift</Pill>
                <Pill>Airflow</Pill>
                <Pill>Kafka</Pill>
                <Pill>PySpark</Pill>
                <Pill>Snowflake</Pill>
                <Pill>SQL</Pill>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
              <p className="text-xs text-neutral-500">ML / GenAI & Software Engineering</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Pill>LangChain</Pill>
                <Pill>RAG</Pill>
                <Pill>LlamaIndex</Pill>
                <Pill>PyTorch</Pill>
                <Pill>TensorFlow</Pill>
                <Pill>Docker</Pill>
                <Pill>Jenkins</Pill>
                <Pill>Git</Pill>
                <Pill>Python</Pill>
                <Pill>Flask</Pill>
              </div>
            </div>
          </div>
        </section>

        {/* CURRENTLY EXPLORING */}
        <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
          <h3 className="text-lg font-semibold">Currently Exploring</h3>
          <p className="mt-2 text-sm text-neutral-400">
            What I’m actively learning and building with right now.
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-neutral-800 bg-black/40 p-4 transition hover:border-neutral-600">
              <p className="text-xs uppercase tracking-wide text-neutral-500">Cloud & Data</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-300">
                <li>Azure Cloud (Databricks, ADF/Synapse basics)</li>
                <li>Databricks workflows (Spark jobs, notebooks, pipelines)</li>
              </ul>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-black/40 p-4 transition hover:border-neutral-600">
              <p className="text-xs uppercase tracking-wide text-neutral-500">GenAI</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-300">
                <li>LangChain, LlamaIndex</li>
                <li>RAG systems (chunking, retrieval, evaluation)</li>
                <li>LLMs (prompting, tools, structured outputs)</li>
                <li>LangGraph (agent workflows)</li>
              </ul>
            </div>
          </div>
        </div>


        {/* CONTACT */}
        <section id="contact" className="scroll-mt-28">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <div className="mt-5 rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
            <div className="space-y-3 text-sm text-neutral-300">
              <p>
                Email:{" "}
                <a
                  className="underline decoration-neutral-700 underline-offset-4 hover:decoration-neutral-300"
                  href="mailto:vidhyareddy131@gmail.com"
                >
                  vidhyareddy131@gmail.com
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a
                  className="underline decoration-neutral-700 underline-offset-4 hover:decoration-neutral-300"
                  href="https://linkedin.com/in/vidhya131"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/vidhya131
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a
                  className="underline decoration-neutral-700 underline-offset-4 hover:decoration-neutral-300"
                  href="https://github.com/vidhya131"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/vidhya131
                </a>
              </p>
              <p>
                Resume:{" "}
                <a
                  className="underline decoration-neutral-700 underline-offset-4 hover:decoration-neutral-300"
                  href="/Vidhya_Suram_Resume.pdf"
                  download
                >
                  Download PDF
                </a>
              </p>
            </div>
          </div>

          <footer className="mt-12 pb-6 text-xs text-neutral-600">
            © {year} Vidhya Suram
          </footer>
        </section>
      </div>
    </main>
  );
}
