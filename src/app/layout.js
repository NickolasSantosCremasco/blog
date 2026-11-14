import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeContextProvider } from '../context/ThemeContext'
import ThemeProvider from '../providers/ThemeProvider'
import AuthProvider from '../providers/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  title: {
    default: "Nickolas Blog | Tecnologia, Código, Empreendedorismo e Finanças",
    template: "%s | Nickolas Blog",
  },
  description:
    "Artigos práticos sobre desenvolvimento de software, inteligência artificial, Micro-SaaS, finanças pessoais e cultura por Nickolas Cremasco.",
  keywords: [
    "Nickolas Cremasco",
    "Programação",
    "Next.js",
    "Engenharia de Software",
    "Inteligência Artificial",
    "Empreendedorismo",
    "Micro-SaaS",
    "Finanças",
  ],
  authors: [{ name: "Nickolas Cremasco" }],
  creator: "Nickolas Cremasco",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Nickolas Blog",
    title: "Nickolas Blog | Tecnologia, Código, Empreendedorismo e Finanças",
    description:
      "Bastidores de desenvolvimento, IA, negócios digitais e finanças direto da prática.",
    images: [
      {
        url: "/logo.png", 
        width: 1200,
        height: 630,
        alt: "Nickolas Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nickolas Blog",
    description:
      "Artigos sobre tecnologia, código, empreendedorismo e finanças.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <AuthProvider>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className='container'>
              <div className='wrapper'>
                <Navbar/>
                {children}
                <Footer/>
                
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
