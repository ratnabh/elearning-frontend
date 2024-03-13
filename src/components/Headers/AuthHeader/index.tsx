import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const AuthHeader = (props: Props) => {
  return (
    <>
    <div>AuthHeader</div>
    <Outlet/>
    </>
  )
}

export default AuthHeader