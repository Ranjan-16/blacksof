/**
 * Input component for form fields
 * 
 * @param {Object} props - Component props
 * @param {string} props.id - Input field ID
 * @param {string} props.name - Input field name
 * @param {string} [props.type="text"] - Input type (text, email, password, etc.)
 * @param {string} props.placeholder - Placeholder text
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.required=false] - Whether the field is required
 * @param {function} [props.onChange] - Change handler function
 * @param {string} [props.value] - Input value for controlled components
 * @param {Object} [props.rest] - Additional props to pass to input element
 */
export function Input({ 
  id, 
  name, 
  type = "text", 
  placeholder, 
  className = "",
  required = false,
  onChange,
  value,
  ...rest 
}) {
  const baseClasses = "text-white placeholder:text-opacity-90 border-white border-opacity-40 transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none focus-visible:border-opacity-100";
  
  return (
    <input
      id={id}
      name={name}
      type={type}
      inputMode={type === "email" ? "email" : "text"}
      placeholder={placeholder}
      className={`${baseClasses} ${className}`}
      required={required}
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
}

export default Input;
