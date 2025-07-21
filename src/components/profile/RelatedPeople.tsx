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
          <div className="icon-base">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
            </svg>
          </div>
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