import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface LeagueGridProps {
  children: ReactNode;
  className?: string;
}

function LeagueGrid({ children, className }: LeagueGridProps) {
  return (
    <div
      className={twMerge(
        "grid gap-4 sm:gap-6",
        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
}
export default LeagueGrid;
