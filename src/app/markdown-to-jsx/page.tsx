'use client'

import { sample } from "@/sample.md";
import Markdown from "markdown-to-jsx";
import { useRef, useEffect } from "react";

export default function Page() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@highlightjs/cdn-assets@11.9.0/styles/nord.min.css"
      />
      <script
        crossorigin
        src="https://unpkg.com/@highlightjs/cdn-assets@11.9.0/highlight.min.js"
      ></script>
      <Markdown
        options={{
          overrides: {
            code(props) {
              const ref = useRef<HTMLElement | null>(null)

              useEffect(() => {
                if (ref.current && props.className?.includes('lang-') && window.hljs) {
                  window.hljs.highlightElement(ref.current)

                  // hljs won't reprocess the element unless this attribute is removed
                  ref.current.removeAttribute('data-highlighted')
                }
              }, [props.className, props.children])

              return <code {...props} ref={ref} />
            },
          },
        }}
      >{sample}</Markdown>
    </>
  )
}
