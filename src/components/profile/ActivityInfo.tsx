import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity } from "@/types"

interface ActivityInfoProps {
  activities: Activity[]
}

export function ActivityInfo({ activities }: ActivityInfoProps) {
  return (
    <Card className="profile-card">
      <CardHeader className="card-header-padding">
        <div className="flex items-center justify-between">
          <CardTitle className="card-title-base">
            <div className="icon-base">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.818c-.062-8.71-7.118-15.758-15.84-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z" />
              </svg>
            </div>
            活動情報
          </CardTitle>
          <Button
            variant="outline"
            size="sm"
            className="text-xs px-4 py-1.5 border-blue-300 text-blue-600 hover:bg-blue-50 rounded-full bg-transparent"
          >
            関連情報を取得する
          </Button>
        </div>
      </CardHeader>
      <CardContent className="card-content-padding space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${
              activity.category === "ニュース"
                ? "bg-blue-50"
                : activity.category === "書籍"
                  ? "bg-gray-50"
                  : activity.category === "論文"
                    ? "bg-purple-50"
                    : "bg-orange-50"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Badge
                    className={`text-xs px-2 py-0.5 rounded-full border ${
                      activity.category === "ニュース"
                        ? "bg-white text-blue-600 border-blue-200"
                        : activity.category === "書籍"
                          ? "bg-white text-gray-600 border-gray-300"
                          : activity.category === "論文"
                            ? "bg-white text-purple-600 border-purple-200"
                            : "bg-white text-orange-600 border-orange-200"
                    }`}
                  >
                    {activity.category}
                  </Badge>
                  <span className="text-xs text-gray-500">{activity.date}</span>
                </div>
                <p className="text-sm text-gray-800 leading-relaxed">
                  {activity.title}
                </p>
              </div>
              <div className="bg-white rounded-full px-3 py-1 ml-3 shadow-sm border border-gray-100">
                <span className="text-xs text-gray-600">{activity.details}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}