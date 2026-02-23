import React, { useState } from "react";

const initialPosts = [
  {
    id: 1,
    tag: "Frontend",
    title: "Deep Dive into React",
    description:
      "Understand component architecture, hooks, state management, and performance optimization techniques.",
    content:
      "React has become the backbone of modern UI development because of its powerful abstraction, fast rendering, and unmatched ecosystem. Its component-driven architecture allows building interfaces using reusable pieces that scale beautifully in large projects. Hooks simplify state and side-effect management, while the virtual DOM ensures fast, efficient updates.",
    readTime: "5 min read",
    expanded: false,
  },
  {
    id: 2,
    tag: "Backend",
    title: "Express.js for Backend APIs",
    description:
      "Explore middleware patterns, routing, error handling, and scalable API structure using Express.",
    content:
      "Express.js offers a minimalistic yet powerful solution for writing backend APIs. Its routing, middleware system, and flexibility allow developers to design scalable architectures easily. Integrations with databases and third-party packages make it the ideal choice for RESTful API development.",
    readTime: "4 min read",
    expanded: false,
  },
  {
    id: 3,
    tag: "JavaScript",
    title: "Modern JavaScript Essentials",
    description:
      "Learn ES6+ features, asynchronous patterns, promises, async/await, and clean code principles.",
    content:
      "Modern JavaScript (ES6+) transformed the language, introducing arrow functions, destructuring, spread operators, promises, classes, and async/await. These improvements made JS cleaner, more expressive, and suitable for enterprise applications — powering everything from frontend to backend.",
    readTime: "6 min read",
    expanded: false,
  },
];

export default function Blog() {
  const [posts, setPosts] = useState(initialPosts);

  const toggleExpand = (id) =>
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, expanded: !p.expanded } : p))
    );

  return (
    <section id="blog" className="min-h-screen bg-base-100 section">
      <div className="container-lg">

        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <span className="label-tag">Writing</span>
          <h1 className="heading-display text-4xl sm:text-5xl md:text-6xl mt-4 text-base-900">
            Tech <span className="text-primary-700 italic">Blogs</span>
          </h1>
          <p className="mt-4 font-body text-sm sm:text-base text-base-600 max-w-md mx-auto">
            Articles covering React, Express, and JavaScript fundamentals.
          </p>
        </div>

        {/* Posts */}
        <div className="flex flex-col gap-5">
          {posts.map((post) => (
            <article
              key={post.id}
              className="card magicpattern transition-all duration-350 hover:shadow-card-hover"
            >
              <div className="p-6 sm:p-8">
                {/* Meta row */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="tech-badge">{post.tag}</span>
                  <span className="font-mono text-2xs text-base-400">{post.readTime}</span>
                </div>

                {/* Title + description */}
                <h2 className="font-display font-bold text-xl sm:text-2xl text-base-900 leading-snug mb-2">
                  {post.title}
                </h2>
                <p className="font-body text-sm text-base-600 leading-relaxed">
                  {post.description}
                </p>

                {/* Expandable content */}
                <div
                  className={`overflow-hidden transition-all duration-400
                    ${post.expanded ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="divider mb-4" />
                  <p className="font-body text-sm text-base-700 leading-relaxed">
                    {post.content}
                  </p>
                </div>

                {/* Toggle button */}
                <button
                  onClick={() => toggleExpand(post.id)}
                  className="mt-5 flex items-center gap-2 font-body text-sm font-semibold
                             text-primary-700 hover:text-primary-500 transition-colors duration-200"
                >
                  <span>{post.expanded ? "Collapse" : "Read More"}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${post.expanded ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
