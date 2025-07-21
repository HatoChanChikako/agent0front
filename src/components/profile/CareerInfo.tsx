import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CurrentInfo, PastBusinessCard } from "@/types"

interface CareerInfoProps {
  currentInfo: CurrentInfo
  pastBusinessCards: PastBusinessCard[]
}

export function CareerInfo({ currentInfo, pastBusinessCards }: CareerInfoProps) {
  return (
    <Card className="profile-card">
      <CardHeader className="card-header-padding">
        <CardTitle className="card-title-base">
          <div className="icon-base">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          経歴情報
        </CardTitle>
      </CardHeader>
      <CardContent className="card-content-padding space-y-4">
        {/* 現在の情報 */}
        <div className="career-section--current">
          <div className="career-info-container">
            <div className="flex items-center gap-2 mb-1">
              <Badge className="bg-green-100 text-green-700 border-green-300 text-xs px-2 py-0.5">
                {currentInfo.exchange_date}
              </Badge>
            </div>
            <h3 className="company-title">{currentInfo.company_name}</h3>
            <p className="job-title">{currentInfo.current_title}</p>
            <p className="department-name">{currentInfo.current_department}</p>
          </div>
        </div>

        {/* 過去の名刺情報 */}
        {pastBusinessCards.map((card, index) => (
          <div key={index} className="career-section--past">
            <div className="career-info-container">
              <p className="text-meta mb-1">名刺交換日：{card.exchange_date}</p>
              <h3 className="company-title">{card.company_name}</h3>
              <p className="job-title">{card.title_at_time}</p>
              <p className="department-name">{card.department_at_time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}