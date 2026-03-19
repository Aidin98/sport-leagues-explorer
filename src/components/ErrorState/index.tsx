import { AlertCircle, RefreshCw } from "lucide-react";
import type { ApiError } from "../../types";
import { twMerge } from "tailwind-merge";

export interface ErrorStateProps {
  error: ApiError;
  onRetry?: () => void;
  className?: string;
}
const ErrorState = ({ error, onRetry, className }: ErrorStateProps) => {
  return (
    <div
      className={twMerge(
        "flex flex-col items-center justify-center py-16 px-4",
        className,
      )}
    >
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
        <AlertCircle className="w-8 h-8 text-red-600" />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Oops! Something went wrong
      </h3>

      <p className="text-gray-600 text-center mb-2 max-w-md">
        {error.message || "An unexpected error occurred"}
      </p>

      {error.status && (
        <p className="text-sm text-gray-500 mb-6">Error code: {error.status}</p>
      )}

      {onRetry && (
        <button
          onClick={onRetry}
          className={
            "px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition flex items-center gap-2"
          }
        >
          <RefreshCw className="w-4 h-4" />
          Try again
        </button>
      )}
    </div>
  );
};
export default ErrorState
