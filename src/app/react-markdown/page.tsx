import { sample } from "@/sample.md";
import Markdown from "react-markdown";

export default function Page() {
  return (
    <Markdown>{sample}</Markdown>
  )
}
