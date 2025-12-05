export default function ProfileInformationSkeleton() {
  return (
    <div className="mt-6 w-full p-6 bg-custom-grey-50 rounded-[12px]">
      <div className="flex justify-between items-center max-custom-semism:flex-col max-custom-semism:justify-center max-custom-semism:items-start max-custom-semism:gap-2">
        <div className="w-full">
          <div className="h-4 w-24 bg-gray-300 rounded animate-pulse mb-1"></div>
          <div className="w-full h-10 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center max-custom-semism:mt-2 max-custom-semism:flex-col max-custom-semism:justify-center max-custom-semism:items-start max-custom-semism:gap-2">
        <div className="w-full">
          <div className="h-4 w-24 bg-gray-300 rounded animate-pulse mb-1"></div>
          <div className="w-full h-10 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center max-custom-semism:mt-2 max-custom-semism:flex-col max-custom-semism:justify-center max-custom-semism:items-start max-custom-semism:gap-2">
        <div className="w-full">
          <div className="h-4 w-16 bg-gray-300 rounded animate-pulse mb-1"></div>
          <div className="w-full h-10 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
