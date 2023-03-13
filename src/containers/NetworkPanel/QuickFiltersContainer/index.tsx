import { Button } from "@/components/Button"
import { OperationType } from "@/helpers/graphqlHelpers"
import { QuickFilters } from "../"
import { Bar } from "../../../components/Bar"

export type QuickFiltersContainerProps = {
  quickFilters: QuickFilters
  onQuickFilterButtonClicked: (filter: OperationType) => void
}

type PillProps = {
  className: string
}

const Pill = (props: PillProps) => {
  const { className } = props
  return <div className={`h-3 w-3 rounded-full ${className}`} />
}

export const QuickFiltersContainer = (props: QuickFiltersContainerProps) => {
  const { quickFilters, onQuickFilterButtonClicked } = props

  return (
    <Bar className="border-t">
      <div className="flex gap-2">
        <Button
          variant={quickFilters.query ? "primary" : "ghost"}
          onClick={() => onQuickFilterButtonClicked("query")}
          icon={
            <Pill
              className={quickFilters.query ? "bg-green-400" : "bg-gray-400"}
            />
          }
        >
          Queries
        </Button>
        <Button
          variant={quickFilters.mutation ? "primary" : "ghost"}
          onClick={() => onQuickFilterButtonClicked("mutation")}
          icon={
            <Pill
              className={
                quickFilters.mutation ? "bg-indigo-400" : "bg-gray-400"
              }
            />
          }
        >
          Mutations
        </Button>
        <Button
          variant={quickFilters.unknown ? "primary" : "ghost"}
          onClick={() => onQuickFilterButtonClicked("unknown")}
          icon={
            <Pill
              className={quickFilters.unknown ? "bg-yellow-400" : "bg-gray-400"}
            />
          }
        >
          Unknowns
        </Button>
      </div>
    </Bar>
  )
}
