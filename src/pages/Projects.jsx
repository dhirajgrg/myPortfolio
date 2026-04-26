import React from "react";

const projects = [
  {
    title: "secure credential drop",
    description:
      "A secure platform that allows users to share sensitive data such as API keys or secret credentials through one-time access links. Once the data is viewed, it is permanently destroyed, ensuring zero risk of reuse or exposure. Built with a focus on privacy, encryption, and secure data handling.",
    tech: ["React", "Express", "MongoDB"],
    githubLink: "https://github.com/dhirajgrg/Secure-Credential-Drop-api",
    liveLink: "https://secure-credential-drop-ui-5p5n.vercel.app/",
    image: "/images/secureCredential.png",
  },
  {
    title: "Node Farm",
    description:
      "A lightweight project demonstrating core Node.js fundamentals, including creating a custom HTTP server and working with the file system. It dynamically reads and serves data from static files without using any frameworks, showcasing how Node works under the hood.",
    tech: ["React", "Express", "MongoDB"],

    githubLink: "https://github.com/dhirajgrg/nodeFarm",
    liveLink: "https://node-farm-x52o.onrender.com",
    image: "/images/nodefarm.png",
  },
  {
    title: "Realtime-grocery-app",
    description:
      "A full-stack real-time grocery ordering application with user authentication (phone & password) and location-based ordering. It includes both user and admin dashboards, where admins can manage products, users, and orders. Designed to simulate a real-world e-commerce workflow with live updates and scalable backend architecture.",
    tech: ["REact", "Express", "MongoDB"],
    githubLink: "https://github.com/dhirajgrg",
    liveLink:
      "https://mandi-git-main-gdhiraj030-gmailcoms-projects.vercel.app/",
    image: "/images/groceryApp.png",
  },
  {
    title: "hatemalo",
    description:
      "A mini marketplace web application inspired by platforms like Facebook Marketplace, where users can list items for sale, browse products, and connect with buyers or sellers. It supports product listings, user interactions, and basic marketplace functionality, making it easy to trade items within a community. Built with a focus on simplicity, usability, and real-world buying/selling workflows.",
    tech: ["React", "Express", "MongoDB"],
    githubLink: "https://github.com/dhirajgrg/hatemalo",
    liveLink: "https://hatemalo.vercel.app/",
    image: "/images/hatemalo.png",
  },
];

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
         0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
         -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832
         .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688
         -.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004
         1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651
         .64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678
         1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022
         12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const ExternalIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-base-100 section">
      <div className="container-xl">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <span className="label-tag">Portfolio</span>
          <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl mt-4 text-base-900">
            Featured <span className="text-primary-700 italic">Projects</span>
          </h1>
          <p className="mt-4 font-body text-sm sm:text-base text-base-600 max-w-xl mx-auto leading-relaxed">
            A selection of my recent work — from full-stack applications to
            complex backend systems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {projects.map((project, index) => (
            <article
              key={index}
              className="card card-hover group flex flex-col overflow-hidden">
              {/* Image */}
              <div className="relative overflow-hidden h-44 bg-base-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center
                             group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 bg-primary-950/70 opacity-0
                                group-hover:opacity-100 transition-opacity duration-300
                                flex items-center justify-center">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-white border-white hover:bg-white
                               hover:text-primary-900 btn btn-sm px-5 py-2">
                    View Live ↗
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <h2 className="font-display font-bold text-base text-base-900 leading-snug">
                  {project.title}
                </h2>
                <p className="font-body text-xs text-base-600 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between pt-2 border-t border-base-100 mt-auto">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-body text-xs font-medium
                               text-base-500 hover:text-base-900 transition-colors duration-200">
                    <GithubIcon />
                    Source
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-body text-xs font-medium
                               text-primary-700 hover:text-primary-500 transition-colors duration-200">
                    Live Demo
                    <ExternalIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
