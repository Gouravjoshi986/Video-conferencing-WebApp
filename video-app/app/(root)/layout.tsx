import StreamVideoProvider from '@/providers/StreamClientProvider'
import React, { ReactNode } from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YOOM",
  description: "Video calling app",
  icons:{
    icon:'/icons/logo.svg'
  }
};
type Props = {
    children:ReactNode,
}

const RootLayout = ( {children} : Props ) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout