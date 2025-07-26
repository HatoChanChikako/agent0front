"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CurrentInfo, PastBusinessCard } from "@/types";
import { ExpandToggleButton } from "./ExpandToggleButton";

interface CareerInfoProps {
  currentInfo: CurrentInfo;
  pastBusinessCards: PastBusinessCard[];
}

export function CareerInfo({
  currentInfo,
  pastBusinessCards,
}: CareerInfoProps) {
  const [showPastCareer, setShowPastCareer] = useState(false);

  const togglePastCareer = () => {
    setShowPastCareer(!showPastCareer);
  };

  const hasPastCareer = pastBusinessCards.length > 0;

  return (
    <Card className="profile-card h-full">
      <CardHeader className="card-header-padding">
        <CardTitle className="card-title-base">
          <span className="material-icon">person</span>
          経歴情報
        </CardTitle>
      </CardHeader>
      <CardContent className="card-content-padding space-y-4">
        {/* 現在の情報 */}
        <div className="border rounded-lg p-4 bg-blue-50 border-blue-200">
          <div className="flex items-center justify-between mb-3">
            <Badge className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
              最新
            </Badge>
            <div className="flex items-center gap-1 text-blue-600 text-xs">
              <span className="material-symbols-outlined text-xs">
                calendar_today
              </span>
              <span>名刺取得日：{currentInfo.exchange_date}</span>
            </div>
          </div>
          <h3 className="text-gray-900 font-medium text-base mb-2">
            {currentInfo.company_name}
          </h3>
          <div className="text-sm text-gray-700 leading-relaxed p-3 bg-gray-50 rounded border border-gray-100">
            <p className="mb-1">{currentInfo.current_department}</p>
            <p>{currentInfo.current_title}</p>
          </div>
        </div>

        {/* 閉じている時の開閉ボタン */}
        {hasPastCareer && !showPastCareer && (
          <ExpandToggleButton isExpanded={false} onClick={togglePastCareer} />
        )}

        {/* 過去の名刺情報 */}
        {showPastCareer && (
          <>
            <div className="space-y-4">
              {pastBusinessCards.map((card, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 bg-white border-gray-200"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-gray-900 font-medium text-base flex-1">
                      {card.company_name}
                    </h3>
                    <div className="flex items-center gap-1 text-blue-600 text-xs flex-shrink-0 ml-2">
                      <span className="material-symbols-outlined text-xs">
                        calendar_today
                      </span>
                      <span>取得日：{card.exchange_date}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-700 leading-relaxed p-3 bg-gray-50 rounded border border-gray-100">
                    <p className="mb-1">{card.department_at_time}</p>
                    <p>{card.title_at_time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 開いている時の開閉ボタン */}
            <ExpandToggleButton isExpanded={true} onClick={togglePastCareer} />
          </>
        )}
      </CardContent>
    </Card>
  );
}
