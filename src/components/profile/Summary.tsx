"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InterviewRecord } from "@/types";
import { useState } from "react";
import { ExpandToggleButton } from "./ExpandToggleButton";

// 共通スタイル定数
const STYLES = {
  header: {
    container: "card-header-padding",
    title: "card-title-base",
  },
  content: {
    container: "card-content-padding space-y-4",
    recordsContainer: "space-y-4",
  },
  icon: "material-icon",
};

interface SummaryProps {
  records: InterviewRecord[];
}

export function Summary({ records }: SummaryProps) {
  const [showAllRecords, setShowAllRecords] = useState(false);

  const toggleRecords = () => {
    setShowAllRecords(!showAllRecords);
  };

  const latestRecord = records.find((record) => record.isLatest) || records[0];
  const otherRecords = records.filter((record) => record !== latestRecord);
  const hasOtherRecords = otherRecords.length > 0;

  return (
    <Card className="profile-card h-full">
      <CardHeader className={STYLES.header.container}>
        <CardTitle className={STYLES.header.title}>
          <span className={STYLES.icon}>description</span>
          面談記録
        </CardTitle>
      </CardHeader>
      <CardContent className={STYLES.content.container}>
        {/* 最新レコードの概要表示 */}
        {latestRecord && (
          <div className="space-y-4">
            <div className="border rounded-lg p-4 bg-blue-50 border-blue-200">
              <div className="flex items-center justify-between mb-3">
                <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  最新
                </div>
                <div className="flex items-center gap-1 text-blue-600 text-sm">
                  <span className="material-symbols-outlined text-sm">
                    calendar_today
                  </span>
                  <span>{latestRecord.date}</span>
                </div>
              </div>
              <h3 className="text-gray-900 font-medium text-base mb-2">
                {latestRecord.title}
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-blue-600 text-lg">
                  person
                </span>
                <span className="text-blue-600 font-medium">
                  {latestRecord.interviewer}
                </span>
              </div>
              <div className="text-sm text-gray-700 leading-relaxed p-3 bg-gray-50 rounded border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-gray-500 text-lg">
                    description
                  </span>
                  <span className="text-gray-600 font-medium">
                    面談内容要約
                  </span>
                </div>
                {latestRecord.summary}
              </div>
            </div>
          </div>
        )}

        {/* 閉じている時の開閉ボタン */}
        {hasOtherRecords && !showAllRecords && (
          <ExpandToggleButton isExpanded={false} onClick={toggleRecords} />
        )}

        {/* その他のレコード */}
        {showAllRecords && (
          <>
            <div className={STYLES.content.recordsContainer}>
              {otherRecords.map((record) => (
                <div
                  key={record.id}
                  className="border rounded-lg p-4 bg-white border-gray-200"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-gray-900 font-medium text-base flex-1">
                      {record.title}
                    </h3>
                    <div className="flex items-center gap-1 text-blue-600 text-sm flex-shrink-0 ml-2">
                      <span className="material-symbols-outlined text-sm">
                        calendar_today
                      </span>
                      <span>{record.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="material-symbols-outlined text-blue-600 text-lg">
                      person
                    </span>
                    <span className="text-blue-600 font-medium">
                      {record.interviewer}
                    </span>
                  </div>
                  <div className="text-sm text-gray-700 leading-relaxed p-3 bg-gray-50 rounded border border-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="material-symbols-outlined text-gray-500 text-lg">
                        description
                      </span>
                      <span className="text-gray-600 font-medium">
                        面談内容要約
                      </span>
                    </div>
                    {record.summary}
                  </div>
                </div>
              ))}
            </div>

            {/* 開いている時の開閉ボタン */}
            <ExpandToggleButton isExpanded={true} onClick={toggleRecords} />
          </>
        )}
      </CardContent>
    </Card>
  );
}
