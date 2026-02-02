import { ReactNode } from "react";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
  leftElement?: ReactNode;
}

export const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder,
  leftElement,
}: InputProps) => {
  return (
    <div>
      <label className="block text-sm font-bold text-black mb-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative flex items-center w-full rounded-full border border-[#ddd] bg-white focus-within:border-brand-primary-dark">
        {leftElement && (
          <div className="flex-shrink-0">
            {leftElement}
          </div>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={`flex-1 py-2 bg-transparent focus:outline-none ${leftElement ? "pl-4" : "px-4"}`}
        />
      </div>
    </div>
  );
};
