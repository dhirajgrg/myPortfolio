import React from "react";

/**
 * Button component — wraps the design-system btn classes.
 * variant: "primary" | "outline" | "ghost"
 * size:    "sm" | "md" | "lg"
 */
function Button({
  children,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
}) {
  const variantClass = {
    primary: "btn-primary",
    outline: "btn-outline",
    ghost:   "btn-ghost",
  }[variant] ?? "btn-primary";

  const sizeClass = {
    sm: "btn-sm",
    md: "btn-md",
    lg: "btn-lg",
  }[size] ?? "btn-md";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${variantClass} ${sizeClass} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
