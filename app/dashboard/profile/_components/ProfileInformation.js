import Input from "./Input";
import ProfileInformationSkeleton from "./ProfileInformationSkeleton";

export default function ProfileInformation({
  register,
  errors,
  profileInfo,
  isPending,
}) {
  if (isPending) {
    return <ProfileInformationSkeleton />;
  }

  return (
    <div className="mt-6 w-full p-6 bg-custom-grey-50 rounded-[12px]">
      <div
        className="flex justify-between items-center
          max-custom-semism:flex-col max-custom-semism:justify-center max-custom-semism:items-start max-custom-semism:gap-2"
      >
        <Input
          label="First name*"
          type="text"
          name="first-name"
          placeholder="e.g. John"
          error={errors.firstName?.message}
          defaultValue={profileInfo?.firstName}
          {...register("firstName", {
            required: "Can't be empty",
          })}
        />
      </div>

      {errors.firstName?.message && (
        <div className="mt-2 flex justify-end">
          <p className="text-end instrument-sans font-normal text-xs text-red-500">
            {errors.firstName.message}
          </p>
        </div>
      )}

      <div
        className="mt-4 flex justify-between items-center
          max-custom-semism:mt-2 max-custom-semism:flex-col max-custom-semism:justify-center max-custom-semism:items-start max-custom-semism:gap-2"
      >
        <Input
          label="Last name*"
          type="text"
          name="last-name"
          placeholder="e.g. Appleseed"
          error={errors.lastName?.message}
          defaultValue={profileInfo?.lastName}
          {...register("lastName", {
            required: "Can't be empty",
          })}
        />
      </div>

      {errors.lastName?.message && (
        <div className="mt-2 flex justify-end">
          <p className="text-end instrument-sans font-normal text-xs text-red-500">
            {errors.lastName.message}
          </p>
        </div>
      )}

      <div
        className="mt-4 flex justify-between items-center
          max-custom-semism:mt-2 max-custom-semism:flex-col max-custom-semism:justify-center max-custom-semism:items-start max-custom-semism:gap-2"
      >
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="e.g. email@example.com"
          error={errors.email?.message}
          defaultValue={profileInfo?.email}
          {...register("email", {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address",
            },
            maxLength: {
              value: 100,
              message: "Please enter a valid email address",
            },
          })}
        />
      </div>

      {errors.email?.message && (
        <div className="mt-2 flex justify-end">
          <p className="text-end instrument-sans font-normal text-xs text-red-500">
            {errors.email.message}
          </p>
        </div>
      )}
    </div>
  );
}
