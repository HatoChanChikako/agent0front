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
          <div className="icon-base">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-2.41 3.22A1 1 0 0 0 13 13.5v.5h2v7h5zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9v-2c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v2h1.5v7h3z" />
            </svg>
          </div>
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