export default function ProfileImageSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center h-full animate-pulse">
      <div className="w-10 h-10 bg-custom-grey-300 rounded-full" />
      <div className="mt-2 w-24 h-4 bg-custom-grey-300 rounded" />
    </div>
  );
}
