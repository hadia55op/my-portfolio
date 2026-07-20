function Badge({ children, color = "blue" }) {

  const styles = {
    blue:
      "bg-blue-50 text-blue-700 border-blue-100",

    gray:
      "bg-gray-100 text-gray-700 border-gray-200",
  };


  return (
    <span
      className={`
        px-3
        py-1
        rounded-full
        text-sm
        font-medium
        border
        ${styles[color]}
      `}
    >
      {children}
    </span>
  );
}

export default Badge;