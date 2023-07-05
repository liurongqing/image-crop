"use client";
import { useEffect } from "react";
import { invoke } from "@tauri-apps/api/tauri";

export default function Home() {
  useEffect(() => {
    invoke<string>("greet", { name: "Next.js" })
      .then(console.log)
      .catch(console.error);
  }, []);
  return <div>123 - 001</div>;
}
