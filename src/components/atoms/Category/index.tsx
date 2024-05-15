import {FC, MouseEventHandler} from 'react'
import Image from 'next/image'


//Props
interface CategoryPropType {
    imgUrl: string,
    imgAlt: string,
    text: string,
    onClick: MouseEventHandler<HTMLButtonElement>
}


//Component
const Category: FC<CategoryPropType> = (props) => {
    const {imgUrl, imgAlt, text, onClick} = props
    return (
        <button 
         className='flex flex-col gap-8 items-center' 
         onClick={onClick}
        >
            <Image height={101} width={105} src={imgUrl} alt={imgAlt}/>
            <p>{text}</p>
        </button>
    )
}


//Export package
export default Category

//Semangat!!
//wokeee