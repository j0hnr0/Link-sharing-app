"use client";

import Header from "./_components/Header";
import PhoneMockup from "./_components/PhoneMockup";
import CustomizeLinks from "./_components/CustomizeLinks";
import { useState } from "react";

export default function Dashboard() {
  const [forms, setForms] = useState([]);
  const [nextId, setNextId] = useState(1);

  function addForm() {
    setForms([...forms, { id: nextId }]);
    setNextId(nextId + 1);
  }

  function removeForm(idToRemove) {
    setForms(forms.filter((form) => form.id !== idToRemove));
  }
  return (
    <main
      className="bg-custom-grey-50 p-6
    max-custom-semism:p-0"
    >
      <Header />

      <div
        className="mt-6 flex gap-6
      max-custom-semism:m-4"
      >
        <PhoneMockup forms={forms} />
        <CustomizeLinks
          forms={forms}
          addForm={addForm}
          removeForm={removeForm}
        />
      </div>
    </main>
  );
}
