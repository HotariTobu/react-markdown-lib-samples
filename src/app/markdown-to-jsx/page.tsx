import { sample } from "@/sample.md";
import Markdown from "markdown-to-jsx";

export default function Page() {
  return (
    <Markdown>{sample}</Markdown>
  )
}
