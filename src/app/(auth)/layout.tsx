import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='min-h-screen flex-1 flex justify-center items-center'>
      {children}
    </div>
  )
}

export default Layout
