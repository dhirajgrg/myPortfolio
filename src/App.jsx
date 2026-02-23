import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

const links = [
  { path: "/", label: "Home", exact: true },
  { path: "/projects", label: "Projects" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Render Navbar once globally */}
      <Navbar links={links} />

      {/* Main Content Area */}
      <main className="pt-20">
        <AppRoutes links={links} />
      </main>
    </div>
  );
}

export default App;
