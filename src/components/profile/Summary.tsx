"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { InterviewRecord } from "@/types"

interface SummaryProps {
  records: InterviewRecord[]
}

export function Summary({ records }: SummaryProps) {
  const [expandedRecords, setExpandedRecords] = useState<Set<number>>(new Set())

  const toggleRecord = (recordId: number) => {
    const newExpanded = new Set(expandedRecords)
    if (newExpanded.has(recordId)) {
      newExpanded.delete(recordId)
    } else {
      newExpanded.add(recordId)
    }
    setExpandedRecords(newExpanded)
  }

  return (
    <Card className="profile-card">
      <CardHeader className="card-header-padding">
        <CardTitle className="card-title-base">
          <span className="material-icon">description</span>
          要約
        </CardTitle>
      </CardHeader>
      <CardContent className="card-content-padding space-y-4">
        {records.map((record) => (
          <div key={record.id} className="border border-blue-200 rounded-lg p-4 bg-blue-50">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="status-dot"></div>
                <span className="text-secondary">面談記録</span>
              </div>
              <div className="flex items-center gap-1 text-blue-600">
                <span className="material-symbols-outlined text-sm">calendar_today</span>
                <span className="text-sm font-medium">{record.date}</span>
              </div>
            </div>

            {/* Title and Badge */}
            <div className="mb-3">
              {record.isLatest && (
                <Badge className="bg-blue-600 text-white border-0 px-3 py-1 text-sm font-medium rounded-full mb-2">
                  最新
                </Badge>
              )}
              <h3 className="person-name leading-relaxed">{record.title}</h3>
            </div>

            {/* Interviewer */}
            <div className="flex items-center gap-2 mb-3">
              <span className="material-icon icon-small">person</span>
              <span className="text-blue-600 font-medium">{record.interviewer}</span>
            </div>

            {/* Content */}
            {(record.isLatest || expandedRecords.has(record.id)) && (
              <div className="text-sm text-gray-700 leading-relaxed mb-3 bg-white p-3 rounded border">
                {record.summary}
              </div>
            )}

            {/* Expand/Collapse Button for Past Records */}
            {!record.isLatest && (
              <button
                onClick={() => toggleRecord(record.id)}
                className="flex items-center gap-1 text-blue-600 text-sm hover:text-blue-800 transition-colors"
              >
                {expandedRecords.has(record.id) ? (
                  <>
                    <span>▲</span>
                    <span>折りたたむ</span>
                  </>
                ) : (
                  <>
                    <span>▼</span>
                    <span>詳細を見る</span>
                  </>
                )}
              </button>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}