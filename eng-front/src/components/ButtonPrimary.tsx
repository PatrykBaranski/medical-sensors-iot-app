import { FC, MouseEventHandler } from "react"
type ButtonPrimaryType = {
    onClick?:MouseEventHandler<HTMLButtonElement>,
    text:string
}

export const ButtonPrimary:FC<ButtonPrimaryType> = ({onClick, text}) => {
    return <button className="bg-primary-500 hover:bg-primary-600 px-2 py-4 rounded" onClick={onClick}>{text}</button>
}