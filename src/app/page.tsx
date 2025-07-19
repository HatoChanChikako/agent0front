import { Badge } from "../components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"

export default function TalentProfilePage() {
  const skillTags = ["GX投資", "スタートアップエコシステム", "脱炭素技術", "技術経営", "ESG投資", "グリーンテック"]

  const activities = [
    {
      category: "ニュース",
      date: "2025.12.01",
      title: "新規事業政策フォーラムでのパネル登壇記録を取得",
      details: "詳細を見る",
    },
    {
      category: "書籍",
      date: "2025.12.01",
      title: "新規事業政策フォーラムでのパネル登壇記録を取得",
      details: "詳細を見る",
    },
    {
      category: "論文",
      date: "2025.12.01",
      title: "新規事業政策フォーラムでのパネル登壇記録を取得",
      details: "詳細を見る",
    },
    {
      category: "イベント",
      date: "2025.12.01",
      title: "新規事業政策フォーラムでのパネル登壇記録を取得",
      details: "詳細を見る",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white px-12 py-8">
        <div className="max-w-full">
          <h1 className="text-2xl font-bold mb-4">鈴木一郎</h1>
          <div className="flex flex-wrap gap-2">
            {skillTags.map((tag, index) => (
              <Badge
                key={index}
                className="bg-white text-blue-700 border-0 hover:bg-white text-xs px-3 py-1 rounded-full font-normal"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column - Widest */}
        <div className="lg:col-span-5 space-y-6">
          {/* Career Information */}
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
            <CardContent className="min-h-[200px] px-6 pb-6">{/* Empty content area */}</CardContent>
          </Card>

          {/* Summary */}
          <Card className="bg-white shadow-lg border border-gray-200 rounded-lg">
            <CardHeader className="pb-4 px-6 pt-6">
              <CardTitle className="text-base font-medium text-gray-700 flex items-center gap-2">
                <div className="w-5 h-5 text-blue-500">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                </div>
                要約
              </CardTitle>
            </CardHeader>
            <CardContent className="min-h-[200px] px-6 pb-6">{/* Empty content area */}</CardContent>
          </Card>
        </div>

        {/* Middle Column - Activity Information */}
        <div className="lg:col-span-4">
          <Card className="bg-white shadow-lg border border-gray-200 rounded-lg">
            <CardHeader className="pb-4 px-6 pt-6">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-medium text-gray-700 flex items-center gap-2">
                  <div className="w-5 h-5 text-blue-500">
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
            <CardContent className="px-6 pb-6 space-y-4">
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
                        新規事業政策フォーラムでのパネル登壇記録を取得
                      </p>
                    </div>
                    <div className="bg-white rounded-full px-3 py-1 ml-3 shadow-sm border border-gray-100">
                      <span className="text-xs text-gray-600">詳細を見る</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Narrowest */}
        <div className="lg:col-span-3 space-y-6">
          {/* Contact Information */}
          <Card className="bg-blue-50 shadow-lg border border-gray-200 rounded-lg">
            <CardHeader className="pb-4 px-6 pt-6">
              <CardTitle className="text-base font-medium text-gray-700 flex items-center gap-2">
                <div className="w-5 h-5 text-blue-500">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
                  </svg>
                </div>
                連絡先
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-4 h-4 text-blue-500">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                suzuki@gx-ventures.co.jp
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-4 h-4 text-blue-500">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                03-6234-5678
              </div>
            </CardContent>
          </Card>

          {/* Contact Staff */}
          <Card className="bg-white shadow-lg border border-gray-200 rounded-lg">
            <CardHeader className="pb-4 px-6 pt-6">
              <CardTitle className="text-base font-medium text-gray-700 flex items-center gap-2">
                <div className="w-5 h-5 text-blue-500">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-2.41 3.22A1 1 0 0 0 13 13.5v.5h2v7h5zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9v-2c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v2h1.5v7h3z" />
                  </svg>
                </div>
                接点職員
              </CardTitle>
            </CardHeader>
            <CardContent className="min-h-[100px] px-6 pb-6">{/* Empty content area */}</CardContent>
          </Card>

          {/* Related People */}
          <Card className="bg-white shadow-lg border border-gray-200 rounded-lg">
            <CardHeader className="pb-4 px-6 pt-6">
              <CardTitle className="text-base font-medium text-gray-700 flex items-center gap-2">
                <div className="w-5 h-5 text-blue-500">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
                  </svg>
                </div>
                関連する人物
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6">
              <p className="text-sm text-gray-500 text-center py-8">関連する人物はいません</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
