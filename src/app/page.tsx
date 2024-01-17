import React from "react";
import MainPage from "./MainPage";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Spade Group',
  description: 'World Class' +
      'Viral Marketing' +
      'World Class Music'
}
export default function Home() {
  return (
    <MainPage />
  )
}
