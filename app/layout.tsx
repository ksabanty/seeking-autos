import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Seeking Autos',
  description: 'Car Rental App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
