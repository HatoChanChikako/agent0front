import { TalentProfile } from "@/types"

export const sampleTalentProfile: TalentProfile = {
  name: "鈴木一郎",
  skillTags: ["GX投資", "スタートアップエコシステム", "脱炭素技術", "技術経営", "ESG投資", "グリーンテック"],
  currentInfo: {
    exchange_date: "2025年7月26日",
    company_name: "GXベンチャーズ株式会社",
    current_department: "投資部",
    current_title: "投資マネージャー"
  },
  pastBusinessCards: [
    {
      exchange_date: "2022年3月15日",
      company_name: "三菱商事株式会社",
      department_at_time: "新規事業開発部",
      title_at_time: "主任"
    },
    {
      exchange_date: "2020年8月10日",
      company_name: "マッキンゼー・アンド・カンパニー",
      department_at_time: "コンサルティング部",
      title_at_time: "アソシエイト"
    }
  ],
  interviewRecords: [
    {
      id: 1,
      date: "2025/07/11",
      title: "スタートアップエコシステムの現状と政策支援について",
      interviewer: "田中太郎",
      summary: "日本のスタートアップエコシステムの現状について詳細な議論を行った。特に、シード段階での資金調達の課題と政策支援制度の活用方法について議論を行った。参考となる、現場での政策実装に向けた具体的な改善点を明確にすることができた。また、海外諸国と比べての日本のあり方、グローバル市場での競争力強化に向けた長期的な施策についても議論した。",
      isLatest: true
    },
    {
      id: 2,
      date: "2025/07/05",
      title: "AI・データ活用推進に向けた長期政策の動向",
      interviewer: "佐藤花子",
      summary: "AI分野への長期政策展開と設計の意見について議論。特に規制強化のAI法制等を考慮して、日本企業の競争力向上の観点から業態を分析した。成功事例としての技術力だけでなく、事業化のスピードと市場ニーズへの対応力が重要であることを確認。今後の産業政策において、段階的なリスクマネージャーの体制と、実証実験から事業化への架け橋の在り方について意見交換を行った。",
      isLatest: false
    },
    {
      id: 3,
      date: "2025/06/28",
      title: "カーボンニュートラル実現に向けた投資戦略",
      interviewer: "山田次郎",
      summary: "脱炭素技術への投資戦略と政策について議論実施。グリーンエナジー分野での投資戦略を検討。技術的革新性だけでなく、コスト競争力と実用化スピードが投資判断の重要な要素であることを確認した。政府の支援制度について、初期段階のリスクマネージャーの体制と、実証実験から事業化への運営について、国際競争力強化の観点から、長期的な観点も含めて議論を行った。",
      isLatest: false
    }
  ],
  activities: [
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
  ],
  contactStaff: [
    {
      id: 1,
      name: "田中太郎",
      department: "デジタル政策課"
    },
    {
      id: 2,
      name: "佐藤花子",
      department: "AI・データ戦略室"
    },
    {
      id: 3,
      name: "山田次郎",
      department: "環境・エネルギー政策課"
    }
  ],
  relatedPeople: [
    {
      id: 1,
      name: "田中智子",
      company: "テックソリューションズ株式会社"
    },
    {
      id: 2,
      name: "山田浩一",
      company: "株式会社グリーンエナジー"
    },
    {
      id: 3,
      name: "佐藤美咲",
      company: "ヘルスケアAI株式会社"
    }
  ],
  contactInfo: {
    email: "suzuki@gx-ventures.co.jp",
    phone: "03-6234-5678"
  }
}