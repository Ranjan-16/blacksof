/**
 * TextArea component for multi-line text input
 * 
 * @param {Object} props - Component props
 * @param {string} props.id - TextArea field ID
 * @param {string} props.name - TextArea field name
 * @param {string} props.placeholder - Placeholder text
 * @param {number} [props.rows=3] - Number of visible text lines
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.required=false] - Whether the field is required
 * @param {function} [props.onChange] - Change handler function
 * @param {string} [props.value] - TextArea value for controlled components
 * @param {Object} [props.rest] - Additional props to pass to textarea element
 */
export function TextArea({ 
  id, 
  name, 
  placeholder, 
  rows = 3, 
  className = "",
  required = false,
  onChange,
  value,
  ...rest 
}) {
  const baseClasses = "text-white placeholder:text-opacity-90 border-white border-opacity-40 transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none focus-visible:border-opacity-100";
  
  return (
    <textarea
      id={id}
      name={name}
      rows={rows}
      placeholder={placeholder}
      className={`${baseClasses} ${className}`}
      required={required}
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
}

export default TextArea;
