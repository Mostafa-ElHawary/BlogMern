import React from 'react'
// import style from './AuthLinks.module.scss'
import Link from 'next/link'
export default function AuthLinks() {
  const  auth = "auth"
  return (
    < >
    {auth !== "auth" ? <Link href="/login">login</Link> : ( <><Link href="/write">write</Link> <span className="links">logout</span>  </>  )  }  </>
  )
}
