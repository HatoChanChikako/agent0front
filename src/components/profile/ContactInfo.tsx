import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ContactInfoProps {
  email: string
  phone: string
}

export function ContactInfo({ email, phone }: ContactInfoProps) {
  return (
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
          {email}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <div className="w-4 h-4 text-blue-500">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </div>
          {phone}
        </div>
      </CardContent>
    </Card>
  )
}