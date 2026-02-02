interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}

export const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder,
}: InputProps) => {
  return (
    <div>
      <label className="block text-sm font-bold text-black mb-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded-full border border-[#ddd] bg-white focus:outline-none focus:border-brand-primary-dark"
      />
    </div>
  );
};
