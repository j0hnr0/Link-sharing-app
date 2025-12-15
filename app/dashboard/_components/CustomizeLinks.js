"use client";

import LinkFormContainer from "./LinkFormContainer";
import EmptyLinkContainer from "./EmptyLinkContainer";
import { useDropdown } from "../_context/DropdownContext";

export default function CustomizeLinks({ forms, addForm, removeForm }) {
  const { saveLinks, isSaving } = useDropdown();

  return (
    <div
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

        {forms.length > 0 ? (
          forms.map((form) => (
            <LinkFormContainer
              key={form.id}
              formId={form.id}
              removeForm={removeForm}
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
            type="button"
            onClick={saveLinks}
            disabled={isSaving}
            className="w-[85px] rounded-lg py-4 text-center bg-custom-purple-600 opacity-25 cursor-pointer
                max-custom-semism:w-full"
          >
            <span className="instrument-sans font-semibold text-base text-white">
              Save
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
