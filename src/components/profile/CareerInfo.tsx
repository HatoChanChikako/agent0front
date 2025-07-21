import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CurrentInfo, PastBusinessCard } from "@/types"

interface CareerInfoProps {
  currentInfo: CurrentInfo
  pastBusinessCards: PastBusinessCard[]
}

export function CareerInfo({ currentInfo, pastBusinessCards }: CareerInfoProps) {
  return (
    <Card className="bg-white shadow-lg border border-gray-200 rounded-lg">
      <CardHeader className="pb-4 px-6 pt-6">
        <CardTitle className="text-base font-medium text-gray-700 flex items-center gap-2">
          <div className="w-5 h-5 text-blue-500">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          経歴情報
        </CardTitle>
      </CardHeader>
      <CardContent className="px-6 pb-6 space-y-4">
        {/* 現在の情報 */}
        <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50 rounded-r-lg">
          <div className="flex flex-col space-y-1">
            <div className="flex items-center gap-2 mb-1">
              <Badge className="bg-green-100 text-green-700 border-green-300 text-xs px-2 py-0.5">
                {currentInfo.exchange_date}
              </Badge>
            </div>
            <h3 className="font-semibold text-gray-800">{currentInfo.company_name}</h3>
            <p className="text-sm font-medium text-blue-600">{currentInfo.current_title}</p>
            <p className="text-sm text-gray-600">{currentInfo.current_department}</p>
          </div>
        </div>

        {/* 過去の名刺情報 */}
        {pastBusinessCards.map((card, index) => (
          <div key={index} className="border-l-4 border-gray-400 pl-4 py-2">
            <div className="flex flex-col space-y-1">
              <p className="text-xs text-gray-500 mb-1">名刺交換日：{card.exchange_date}</p>
              <h3 className="font-semibold text-gray-800">{card.company_name}</h3>
              <p className="text-sm font-medium text-blue-600">{card.title_at_time}</p>
              <p className="text-sm text-gray-600">{card.department_at_time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}