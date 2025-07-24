import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RelatedPerson } from "@/types"

interface RelatedPeopleProps {
  people: RelatedPerson[]
}

export function RelatedPeople({ people }: RelatedPeopleProps) {
  return (
    <Card className="profile-card">
      <CardHeader className="card-header-padding">
        <CardTitle className="card-title-base">
          <span className="material-icon">share</span>
          関連する人物
        </CardTitle>
      </CardHeader>
      <CardContent className="card-content-padding space-y-3">
        {people.map((person) => (
          <div key={person.id} className="list-item--interactive">
            <div className="status-dot mt-2"></div>
            <div className="flex-1">
              <h4 className="person-name">{person.name}</h4>
              <p className="text-meta mt-1">{person.company}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}