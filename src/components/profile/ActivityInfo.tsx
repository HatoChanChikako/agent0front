"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, ACTIVITY_CATEGORY_CLASSES } from "@/types";

const getCategoryClass = (category: Activity["category"]) => {
  return ACTIVITY_CATEGORY_CLASSES[category] || "activity-category--other";
};

interface ActivityInfoProps {
  activities: Activity[];
}

export function ActivityInfo({ activities }: ActivityInfoProps) {
  const [showActivities, setShowActivities] = useState(false);

  const handleFetchActivities = () => {
    setShowActivities(true);
  };

  return (
    <Card className="profile-card">
      <CardHeader className="card-header-padding">
        <div className="flex items-center justify-between">
          <CardTitle className="card-title-base">
            <span className="material-icon">rss_feed</span>
            活動情報
          </CardTitle>
          <Button
            variant="outline"
            size="sm"
            className="text-xs px-4 py-1.5 border-blue-300 text-blue-600 hover:bg-blue-50 rounded-full bg-transparent"
            onClick={handleFetchActivities}
          >
            関連情報を取得する
          </Button>
        </div>
      </CardHeader>
      <CardContent className="card-content-padding space-y-4">
        {!showActivities ? (
          <div className="flex items-start justify-center pt-4 px-4">
            <div
              className="text-sm text-gray-700 leading-relaxed py-20 bg-gray-50 rounded border border-gray-100 w-full text-center cursor-pointer hover:bg-gray-100 transition-colors duration-200"
              onClick={handleFetchActivities}
            >
              活動情報を取得してください
            </div>
          </div>
        ) : activities.length === 0 ? (
          <div className="flex items-center justify-center pt-8">
            <div className="text-sm text-gray-500">活動情報はありません</div>
          </div>
        ) : (
          activities.map((activity, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg ${getCategoryClass(
                activity.category
              )}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className="activity-badge">
                      {activity.category}
                    </Badge>
                    <span className="text-meta">{activity.date}</span>
                  </div>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    {activity.title}
                  </p>
                </div>
                <div className="bg-white rounded-full px-3 py-1 ml-3 shadow-sm border border-gray-100">
                  <span className="text-xs text-gray-600">
                    {activity.details}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}
