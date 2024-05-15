"use client"

import Image from "next/image";
import Banner from "@/components/molekuls/Banner";
import Category from "@/components/atoms/Category";
import { categoryData } from "@/utils/staticVariabels";
import Section from "@/components/molekuls/Section";
import TopNav from "@/components/molekuls/TopNav";
import Card from "@/components/atoms/Card";


export default function Home() {
  const mocakDataBeritaAktual = [
    {
      src: '/card-1.png',
      alt: 'card-1',
      date: '12 Februari 2023',
      title: 'Lorem Ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non convallis ex, semper sodales turpis. Maecenas eu turpis volutpat, venenatis ipsum id.',
    },
    {
      src: '/card-2.png',
      alt: 'card-2',
      date: '12 Februari 2023',
      title: 'Lorem Ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non convallis ex, semper sodales turpis. Maecenas eu turpis volutpat, venenatis ipsum id.', 
    },
    {
      src: '/card-3.png',
      alt: 'card-3',
      date: '12 Februari 2023',
      title: 'Lorem Ipsum',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non convallis ex, semper sodales turpis. Maecenas eu turpis volutpat, venenatis ipsum id.',
    },
  ]

  const mocakDataWisataAlam = [
    {
      src: '/card-4.png',
      alt: 'card-4',
      date: '12 Februari 2023',
      title: 'Pantai',
      text: 'Pantai Mekati terletak di ujung selatan barat pulau kecil lombok'
    },
    {
      src: '/card-5.png',
      alt: 'card-5',
      date: '12 Februari 2023',
      title: 'Park',
      text: 'Taman Narmada terletak di Desa Lembuak, Kecamatan Narmada, Kabupaten Lombok Barat'
    },
    {
      src: '/card-6.png',
      alt: 'card-6',
      date: '12 Februari 2023',
      title: 'Wisata Alam',
      text: 'Ialah salah satu wisata alam yang menyuguhkan pemandian umum yang bernuansa hujan wisata'
    },
    ]

  return (
    <main className="flex min-h-screen flex-col w-screen items-center justify-start gap-20 px-20 pb-20">
      <TopNav/>
        <Banner />
        <div className="p-20 flex flex-row justify-between w-full">
        {
        categoryData.length > 0 &&
        categoryData.map((item, index) => {
          return (
            <div key={index}>
            <Category imgUrl={item.img} imgAlt="category-image" text={item.label} onClick={() => console.log('yuhuu on click category')}/>
            </div>
          )
        })
      }
        </div>
        <Section 
        name="Berita Aktual"
        title="Pusat Media Pemerintah Kabupaten Lombok Barat"
        onClickSeeAll={() => console.log('on click see all')}
        withSeeAll
        >
          {
            mocakDataBeritaAktual.length > 0 && mocakDataBeritaAktual.map((item, index) => {
              return (
                <div key={index}>
                  <Card
                    imgUrl={item.src}
                    imgAlt={item.alt}
                    dateText={item.date}
                    title={item.title}
                    text={item.text}
                    onClickSeeMore={() => console.log('fazri ganteng on click category')}
                    type='primary'
                  />
                </div>
              )
          })
        }
        </Section>
        <Section 
        name="Wisata Alam"
        title="Wisata Lombok Barat"
        withSeeAll={false}
        >
          {
          mocakDataWisataAlam.length > 0 && mocakDataWisataAlam.map((item, index) => {
            return (
              <div key={index}>
                <Card
                  imgUrl={item.src}
                  imgAlt={item.alt}
                  title={item.title}
                  text={item.text}
                  onClickSeeMore={() => console.log('asiiikk jalan euyy on click category')}
                  type="secondary"
                />
              </div>
            )
          })
        }
        </Section>
    </main>
      );
    }

    //nah seperti yang tadi diketik, "first commit ini bisa diganti apa aja"
    //Nah itu sudah ke push, pasti kamu bingung kenapa ada branch dan push nya ada -u origin main nya, nanti next time kita bahas
    //sekarang mari kita lihat apa sudah keunggah di github
