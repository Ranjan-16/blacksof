/**
 * Button component with different variants and sizes
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Button content
 * @param {string} [props.variant="primary"] - Button variant (primary, secondary, outline)
 * @param {string} [props.size="md"] - Button size (sm, md, lg)
 * @param {string} [props.type="button"] - Button type
 * @param {boolean} [props.disabled=false] - Whether button is disabled
 * @param {boolean} [props.loading=false] - Whether button is in loading state
 * @param {string} [props.className] - Additional CSS classes
 * @param {function} [props.onClick] - Click handler function
 * @param {Object} [props.rest] - Additional props to pass to button element
 */
export function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  type = "button",
  disabled = false,
  loading = false,
  className = "",
  onClick,
  ...rest 
}) {
  const baseClasses = "flex justify-center gap-1 disabled:opacity-70 disabled:cursor-not-allowed rounded-full transition-all duration-700 ease-in-out focus:outline-none";
  
  const variants = {
    primary: "hover:text-black focus:text-black hover:bg-white focus:bg-white text-white border border-white",
    secondary: "bg-white text-black hover:bg-gray-100 focus:bg-gray-100",
    outline: "border border-current text-current hover:bg-current hover:text-white focus:bg-current focus:text-white"
  };
  
  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm lg:text-base px-8 md:px-12 py-3",
    lg: "text-base lg:text-lg px-10 md:px-16 py-4"
  };
  
  const variantClasses = variants[variant] || variants.primary;
  const sizeClasses = sizes[size] || sizes.md;
  
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`}
      {...rest}
    >
      {loading ? (
        <>
          <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></span>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
