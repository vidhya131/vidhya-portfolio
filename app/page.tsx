export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-14">
      <section className="mx-auto max-w-4xl">
        {/* Hero */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Vidhya Suram</h1>
          <p className="mt-3 text-xl text-gray-300">
            Data Engineer • Distributed Systems • AWS • AI
          </p>
          <p className="mt-5 max-w-2xl text-gray-400">
            I build scalable, production-grade data platforms and ML pipelines—focused on
            reliability, performance, and measurable impact.
          </p>

          <div className="mt-7 flex gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-white px-4 py-2 text-black font-medium"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-gray-700 px-4 py-2 text-white"
            >
              Contact
            </a>
          </div>
        </div>

        {/* About */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Data Engineer with 4+ years of experience building large-scale ETL pipelines,
            real-time microservices, and ML production workflows on AWS. Previously at Experian,
            working on systems handling billions of consumer records. Currently pursuing an MS in
            Computer Science (AI Track) at Binghamton University.
          </p>
        </div>

        {/* Projects */}
        <div id="projects" className="mb-12">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>

          <div className="mt-6 grid gap-5">
            <div className="rounded-2xl border border-gray-800 p-6">
              <h3 className="text-xl font-bold">Scalable ETL Platform on AWS</h3>
              <p className="mt-2 text-gray-400">
                Built PySpark pipelines on EMR orchestrated with Airflow, integrating S3 and
                Redshift. Reduced cost using lifecycle policies, autoscaling, and Spot Instances.
              </p>
              <p className="mt-3 text-sm text-gray-500">
                Tech: PySpark, Airflow, EMR, S3, Glue, Redshift, CloudWatch
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 p-6">
              <h3 className="text-xl font-bold">Real-Time Microservices & Monitoring</h3>
              <p className="mt-2 text-gray-400">
                Designed Flask microservices on ECS with Jenkins CI/CD and Kafka integration for
                failure detection and automated recovery.
              </p>
              <p className="mt-3 text-sm text-gray-500">
                Tech: Python, Flask, Kafka, ECS, Jenkins, CloudWatch
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 p-6">
              <h3 className="text-xl font-bold">GenAI LinkedIn Post Generator</h3>
              <p className="mt-2 text-gray-400">
                Built a Streamlit + LangChain app using Groq-hosted LLMs to generate style-consistent
                posts via topic extraction and few-shot prompting.
              </p>
              <p className="mt-3 text-sm text-gray-500">
                Tech: Python, Streamlit, LangChain, LLMs
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="mb-6">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <div className="mt-4 text-gray-400">
            <p>
              Email:{" "}
              <a className="underline" href="mailto:vidhyareddy131@gmail.com">
                vidhyareddy131@gmail.com
              </a>
            </p>
            <p className="mt-2">
              LinkedIn:{" "}
              <a className="underline" href="https://linkedin.com/in/vidhya131" target="_blank">
                linkedin.com/in/vidhya131
              </a>
            </p>
            <p className="mt-2">
              GitHub:{" "}
              <a className="underline" href="https://github.com/vidhya131" target="_blank">
                github.com/vidhya131
              </a>
            </p>
          </div>
        </div>

        <footer className="pt-10 text-sm text-gray-600">
          © {new Date().getFullYear()} Vidhya Suram
        </footer>
      </section>
    </main>
  );
}
