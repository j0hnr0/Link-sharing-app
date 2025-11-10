"use client";

import CustomizeLinks from "../_components/CustomizeLinks";
import { useDropdown } from "../_context/DropdownContext";
import EditorContainer from "../_components/EditorContainer";

export default function Links() {
  const { forms, addForm, removeForm } = useDropdown();

  return (
    <EditorContainer>
      <CustomizeLinks forms={forms} addForm={addForm} removeForm={removeForm} />
    </EditorContainer>
  );
}
