import { DM_Sans, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ChunkLoadErrorHandler } from '@/components/chunk-load-error-handler'
import Script from 'next/script'
import { MessageCircle } from 'lucide-react'


const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })
const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: 'JKGROUP | Liderazgo y Estrategia - Holding Corporativo',
  description: 'JKGROUP es un holding corporativo líder enfocado en calidad, servicio al cliente y productos de primera calidad. Liderazgo y estrategia en cada servicio.',
  openGraph: {
    title: 'JKGROUP | Liderazgo y Estrategia',
    description: 'Holding corporativo líder con 5 marcas de servicio premium.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <body className={`${dmSans.variable} ${jakartaSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Script src="https://apps.abacus.ai/chatllm/appllm-lib.js" strategy="lazyOnload" />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <ChunkLoadErrorHandler />
          <a
            href="https://wa.me/525512345678?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20JKGROUP"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle className="w-7 h-7 text-white" />
          </a>
        </ThemeProvider>
      </body>
    </html>
  )
}
