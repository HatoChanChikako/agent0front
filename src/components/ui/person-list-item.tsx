interface PersonListItemProps {
  id: number | string
  name: string
  subtitle: string
  className?: string
  onClick?: () => void
}

export function PersonListItem({ 
  id, 
  name, 
  subtitle, 
  className = "list-item--interactive",
  onClick 
}: PersonListItemProps) {
  return (
    <div key={id} className={className} onClick={onClick}>
      <div className="flex-1">
        <h4 className="person-name">{name}</h4>
        <p className="text-meta mt-1">{subtitle}</p>
      </div>
    </div>
  )
}