// components/TextArea.jsx
export function TextArea({ id, name, placeholder, rows = 3 }) {
  return (
    <textarea
      id={id}
      name={name}
      rows={rows}
      placeholder={placeholder}
      className="text-white placeholder:text-opacity-90 border-white border-opacity-40 transition-all duration-200 tracking-wide ease-in-out border-b-2 border-solid py-2 pr-2 w-full text-base lg:text-lg placeholder:text-white font-normal bg-transparent outline-none focus-visible:outline-none focus-visible:border-opacity-100"
    />
  );
}
