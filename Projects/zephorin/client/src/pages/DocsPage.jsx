import { useScroll, useSpring, motion } from "framer-motion";
import { useRef } from "react";
import Footer from "../components/Footer.jsx";
import PageWrapper from "../components/PageWrapper.jsx";

const fadeIn = (delay = 0.2) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: false, amount: 0.1 },
});

const DocsPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "getting-started", label: "Getting Started" },
    { id: "api", label: "API Reference" },
    { id: "cli", label: "CLI Usage" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <PageWrapper>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[999] bg-gradient-to-r from-[#30E3CA] to-[#7A60FF] origin-left"
        style={{ scaleX }}
      />

      <div className="flex bg-[#1D2B53] text-white min-h-screen">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col sticky top-0 h-screen w-64 p-6 bg-[#121212] border-r border-[#2E323C] space-y-4 text-sm">
          <h2 className="text-[#30E3CA] font-bold text-lg mb-4">
            Documentation
          </h2>
          {sections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="text-gray-300 hover:text-[#30E3CA] transition"
            >
              {sec.label}
            </a>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-6 py-16 space-y-24 max-w-4xl mx-auto">
          {/* Overview */}
          <motion.section id="overview" {...fadeIn(0)}>
            <h1 className="text-3xl font-bold text-[#30E3CA] mb-4">Overview</h1>
            <p className="text-gray-300 leading-relaxed">
              Zephiron provides scalable tools and systems for building modern
              web apps, internal tools, and SaaS products. This documentation
              gives you everything you need to get up and running.
            </p>
          </motion.section>

          {/* Getting Started */}
          <motion.section id="getting-started" {...fadeIn(0.2)}>
            <h2 className="text-2xl font-bold text-[#30E3CA] mb-4">
              Getting Started
            </h2>
            <p className="text-gray-300 mb-4">Here’s a quick setup guide:</p>
            <ol className="list-decimal pl-6 text-gray-300 space-y-2">
              <li>Clone the repo from GitHub</li>
              <li>
                Run{" "}
                <code className="bg-[#2E323C] px-1 py-0.5 rounded">
                  npm install
                </code>
              </li>
              <li>
                Configure your{" "}
                <code className="bg-[#2E323C] px-1 py-0.5 rounded">.env</code>{" "}
                file
              </li>
              <li>
                Start the server with{" "}
                <code className="bg-[#2E323C] px-1 py-0.5 rounded">
                  npm run dev
                </code>
              </li>
            </ol>
          </motion.section>

          {/* API Reference */}
          <motion.section id="api" {...fadeIn(0.3)}>
            <h2 className="text-2xl font-bold text-[#30E3CA] mb-4">
              API Reference
            </h2>
            <p className="text-gray-300 mb-4">Example endpoint:</p>
            <pre className="bg-[#2E323C] p-4 rounded text-sm overflow-x-auto">
              {`GET /api/users/:id\n\nReturns a specific user.\nAuthorization: Bearer Token`}
            </pre>
          </motion.section>

          {/* CLI Usage */}
          <motion.section id="cli" {...fadeIn(0.4)}>
            <h2 className="text-2xl font-bold text-[#30E3CA] mb-4">
              CLI Usage
            </h2>
            <p className="text-gray-300 mb-4">
              Use our CLI to bootstrap new projects:
            </p>
            <pre className="bg-[#2E323C] p-4 rounded text-sm overflow-x-auto">
              {`npx zephiron create-app\n? App Name: my-project\n? Template: fullstack`}
            </pre>
          </motion.section>

          {/* FAQ */}
          <motion.section id="faq" {...fadeIn(0.5)}>
            <h2 className="text-2xl font-bold text-[#30E3CA] mb-4">FAQ</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Q: Is Zephiron open source?</p>
                <p className="text-gray-300">
                  A: Some modules are. Others are proprietary.
                </p>
              </div>
              <div>
                <p className="font-semibold">Q: Do you support TypeScript?</p>
                <p className="text-gray-300">
                  A: Absolutely. Everything we build is TypeScript-first.
                </p>
              </div>
            </div>
          </motion.section>
        </main>
      </div>

      <Footer />
    </PageWrapper>
  );
};

export default DocsPage;
