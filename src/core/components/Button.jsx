const Button = ({
  children,
  onClick,
  icon: Icon,
  className = "",
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center justify-center gap-2
        cursor-pointer
        transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className} 
      `}
    >
      {Icon && <Icon className="text-sm" />}
      {children}
    </button>
  );
};

export default Button;
