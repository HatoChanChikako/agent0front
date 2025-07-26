import { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { EmptyState } from "@/components/ui/empty-state"

interface ListCardProps {
  title: string
  icon: string
  items: unknown[]
  emptyMessage: string
  renderItem: (item: unknown, index: number) => ReactNode
  className?: string
  fullHeight?: boolean
}

export function ListCard({ 
  title, 
  icon, 
  items, 
  emptyMessage, 
  renderItem, 
  className = "",
  fullHeight = false 
}: ListCardProps) {
  const cardClasses = `profile-card ${fullHeight ? 'h-full flex flex-col' : ''} ${className}`
  const contentClasses = `card-content-padding space-y-3 ${fullHeight ? 'flex-1' : ''}`

  return (
    <Card className={cardClasses}>
      <CardHeader className="card-header-padding">
        <CardTitle className="card-title-base">
          <span className="material-icon">{icon}</span>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className={contentClasses}>
        {items.length === 0 ? (
          <EmptyState message={emptyMessage} />
        ) : (
          items.map(renderItem)
        )}
      </CardContent>
    </Card>
  )
}