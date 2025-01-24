import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from './components/Sidebar'
import Header from './components/header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}