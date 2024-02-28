import { useMarkSearch } from "@/hooks/useMark"
import { IHeader } from "@/hooks/useNetworkMonitor"
import useCopy from "../../../hooks/useCopy"
import { jwtDecode } from "jwt-decode"

interface IHeadersProps {
  headers: IHeader[]
}

function timeUntil(date: Date) {
  let delta = date.getTime() - Date.now()

  const expired = delta <= 0

  if (expired) {
    delta = Math.abs(delta)
  }

  const hours = Math.floor(delta / 3600000)
  const minutes = Math.floor((delta % 3600000) / 60000)
  const seconds = Math.floor((delta % 60000) / 1000)

  const timestring =
    hours > 0 ? `${hours}h ${minutes}m ${seconds}s` : `${minutes}m ${seconds}s`

  if (expired) {
    return `expired ${timestring} ago`
  }

  return `in ${timestring}`
}

const HeaderListItem = (props: { header: IHeader }) => {
  const { header } = props
  const { isCopied, copy } = useCopy()

  const handleClick = (header: IHeader) => {
    if (header.name === "authorization") {
      copy(header.value ?? "")
      return
    }

    copy(`"${header.name}": "${header.value}"`)
  }

  function renderValue() {
    if (header.name === "authorization") {
      try {
        const jwt = jwtDecode(header.value ?? "")
        if (jwt.exp) {
          const date = new Date(jwt.exp * 1000)
          jwt.exp = `${date.toLocaleString()} (${timeUntil(
            date
          )})` as unknown as number
        }
        return (
          <pre style={{ fontFamily: "Menlo, monospaced", fontSize: "11px" }}>
            {JSON.stringify(jwt, null, 2)}
          </pre>
        )
      } catch (err) {}
    }

    return <span className="break-all">{header.value}</span>
  }

  return (
    <li className="p-0 m-0 w-fit relative">
      <button
        onClick={() => handleClick(header)}
        className="text-left dark:text-gray-300 px-3 py-0.5 rounded-md w-fit cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700"
      >
        <span className="font-bold">{header.name}: </span>
        {renderValue()}
      </button>
      {isCopied && (
        <div className="rounded-md px-1.5 py-0.5 font-bold text-white bg-blue-400 dark:bg-blue-600 absolute left-2 -top-4">
          Copied!
        </div>
      )}
    </li>
  )
}

export const HeaderList = (props: IHeadersProps) => {
  const { headers } = props
  const ref = useMarkSearch()

  return (
    <ul className="list-none m-0" ref={ref}>
      {headers.map((header) => (
        <HeaderListItem
          key={`${header.name}:${header.value}`}
          header={header}
        />
      ))}
    </ul>
  )
}
