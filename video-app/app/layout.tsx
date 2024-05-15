
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
import '@stream-io/video-react-sdk/dist/css/styles.css'
import { Toaster } from "@/components/ui/toaster"
const inter = Inter({ subsets: ["latin"] });
import { Metadata } from "next";
import 'react-datepicker/dist/react-datepicker.css'
export const metadata: Metadata = {
  title: "YOOM",
  description: "Video calling app",
  icons:{
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
      appearance={{
        layout:{
          logoImageUrl:'/icons/yoom-logo.svg',
          socialButtonsVariant:'iconButton'
        },
        variables:{
          colorText:'#fff',
          colorPrimary:"#0E78F9",
          colorBackground:'#1c1f2e',
          colorInputBackground:'#252a41',
          colorInputText:'#fff'
        }
      }}
      >
        <body className={`${inter.className} bg-dark-2`}>
          {children}
          <Toaster/>
          </body>
      </ClerkProvider>
    </html>
  );
}