export default function LinkFormSkeleton() {
  return (
    <div
      className="mt-6 p-6 rounded-xl bg-custom-grey-50 animate-pulse min-h-[478px] flex flex-col
    max-custom-semism:min-h-[309px] max-custom-semism:p-5
    max-custom-sm:min-h-[357px]"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <div className="flex flex-col justify-center items-start gap-1">
            <div className="w-3 h-[1px] bg-custom-grey-300"></div>
            <div className="w-3 h-[1px] bg-custom-grey-300"></div>
          </div>
          {/* Link # text skeleton */}
          <div
            className="h-5 w-16 bg-custom-grey-300 rounded 
          max-custom-semism:h-4 max-custom-semism:w-14"
          ></div>
        </div>

        {/* Remove button skeleton */}
        <div
          className="h-5 w-20 bg-custom-grey-300 rounded
        max-custom-semism:h-4 max-custom-semism:w-16"
        ></div>
      </div>

      {/* Platform section */}
      <div className="mt-8 max-custom-semism:mt-4">
        {/* Label skeleton */}
        <div
          className="h-3 w-20 bg-custom-grey-300 rounded mb-2
        max-custom-semism:h-2.5 max-custom-semism:w-16"
        ></div>

        {/* Select dropdown skeleton */}
        <div
          className="w-full h-[72px] rounded-lg bg-custom-grey-200
        max-custom-semism:h-12"
        ></div>
      </div>

      {/* Link section */}
      <div className="mt-8 flex-1 flex flex-col max-custom-semism:mt-4">
        {/* Label skeleton */}
        <div
          className="h-3 w-12 bg-custom-grey-300 rounded mb-2
        max-custom-semism:h-2.5 max-custom-semism:w-10"
        ></div>

        {/* Input field skeleton */}
        <div
          className="w-full h-[72px] rounded-lg bg-custom-grey-200 flex items-center px-4 gap-4
        max-custom-semism:h-12 max-custom-semism:px-3 max-custom-semism:gap-3"
        >
          {/* Icon placeholder */}
          <div
            className="w-5 h-5 bg-custom-grey-300 rounded
          max-custom-semism:w-4 max-custom-semism:h-4"
          ></div>
          {/* Text placeholder */}
          <div
            className="h-4 flex-1 max-w-xs bg-custom-grey-300 rounded
          max-custom-semism:h-3"
          ></div>
        </div>
      </div>
    </div>
  );
}
