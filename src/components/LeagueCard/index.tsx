import { lazy, memo, useState, Suspense } from "react";

import { twMerge } from "tailwind-merge";

import useFetchData from "../../hooks/useFetchData";
import { fetchApiLeagueDetails } from "../../api";

import type { League } from "../../types";

import { ChevronDown } from "lucide-react";
const LeagueBadgeContent = lazy(() => import("./LeagueBadgeContent"));

import LeagueInfo from "./LeagueInfo";
import BadgeLoadingContent from "./BadgeLoadingContent";

export interface LeagueCardProps {
  league: League;
}

const LeagueCard = memo(({ league }: LeagueCardProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const {
    data,
    loading: isBadgeLoading,
    refetch,
  } = useFetchData([], () => fetchApiLeagueDetails(league.idLeague), false);

  const onExpandLeague = (): void => {
    setIsExpanded((prev) => !prev);
    if (!data || !data?.length) {
      refetch();
    }
  };

  return (
    <article
      className={twMerge(
        "group relative bg-white rounded-xl border border-gray-100",
        "shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer",
        "overflow-hidden animate-fade-in h-full",

        !isExpanded && "md:max-h-35 h-full",
        isExpanded
          ? "border-blue-500 shadow-2xl ring-4 ring-blue-100/70"
          : "h-full",
      )}
    >
      <div
        className={twMerge(
          "p-5 bg-gray-50/50 border-b border-gray-100 transition-colors",
          isExpanded && "bg-blue-50/80",
          !isExpanded && "md:max-h-35 h-full",
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <LeagueInfo league={league} onTitleClick={onExpandLeague} />

          <button
            className={twMerge(
              "shrink-0 p-2 rounded-full transition-all duration-300 transform",
              "bg-white border border-gray-200 shadow-sm hover:border-blue-400 hover:bg-blue-50 cursor-pointer",
              isExpanded
                ? "rotate-180 bg-blue-100 border-blue-500 shadow-md"
                : "",
            )}
            aria-label={isExpanded ? "Collapse" : "Expand"}
            aria-expanded={isExpanded}
            onClick={() => onExpandLeague()}
          >
            <ChevronDown
              className={twMerge(
                "w-5 h-5 transition-colors",
                isExpanded ? "text-blue-700" : "text-gray-600",
              )}
            />
          </button>
        </div>
      </div>

      {isExpanded && (
        <Suspense fallback={<BadgeLoadingContent />}>
          <LeagueBadgeContent
            league={league}
            isBadgeLoading={isBadgeLoading}
            badgeUrls={data ?? []}
          />
        </Suspense>
      )}
    </article>
  );
});

LeagueCard.displayName = "LeagueCard";

export default LeagueCard;
