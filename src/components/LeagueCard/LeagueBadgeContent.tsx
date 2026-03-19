import { Award } from "lucide-react";
import type { League, SeasonBadge } from "../../types";
import BadgeLoadingContent from "./BadgeLoadingContent";

export interface LeagueBadgeContentProps {
  league: League;
  badgeUrls: SeasonBadge[] | null;
  isBadgeLoading: boolean;
}

export default function LeagueBadgeContent({
  isBadgeLoading,
  badgeUrls,
  league,
}: LeagueBadgeContentProps) {
  return (
    <div className="p-5 animate-slide-up">
      <div className="flex items-center justify-center min-h-40 bg-gray-50 border border-dashed border-gray-200 rounded-xl">
        {isBadgeLoading ? (
          <BadgeLoadingContent />
        ) : badgeUrls && badgeUrls.length > 0 ? (
          <div className="grid grid-cols-3  gap-2.5 py-2">
            {badgeUrls.map((detail) => (
              <div
                key={detail.strSeason}
                className=" text-gray-400  flex flex-col items-center rounded-lg border border-blue-700 bg-blue-50 p-1.5 transition-all hover:border-blue-500 hover:shadow-[0_0_8px_rgba(59,130,246,0.5)]"
              >
                {detail.strBadge ? (
                  <img
                    src={detail.strBadge}
                    alt={`${league.strLeague} ${detail.strSeason} badge`}
                    width={40}
                    height={40}
                    loading="lazy"
                    className="mb-1 h-10 w-10 object-contain drop-shadow-[0_0_4px_#3b82f6]"
                  />
                ) : (
                  <Award className="w-7 h-7" />
                )}

                <p className="text-center text-[0.7rem] text-slate-400">
                  {detail.strSeason}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 text-gray-400 py-6">
            <Award className="w-14 h-14" />
            <span className="text-base font-medium">
              Badge images not found
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
