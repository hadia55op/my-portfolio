function Button({
  children,
  href,
  variant = "primary",
  target,
  rel,
}) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",

    secondary:
      "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </a>
  );
}

export default Button;