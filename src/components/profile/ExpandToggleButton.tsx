// 共通スタイル定数
const STYLES = {
  container: "flex justify-center py-4",
  button: "flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors",
  icon: "material-symbols-outlined text-2xl"
}

interface ExpandToggleButtonProps {
  isExpanded: boolean
  onClick: () => void
}

export function ExpandToggleButton({ isExpanded, onClick }: ExpandToggleButtonProps) {
  return (
    <div className={STYLES.container}>
      <button
        onClick={onClick}
        className={STYLES.button}
      >
        <span className={STYLES.icon}>
          {isExpanded ? 'expand_less' : 'expand_more'}
        </span>
      </button>
    </div>
  )
}