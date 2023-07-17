import {Nunito} from 'next/font/google'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import Navbar from './components/navbar/Navbar'
import Modal from './components/Modals/Modal'
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/Modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'


export const metadata: Metadata = {
  title: 'MyAirbnb',
  description: 'mi sitio de airbnb',
}

const font = Nunito({
    subsets : ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal />  
        <ToasterProvider /> 
        <Navbar />
        
          
        {children}
         
        </body>
    </html>
  )
}
