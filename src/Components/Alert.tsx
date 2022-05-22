import { FC } from "react"

export interface iAlert{
    message:string,
    result:boolean
}

const Alert:FC<iAlert> = ({message,result}) => {
  return (
    <div className="alert">
        <p className={result ? 'success' : 'failure'}>{message}</p>
    </div>
  )
}

export default Alert