
"use client";

import { useQuery } from "@tanstack/react-query";

export default function AboutPage() {
  const { data } = useQuery({
    queryKey: ["posts"],
  });
  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
}
