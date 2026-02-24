import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

function Navbar({ links, mobileHamburger = true, className = "" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-[100]
          flex items-center justify-between
          px-5 sm:px-8 md:px-12 lg:px-20
          py-3 md:py-4 transition-all duration-350
          ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"}
          ${className}
        `}
      >
        {/* ── Logo ── */}
        <NavLink
          to="/"
          className="flex items-center gap-2 z-[110]"
          onClick={() => setOpen(false)}
        >
          <span className="w-8 h-8 rounded-lg bg-emerald-800 flex items-center justify-center shadow-sm">
            <span className="font-bold text-white text-sm">D</span>
          </span>
          <span className="font-bold text-slate-900 text-lg">Dhiraj</span>
        </NavLink>

        {/* ── Desktop Nav (Hidden on Mobile) ── */}
        <div className="hidden md:flex  items-center gap-8 lg:gap-12">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.exact}
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-emerald-800 font-semibold border-b-2 border-emerald-800" : "text-slate-600 hover:text-emerald-700"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <Button variant="primary" size="md" className="hidden md:block">
          <a
            href="https://drive.google.com/uc?export=download&id=1GeGZo7RUI3jmgdblAcHILkLeo4MTU1cF"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-3"
          >
            ↓ Resume
          </a>
        </Button>

        {/* ── Mobile Hamburger Button ── */}
        {mobileHamburger && (
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span
              className={`block h-0.5 w-6 bg-slate-900 transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-slate-900 transition-all duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-slate-900 transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        )}
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-[90] md:hidden transition-all duration-300 ${open ? "visible" : "invisible"}`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-xl p-8 pt-24 transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-lg font-medium transition-colors ${isActive ? "bg-emerald-50 text-emerald-800" : "text-slate-700 hover:bg-slate-50"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
