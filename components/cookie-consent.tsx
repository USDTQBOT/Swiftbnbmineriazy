"use client"

import { useState, useEffect } from "react"
import { Info } from "lucide-react"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookiesAccepted")
    if (!hasAccepted) {
      // Show cookie consent after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
  }

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-4 right-4 max-w-xs bg-gray-200 rounded-lg shadow-lg p-4 text-gray-800 z-40">
          <div className="flex items-start mb-2">
            <Info className="h-5 w-5 text-[#40e0d0] mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm">
                This website use cookies to help you have a superior and more relevant browsing experience on the
                website.
              </p>
              <button className="text-[#40e0d0] text-sm hover:underline mt-1" onClick={() => {}}>
                Read more...
              </button>
            </div>
          </div>
          <button
            onClick={handleAccept}
            className="w-full bg-[#40e0d0] text-center py-2 rounded text-white font-medium hover:bg-[#3acdc0] transition-colors"
          >
            Accept
          </button>
        </div>
      )}

      <button onClick={toggleChat} className="fixed bottom-4 right-4 bg-[#40e0d0] rounded-full p-3 shadow-lg z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>

      {isChatOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl z-50 overflow-hidden">
          <div className="bg-[#40e0d0] p-4 text-white">
            <h3 className="font-bold">Live Chat</h3>
          </div>
          <div className="h-64 p-4 overflow-y-auto bg-gray-50">
            <div className="text-center text-gray-500 text-sm">
              Chat support is available 24/7. Start a conversation now.
            </div>
          </div>
          <div className="p-4 border-t">
            <div className="flex">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 border rounded-l-md px-3 py-2 focus:outline-none"
              />
              <button className="bg-[#40e0d0] text-white px-4 rounded-r-md">Send</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
