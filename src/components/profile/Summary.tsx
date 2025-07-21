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
          <div key={record.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="status-dot"></div>
                <span className="text-secondary">面談記録</span>
              </div>
              <span className="text-meta">{record.date}</span>
            </div>

            {/* Title and Badge */}
            <div className="mb-3">
              <Badge className="bg-blue-100 text-blue-700 border-blue-300 text-xs px-2 py-0.5 mb-2">
                要約
              </Badge>
              <h3 className="person-name leading-relaxed">{record.title}</h3>
            </div>

            {/* Interviewer */}
            <div className="flex items-center gap-2 mb-3">
              <span className="material-icon icon-small">person</span>
              <span className="text-secondary">{record.interviewer}</span>
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