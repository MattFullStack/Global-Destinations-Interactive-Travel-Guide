import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px] px-24">
      <div className="get-app rounded-3xl">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
        <h1 className="absolute top-24 font-bold text-gray-200"
              style={{ fontSize: '2.80rem', lineHeight: '1.2' }}>Your Eco-Conscious <br /> Travel Companion</h1>
          <p className="text-md text-gray-10 pt-28 pr-14">Download the EcoPath app and start your <br /> sustainable travel story<br />
<span className='font-bold'>Available on iOS and Android</span></p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row pt-5">
            <Button 
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button 
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/iphone1.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  )
}

export default GetApp