import { FC } from 'react'
import Auth from '../Layouts/Auth'

const LoginPage:FC = () => {
  return (
    <div className="loginPage">
        <main className="main-loginPage">
          <Auth/>
        </main>
    </div>
  )
}

export default LoginPage