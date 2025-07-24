import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ContactInfoProps {
  email: string
  phone: string
}

export function ContactInfo({ email, phone }: ContactInfoProps) {
  return (
    <Card className="profile-card--contact">
      <CardHeader className="card-header-padding">
        <CardTitle className="card-title-base">
          <span className="material-icon">contact_page</span>
          連絡先
        </CardTitle>
      </CardHeader>
      <CardContent className="card-content-padding space-y-2">
        <div className="flex items-center gap-2 text-secondary">
          <span className="material-icon icon-contact">email</span>
          {email}
        </div>
        <div className="flex items-center gap-2 text-secondary">
          <span className="material-icon icon-contact">phone</span>
          {phone}
        </div>
      </CardContent>
    </Card>
  )
}