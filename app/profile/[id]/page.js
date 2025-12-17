"use client";

import { useQuery } from "@tanstack/react-query";
import { use } from "react";

export default function PublicProfile({ params }) {
  const { id } = use(params);

 

  return <h1>{id}</h1>;
}
