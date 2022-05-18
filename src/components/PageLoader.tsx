import { ProgressBar } from './ProgressBar'

export function PageLoader() {
  return (
    <div className="h-screen w-full flex bg-[#111]">
      <ProgressBar />
    </div>
  )
}
