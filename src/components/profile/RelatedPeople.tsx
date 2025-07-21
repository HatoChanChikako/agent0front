import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RelatedPerson } from "@/types"

interface RelatedPeopleProps {
  people: RelatedPerson[]
}

export function RelatedPeople({ people }: RelatedPeopleProps) {
  return (
    <Card className="bg-white shadow-lg border border-gray-200 rounded-lg">
      <CardHeader className="pb-4 px-6 pt-6">
        <CardTitle className="text-base font-medium text-gray-700 flex items-center gap-2">
          <div className="w-5 h-5 text-blue-500">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
            </svg>
          </div>
          関連する人物
        </CardTitle>
      </CardHeader>
      <CardContent className="px-6 pb-6 space-y-3">
        {people.map((person) => (
          <div key={person.id} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors cursor-pointer border border-transparent hover:border-blue-200">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-800 text-sm">{person.name}</h4>
              <p className="text-xs text-gray-600 mt-1">{person.company}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}