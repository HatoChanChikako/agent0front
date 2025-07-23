"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { InterviewRecord } from "@/types"
import { useState } from "react"

interface SummaryProps {
  records: InterviewRecord[]
}

export function Summary({ records }: SummaryProps) {
  const [showAllRecords, setShowAllRecords] = useState(false)

  const toggleRecords = () => {
    setShowAllRecords(!showAllRecords)
  }

  const latestRecord = records.find(record => record.isLatest) || records[0]
  const otherRecords = records.filter(record => record !== latestRecord)
  const hasOtherRecords = otherRecords.length > 0

  const renderRecord = (record: InterviewRecord) => (
    <div key={record.id} className={`border rounded-lg p-6 shadow-sm ${
      record.isLatest 
        ? "border-blue-200 bg-blue-50" 
        : "border-gray-200 bg-white"
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <span className="text-gray-600 font-medium">面談記録</span>
        </div>
        <div className="flex items-center gap-1 text-blue-600">
          <span className="material-symbols-outlined text-sm">calendar_today</span>
          <span className="text-sm font-medium">{record.date}</span>
        </div>
      </div>

      {/* Title and Badge */}
      <div className="mb-4">
        {record.isLatest && (
          <Badge className="bg-blue-600 text-white border-0 px-3 py-1 text-xs font-medium rounded-md mb-3">
            最新
          </Badge>
        )}
        <h3 className="text-gray-900 font-medium text-base leading-relaxed">{record.title}</h3>
      </div>

      {/* Interviewer */}
      <div className="flex items-center gap-2 mb-4">
        <span className="material-symbols-outlined text-blue-600 text-lg">person</span>
        <span className="text-blue-600 font-medium">{record.interviewer}</span>
      </div>

      {/* Content Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="material-symbols-outlined text-gray-500 text-lg">description</span>
        <span className="text-gray-600 font-medium">面談内容要約</span>
      </div>

      {/* Content */}
      <div className="text-sm text-gray-700 leading-relaxed p-3 bg-gray-50 rounded border border-gray-100">
        {record.summary}
      </div>
    </div>
  )

  return (
    <Card className="profile-card">
      <CardHeader className="card-header-padding">
        <CardTitle className="card-title-base">
          <span className="material-icon">description</span>
          要約
        </CardTitle>
      </CardHeader>
      <CardContent className="card-content-padding space-y-4">
        {/* 最新レコードは常に表示 */}
        {latestRecord && renderRecord(latestRecord)}
        
        {/* 閉じている時の開閉ボタン */}
        {hasOtherRecords && !showAllRecords && (
          <div className="flex justify-center py-4">
            <button
              onClick={toggleRecords}
              className="flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">
                expand_more
              </span>
            </button>
          </div>
        )}
        
        {/* その他のレコード */}
        {showAllRecords && (
          <>
            <div className="space-y-4">
              {otherRecords.map(record => renderRecord(record))}
            </div>
            
            {/* 開いている時の開閉ボタン */}
            <div className="flex justify-center py-4">
              <button
                onClick={toggleRecords}
                className="flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
              >
                <span className="material-symbols-outlined text-2xl">
                  expand_less
                </span>
              </button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}