export default async function Page() {
  const uncachedData = await getData()
  return (
    <CacheComponent>
      <DynamicComponent data={uncachedData} />
    </CacheComponent>
  )
}
 
async function CacheComponent({ children }: { children: ReactNode }) {
  'use cache'
  const cachedData = await fetch('/api/cached-data')
  return (
    <div>
      <PrerenderedComponent data={cachedData} />
      {children}
    </div>
  )
}
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import LoginForm from "@/components/login-form"
import CookieConsent from "@/components/cookie-consent"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0e0a2e] text-white flex flex-col">
      <div className="container mx-auto px-4 py-6 flex-1 flex flex-col">
        <div className="mb-4">
          <Link href="#" className="text-white hover:text-gray-300">
            <ArrowLeft className="h-6 w-6" />
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md">
            <LoginForm />
          </div>
        </div>
      </div>
      <CookieConsent />
    </main>
  )
}
