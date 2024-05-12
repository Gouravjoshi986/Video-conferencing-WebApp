import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode,
}

const RootLayout = ( {children} : Props ) => {
  return (
    <main>
        {children}
    </main>
  )
}

export default RootLayout