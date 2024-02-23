import React from "react";
import MainPage from "./MainPage";
import type {Metadata} from "next";
import TalkToUs from "../components/TalkToUs/TalkToUs";
const fs = require('fs')
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
