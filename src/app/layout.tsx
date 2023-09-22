import './globals.css'
import type {Metadata} from 'next'
import 'typeface-montserrat';


export const metadata: Metadata = {
  title: 'Spade Growth',
  description: 'World Class' +
      'Viral Marketing' +
      'World Class Music'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang='en'>
        <body className='overflow-x-hidden' style={{width: '100vw'}}>
            {children}
        </body>
      </html>
  )
}
