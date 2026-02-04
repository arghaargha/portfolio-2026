import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// Import the cursor we just checked
import LiquidCursor from './components/visuals/LiquidCursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Argha Das | Portfolio',
  description: 'Full Stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden cursor-none`}>
        {/* The Cursor sits on top of everything */}
        <LiquidCursor />
        {children}
      </body>
    </html>
  )
}