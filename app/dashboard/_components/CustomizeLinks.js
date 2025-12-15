"use client";

import LinkFormContainer from "./LinkFormContainer";
import EmptyLinkContainer from "./EmptyLinkContainer";
import { useDropdown } from "../_context/DropdownContext";
import clsx from "clsx";
import LinkFormSkeleton from "../links/_components/LinkFormSkeleton";
import { useForm } from "react-hook-form";

export default function CustomizeLinks({ forms, addForm, removeForm }) {
  const { saveLinks, isSaving, isPending } = useDropdown();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    saveLinks();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="w-[60%]
        max-custom-md:w-full"
    >
      <div
        className="bg-white rounded-t-xl p-10
          max-custom-semism:p-6"
      >
        <h1
          className="instrument-sans font-bold text-[32px] text-custom-grey-900
            max-custom-semism:text-2xl"
        >
          Customize your links
        </h1>
        <p className="mt-2 instrument-sans font-normal text-base text-custom-grey-500">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>

        <button
          type="button"
          onClick={addForm}
          className="mt-10 w-full rounded-lg border border-custom-purple-600 py-4 text-center cursor-pointer active:bg-custom-grey-100"
        >
          <span className="instrument-sans font-semibold text-base text-custom-purple-600">
            + Add new link
          </span>
        </button>

        {isPending ? (
          <>
            <LinkFormSkeleton />
          </>
        ) : forms.length > 0 ? (
          forms.map((form) => (
            <LinkFormContainer
              key={form.id}
              formId={form.id}
              removeForm={removeForm}
              register={register}
              errors={errors}
            />
          ))
        ) : (
          <EmptyLinkContainer />
        )}
      </div>

      <div
        className="bg-white rounded-b-xl py-6 px-10 border-t border-custom-grey-200
          max-custom-semism:p-4"
      >
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSaving}
            className={clsx(
              "w-[85px] rounded-lg py-4 text-center max-custom-semism:w-full",
              {
                "bg-custom-purple-600 cursor-pointer": !isSaving,
                "bg-custom-purple-300 cursor-not-allowed shadow-[0_0_20px_4px_rgba(139,92,246,0.3)]":
                  isSaving,
              }
            )}
          >
            <span className="instrument-sans font-semibold text-base text-white">
              {isSaving ? "Saving..." : "Save"}
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
