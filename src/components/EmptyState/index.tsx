import { Search } from "lucide-react";
import { twMerge } from "tailwind-merge";

export interface EmptyStateProps {
  message: string;
  description?: string;
  onAction?: () => void;
  actionLabel?: string;
  className?: string;
}
const EmptyState = ({
  message,
  description,
  onAction,
  actionLabel = "Clear all filters",
  className,
}: EmptyStateProps) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-center py-16 px-4",
        className,
      )}
    >
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <Search className="w-8 h-8 text-gray-400" />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">{message}</h3>

      {description && (
        <p className="text-gray-600 text-center mb-6 max-w-md">{description}</p>
      )}

      {onAction && (
        <button
          onClick={onAction}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};
export default EmptyState;
