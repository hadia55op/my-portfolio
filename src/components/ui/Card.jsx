function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white
        border
        border-gray-200
        rounded-2xl
        shadow-sm
        hover:shadow-lg
        hover:-translate-y-1
        transition-all
        duration-300
        p-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;