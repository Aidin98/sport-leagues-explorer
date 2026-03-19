import { X } from "lucide-react";
import { twMerge } from "tailwind-merge";

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar = ({
  value,
  onChange,
  placeholder = "Search leagues...",
  className,
}: SearchBarProps) => {
  return (
    <div className={twMerge("relative", className)}>
      <input
        name="search-bar"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={twMerge(
          "block w-full pl-6 pr-10 py-3 sm:py-3.5",
          "border border-gray-300 rounded-xl",
          "bg-white text-gray-900 placeholder-gray-400",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
          "transition-all duration-200",
          "text-sm sm:text-base",
        )}
        aria-label="Search leagues"
      />

      {value && (
        <button
          onClick={() => onChange("")}
          className={twMerge(
            "absolute inset-y-0 right-0 pr-3 flex items-center py-3 sm:py-3.5",
            "text-gray-400 hover:text-gray-600 transition-colors",
          )}
          aria-label="Clear search"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default SearchBar