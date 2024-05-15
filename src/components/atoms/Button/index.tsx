import {FC, MouseEventHandler} from 'react'
import clsx from 'clsx'

interface componentPropType {
    type: 'primary' | 'secondary' | 'transparent',
    className?: string,
    onClick: MouseEventHandler<HTMLButtonElement>,
    text: string
}

const Button: FC<componentPropType> = (props) => {
    const { type, className, onClick, text } = props
    return (
        <button 
        className={clsx([
            type === 'primary' && 'h-[500px] w-[528px] justify-center bg-white text-black rounded-xl',
            className
        ])}
          onClick={onClick}
          >
            {text}
        </button>
    )
}

export default Button