// components/InputField.jsx
export function InputField({ id, name, type = "text", placeholder }) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      inputMode={type === "email" ? "email" : "text"}
      placeholder={placeholder}
      className="text-white placeholder:text-opacity-90 border-white border-opacity-40 transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none focus-visible:border-opacity-100"
    />
  );
}
