import { Badge } from "@/components/ui/badge"

interface ProfileHeaderProps {
  name: string
  skillTags: string[]
}

export function ProfileHeader({ name, skillTags }: ProfileHeaderProps) {
  return (
    <div className="profile-header-gradient">
      <div className="max-w-full">
        <h1 className="text-2xl font-bold mb-4">{name}</h1>
        <div className="flex flex-wrap gap-2">
          {skillTags.map((tag, index) => (
            <Badge
              key={index}
              className="bg-white text-blue-700 border-0 hover:bg-white text-xs px-3 py-1 rounded-full font-normal"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}