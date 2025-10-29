"use client";

import CustomizeLinks from "../_components/CustomizeLinks";
import { useDropdown } from "../_context/DropdownContext";

export default function Links() {
  const { forms, addForm, removeForm } = useDropdown();

  return (
    <CustomizeLinks forms={forms} addForm={addForm} removeForm={removeForm} />
  );
}
