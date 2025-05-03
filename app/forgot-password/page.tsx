import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ForgotPasswordForm from "@/components/forgot-password-form"
import CookieConsent from "@/components/cookie-consent"

export default function ForgotPassword() {
  return (
    <main className="min-h-screen bg-[#0e0a2e] text-white flex flex-col">
      <div className="container mx-auto px-4 py-6 flex-1 flex flex-col">
        <div className="mb-4">
          <Link href="/" className="text-white hover:text-gray-300">
            <ArrowLeft className="h-6 w-6" />
          </Link>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md">
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
      <CookieConsent />
    </main>
  )
}
