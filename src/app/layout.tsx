import './globals.css'
import 'typeface-montserrat';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang='en'>
        <body style={{width: '100vw'}}>
            {children}
        </body>
      </html>
  )
}
