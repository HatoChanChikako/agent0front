import { ContactStaff } from "@/types"
import { ListCard } from "@/components/ui/list-card"
import { PersonListItem } from "@/components/ui/person-list-item"

interface StaffListProps {
  staff: ContactStaff[]
}

export function StaffList({ staff }: StaffListProps) {
  return (
    <ListCard
      title="接点職員"
      icon="groups"
      items={staff}
      emptyMessage="接点職員はいません"
      renderItem={(member) => (
        <PersonListItem
          key={member.id}
          id={member.id}
          name={member.name}
          subtitle={member.department}
        />
      )}
    />
  )
}