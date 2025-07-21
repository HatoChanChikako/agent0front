import { ProfileHeader } from "@/components/profile/ProfileHeader"
import { CareerInfo } from "@/components/profile/CareerInfo"
import { Summary } from "@/components/profile/Summary"
import { ActivityInfo } from "@/components/profile/ActivityInfo"
import { ContactInfo } from "@/components/profile/ContactInfo"
import { StaffList } from "@/components/profile/StaffList"
import { RelatedPeople } from "@/components/profile/RelatedPeople"
import { sampleTalentProfile } from "@/data"

export default function TalentProfilePage() {
  const profile = sampleTalentProfile

  return (
    <div className="min-h-screen bg-gray-100">
      <ProfileHeader name={profile.name} skillTags={profile.skillTags} />

      <div className="px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column - Widest */}
        <div className="lg:col-span-5 space-y-6">
          <CareerInfo 
            currentInfo={profile.currentInfo}
            pastBusinessCards={profile.pastBusinessCards}
          />
          <Summary records={profile.interviewRecords} />
        </div>

        {/* Middle Column - Activity Information */}
        <div className="lg:col-span-4">
          <ActivityInfo activities={profile.activities} />
        </div>

        {/* Right Column - Narrowest */}
        <div className="lg:col-span-3 space-y-6">
          <ContactInfo 
            email={profile.contactInfo.email}
            phone={profile.contactInfo.phone}
          />
          <StaffList staff={profile.contactStaff} />
          <RelatedPeople people={profile.relatedPeople} />
        </div>
      </div>
    </div>
  )
}
