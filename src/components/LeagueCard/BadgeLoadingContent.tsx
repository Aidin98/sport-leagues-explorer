export default function BadgeLoadingContent() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-24 h-24 bg-gray-200 rounded-xl animate-pulse-subtle" />
      <span className="text-sm text-gray-500 font-medium">
        Loading official badge...
      </span>
    </div>
  );
}
