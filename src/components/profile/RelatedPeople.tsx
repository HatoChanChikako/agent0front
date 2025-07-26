import { RelatedPerson } from "@/types"
import { ListCard } from "@/components/ui/list-card"
import { PersonListItem } from "@/components/ui/person-list-item"

interface RelatedPeopleProps {
  people: RelatedPerson[]
}

export function RelatedPeople({ people }: RelatedPeopleProps) {
  return (
    <ListCard
      title="関連する人物"
      icon="share"
      items={people}
      emptyMessage="関連する人物はいません"
      fullHeight={true}
      renderItem={(person) => (
        <PersonListItem
          key={person.id}
          id={person.id}
          name={person.name}
          subtitle={person.company}
        />
      )}
    />
  )
}