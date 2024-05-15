import {FC} from 'react';
import Image from 'next/image';
import Button from '@/components/atoms/Button';

interface BannerPropType {
    // text: string
}

const Banner: FC <BannerPropType> = (props) => {
    // const { text } = props
    return(
        <div className='h-[735px] flex flex-col items-center gap-8 justify-center w-screen'>
            <Image src='/barat.jpg' alt='banner-image' fill className='z-[-1]' />
            <div className='flex flex-row'>
            <Button text='Jelajah' className='w-[528px] h-[692px]' type='primary' onClick={() => console.log('yuhuu on click button jelajah')} />
          </div>
        </div>
    )
}
export default Banner