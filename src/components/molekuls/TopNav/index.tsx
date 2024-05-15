import {FC} from 'react'
import Image from 'next/image'
import Button from '@/components/atoms/Button'

interface TopNavPropType {}

const TopNav: FC<TopNavPropType> = (props) => {
    const topNavData =[
    {name: 'Layanan publik'},
    {name: 'Data statistik'},
    {name: 'Galeri'},
    {name: 'Sekilas info'},
    {name: 'Pemerintah'} 
    ]
    return(
        <nav className='h-[87px] px-20 w-screen bg-white flex flex-row justify-between py-4 fixed'>
         <div className='flex flex-row gap-1 items-center w-[200px]'>
           <Image src='/logo.png' height={100} width={80} alt='logo'/>
           <div className='font-medium text-base'>
             PEMERINTAH LOMBOK BARAT
           </div>
         </div>
         <div className='flex flex-row gap-10'>
            {
                topNavData && topNavData.length > 0 ? topNavData.map((item, index) =>{
                return (
                    <button key={index}>
                       {item.name}
                    </button>
                    )
                }) : ''
            }
         </div>
         <Button type='secondary' className='w-[145px]' text='Pengaduan' onClick={() => console.log('on click')} />
        </nav>
    )
}

export default TopNav
