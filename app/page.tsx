import Link from "next/link"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function IndexPage() {
  return (
    <div className="flex h-screen flex-col items-center  justify-center  ">
      <h1>Welcome to the template</h1>
      <ThemeToggle />
    </div>
  )
}
