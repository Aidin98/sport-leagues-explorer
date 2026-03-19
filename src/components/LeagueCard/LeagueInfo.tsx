import { type League } from "../../types";
import { Trophy } from "lucide-react";

export interface LeagueInfoProps {
  league: League;
  onTitleClick: () => void;
}

export default function LeagueInfo({
  league,
  onTitleClick = () => {},
}: LeagueInfoProps) {
  return (
    <div className="flex-1 min-w-0" onClick={onTitleClick}>
      <div className="flex items-center gap-2 mb-1">
        <Trophy className="w-5 h-5 text-blue-600 shrink-0" />
        <h3 className="text-lg font-bold text-gray-900  group-hover:text-blue-700 transition-colors">
          {league.strLeague}
        </h3>
      </div>

      <div className="flex items-center gap-3 mt-1">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
          {league.strSport}
        </span>

        {league.strLeagueAlternate && (
          <span className="text-sm text-gray-500 italic">
            {league.strLeagueAlternate}
          </span>
        )}
      </div>
    </div>
  );
}
