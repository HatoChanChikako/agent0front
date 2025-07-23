"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { InterviewRecord } from "@/types"
import { useState } from "react"
import { InterviewRecordCard } from "./InterviewRecordCard"
import { ExpandToggleButton } from "./ExpandToggleButton"

// 共通スタイル定数
const STYLES = {
  header: {
    container: "card-header-padding",
    title: "card-title-base"
  },
  content: {
    container: "card-content-padding space-y-4",
    recordsContainer: "space-y-4"
  },
  icon: "material-icon"
}

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

  return (
    <Card className="profile-card">
      <CardHeader className={STYLES.header.container}>
        <CardTitle className={STYLES.header.title}>
          <span className={STYLES.icon}>description</span>
          要約
        </CardTitle>
      </CardHeader>
      <CardContent className={STYLES.content.container}>
        {/* 最新レコードは常に表示 */}
        {latestRecord && <InterviewRecordCard record={latestRecord} />}
        
        {/* 閉じている時の開閉ボタン */}
        {hasOtherRecords && !showAllRecords && (
          <ExpandToggleButton 
            isExpanded={false}
            onClick={toggleRecords}
          />
        )}
        
        {/* その他のレコード */}
        {showAllRecords && (
          <>
            <div className={STYLES.content.recordsContainer}>
              {otherRecords.map(record => (
                <InterviewRecordCard key={record.id} record={record} />
              ))}
            </div>
            
            {/* 開いている時の開閉ボタン */}
            <ExpandToggleButton 
              isExpanded={true}
              onClick={toggleRecords}
            />
          </>
        )}
      </CardContent>
    </Card>
  )
}