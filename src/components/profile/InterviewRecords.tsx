"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { InterviewRecord } from "@/types"

interface InterviewRecordsProps {
  records: InterviewRecord[]
}

export function InterviewRecords({ records }: InterviewRecordsProps) {
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
    <Card className="bg-white shadow-lg border border-gray-200 rounded-lg">
      <CardHeader className="pb-4 px-6 pt-6">
        <CardTitle className="text-base font-medium text-gray-700 flex items-center gap-2">
          <div className="w-5 h-5 text-blue-500">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
          </div>
          面談記録
        </CardTitle>
      </CardHeader>
      <CardContent className="px-6 pb-6 space-y-4">
        {records.map((record) => (
          <div key={record.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">面談記録</span>
              </div>
              <span className="text-sm text-gray-500">{record.date}</span>
            </div>

            {/* Title and Badge */}
            <div className="mb-3">
              <Badge className="bg-blue-100 text-blue-700 border-blue-300 text-xs px-2 py-0.5 mb-2">
                要約
              </Badge>
              <h3 className="font-medium text-gray-800 text-sm leading-relaxed">{record.title}</h3>
            </div>

            {/* Interviewer */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-4 h-4 text-gray-500">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <span className="text-sm text-gray-600">{record.interviewer}</span>
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