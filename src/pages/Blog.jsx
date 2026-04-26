import React, { useState } from "react";

const initialPosts = [
  {
    id: 1,
    tag: "AI integration",
    title: "Moody Player – My First Real JavaScript Project",
    description:
      "Building a music player helped me understand DOM manipulation, events, and core JavaScript logic.",
    content:
      "Moody Player was one of my first projects where I combined React with an AI API to create a dynamic user experience. Instead of just playing static songs, the app suggests music based on user mood and interaction.\n\nOne major challenge I faced was handling asynchronous API calls efficiently. Initially, the UI would break or lag when fetching AI responses. I fixed this by properly managing loading states and using async/await with clean state updates in React.\n\nAnother issue was structuring components as the app grew. I solved this by splitting the UI into reusable components and managing state more effectively.\n\nThis project helped me understand real-world React patterns and how to integrate external AI services into applications.",
    readTime: "4 min read",
    expanded: false,
  },
  {
    id: 2,
    tag: "Backend",
    title: "Node Farm – Understanding Node.js Internals",
    description:
      "A deep dive into Node.js core modules, HTTP server, and file system without using frameworks.",
    content:
      "In Node Farm, I built everything using pure Node.js—no Express. This helped me understand how routing actually works behind the scenes.\n\nOne issue I faced was handling different routes manually and serving dynamic content. I fixed this by creating a simple routing and logic files using the file system module.\n\nThis project gave me clarity on how backend  things work.",
    readTime: "5 min read",
    expanded: false,
  },
  {
    id: 3,
    tag: "Fullstack",
    title: "Hatemalo – Building a Mini Marketplace",
    description:
      "A Facebook Marketplace-like app where users can list, browse, and interact with products.",
    content:
      "Hatemalo was my first attempt at building a real-world product. The biggest challenge was designing how users list items and how those listings are fetched efficiently.\n\nI initially struggled with syncing frontend and backend data. Sometimes UI didn’t update after new listings. I fixed this by improving API design and properly managing React state.\n\nThis project taught me how marketplaces work and how to structure fullstack applications.",
    readTime: "6 min read",
    expanded: false,
  },
  {
    id: 4,
    tag: "Fullstack",
    title: "Mandi – Real-Time Grocery Application",
    description:
      "A real-time grocery app with authentication, location-based ordering, and admin dashboard.",
    content:
      "Mandi introduced me to complex application flow—users, admins, orders, and product management.\n\nOne major issue was handling authentication securely. I had to ensure users stayed logged in and protected routes worked correctly.\n\nAnother challenge was managing multiple roles (admin vs user). I solved this by structuring backend routes and permissions properly.\n\nThis project pushed me to think like a real product developer.",
    readTime: "7 min read",
    expanded: false,
  },
  {
    id: 5,
    tag: "Backend",
    title: "Secure Credential Drop – One-Time Secret Sharing",
    description:
      "A secure system for sharing sensitive data with one-time access and auto-destruction.",
    content:
      "In this project, the challenge was not just functionality but security. I needed to ensure that once a secret is viewed, it cannot be accessed again.\n\nI implemented logic where the secret deletes itself after the first read. Handling edge cases like expired or already-used links was tricky but important.\n\nThis project improved my thinking around backend logic, data lifecycle, and security-focused design.",
    readTime: "5 min read",
    expanded: false,
  },
  {
    id: 6,
    tag: "Backend",
    title: "TaskFlow – Designing a Task Management API",
    description:
      "Building a structured and scalable REST API for managing tasks and workflows.",
    content:
      "TaskFlow focused on backend architecture. I worked on designing clean routes, proper schema structure, and predictable API responses.\n\nOne issue I faced was maintaining consistency across endpoints. I solved this by standardizing response formats and error handling.\n\nThis project helped me understand how to build APIs that are easy to consume and scale.",
    readTime: "4 min read",
    expanded: false,
  },
  {
    id: 7,
    tag: "Backend with AI",
    title: "Microservices & AI-Buddy – Moving Towards Scalable Systems",
    description:
      "Experimenting with microservice architecture and integrating AI features into backend systems.",
    content:
      "This project was my step into advanced backend concepts. Instead of a single monolithic server, I explored breaking features into smaller services.\n\nThe challenge was communication between services and managing complexity. I also experimented with integrating AI-based features into APIs.\n\nThis project shifted my mindset from building apps to designing systems.",
    readTime: "6 min read",
    expanded: false,
  },
];

export default function Blog() {
  const [posts, setPosts] = useState(initialPosts);

  const toggleExpand = (id) =>
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, expanded: !p.expanded } : p)),
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
              className="card magicpattern transition-all duration-350 hover:shadow-card-hover">
              <div className="p-6 sm:p-8">
                {/* Meta row */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="tech-badge">{post.tag}</span>
                  <span className="font-mono text-2xs text-base-400">
                    {post.readTime}
                  </span>
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
                    ${post.expanded ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="divider mb-4" />
                  <p className="font-body text-sm text-base-700 leading-relaxed">
                    {post.content}
                  </p>
                </div>

                {/* Toggle button */}
                <button
                  onClick={() => toggleExpand(post.id)}
                  className="mt-5 flex items-center gap-2 font-body text-sm font-semibold
                             text-primary-700 hover:text-primary-500 transition-colors duration-200">
                  <span>{post.expanded ? "Collapse" : "Read More"}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${post.expanded ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
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
