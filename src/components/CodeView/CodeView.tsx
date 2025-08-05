import { useHighlight } from "@/hooks/useHighlight"
import { useByteSize } from "@/hooks/useBytes"
import { useMarkSearch } from "@/hooks/useMark"
import { useFormattedCode } from "../../hooks/useFormattedCode"
import { DelayedLoader } from "../DelayedLoader"
import { Spinner } from "../Spinner"
import { config } from "../../config"
import classes from "./CodeView.module.css"

interface ICodeViewProps {
  text: string
  language: "graphql" | "json"
  autoFormat?: boolean
  className?: string
}

const LoadingIndicator = () => {
  return (
    <div className="flex items-center">
      <Spinner />
      <div className="dark:text-white ml-4 mt-0.5">Formatting...</div>
    </div>
  )
}

const CodeTooLargeMessage = () => {
  return (
    <div className="dark:text-white">
      The response payload is too large to display.
    </div>
  )
}

function jsonTryParse(text: string) {
  try {
    return JSON.parse(text)
  } catch (e) {
    return text
  }
}

function jsonParseDeep(text: string) {
  function visit(text: any): any {
    if (text === null) {
      return null
    }

    if (typeof text === "object") {
      const keys = Object.keys(text)
      const result: any = {}
      for (const key of keys) {
        result[key] = visit(text[key])
      }
      return result
    } else {
      const parsedText = jsonTryParse(text)
      if (typeof parsedText === "object") {
        return visit(parsedText)
      } else {
        return parsedText
      }
    }
  }

  const result = visit(text)
  return typeof result === "object" && result !== null
    ? JSON.stringify(result, null, 2)
    : result
}

const CodeRenderer = (props: ICodeViewProps) => {
  const { text, language, autoFormat } = props

  const deepParsedText = jsonParseDeep(text)
  const formattedText = useFormattedCode(deepParsedText, language, autoFormat)

  const { markup: jsonMarkup, loading } = useHighlight(language, formattedText)
  const ref = useMarkSearch(jsonMarkup)

  // TODO
  // When mark returns results. Show a component to jump to the next/previous
  // When the component renders also jump to the first result.

  return (
    <DelayedLoader loading={loading} loader={<LoadingIndicator />}>
      <pre>
        <code
          dangerouslySetInnerHTML={{ __html: jsonMarkup }}
          className={classes.container}
          ref={ref}
        />
      </pre>
    </DelayedLoader>
  )
}

export const CodeView = (props: ICodeViewProps) => {
  const { text, language, autoFormat, className } = props
  const size = useByteSize(text.length, { unit: "mb" })

  return (
    <div className={className}>
      {size > config.maxUsableResponseSizeMb ? (
        <CodeTooLargeMessage />
      ) : (
        <CodeRenderer autoFormat={autoFormat} text={text} language={language} />
      )}
    </div>
  )
}
