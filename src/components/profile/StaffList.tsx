import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactStaff } from "@/types"

interface StaffListProps {
  staff: ContactStaff[]
}

export function StaffList({ staff }: StaffListProps) {
  return (
    <Card className="profile-card">
      <CardHeader className="card-header-padding">
        <CardTitle className="card-title-base">
          <span className="material-icon">groups</span>
          接点職員
        </CardTitle>
      </CardHeader>
      <CardContent className="card-content-padding space-y-3">
        {staff.map((member) => (
          <div key={member.id} className="list-item--hoverable">
            <div className="status-dot mt-2"></div>
            <div className="flex-1">
              <h4 className="person-name">{member.name}</h4>
              <p className="text-meta mt-1">{member.department}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}