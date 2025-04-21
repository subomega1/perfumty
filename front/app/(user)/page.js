"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import HeroSection from "@/components/sections/home/HeroSection";
import BestSellersSection from '@/components/sections/home/BestSellersSection';
import { bestSellers } from '../../constants/bestSellers';
export default function Home() {

  return (
    <div className="bg-cosmic-latte flex flex-row justify-center w-full dark:bg-gray-900">
      <Head>
        <title>Customize Your Perfume | Perfumty</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      

      <div className="bg-cosmic-latte w-full h-[3473px] relative dark:bg-gray-900">
        {/* Nav Bar */}
        <div className="absolute w-full h-[94px] top-0 left-0 bg-story-coral dark:bg-gray-800">
          <div className="absolute w-[1153px] h-[36px] top-[29px] left-[214px]">
            <div className="absolute w-[122px] h-[24px] top-[4px] left-[1025px] flex gap-6">
              <Image src="/images/person.svg" alt="Person" width={24} height={24} />
              <Link href="/cart">
                <Image src="/images/basket.svg" alt="Basket" width={24} height={24} />
              </Link>
              <div className="relative w-[24px] h-[24px]">
                <Image src="/images/union.svg" alt="Search" width={19} height={19} className="absolute top-[2px] left-[2px]" />
              </div>
            </div>
            <div className="absolute w-[74px] h-[32px] top-[4px] left-[359px]">
              <Link href="/" className="absolute top-0 left-4 font-abeezee text-[17px] text-customizing-black dark:text-gray-200">Home</Link>
              <div className="absolute w-[72px] h-[2px] top-[30px] left-0 bg-customizing-black dark:bg-gray-200"></div>
            </div>
            <Link href="/story" className="absolute top-0 left-[477px] font-abeezee text-[17px] text-[#393939] dark:text-gray-300">Story</Link>
            <Link href="/collection" className="absolute top-0 left-[551px] font-abeezee text-[17px] text-[#393939] dark:text-gray-300">Our Collection</Link>
            <Link href="/customizing" className="absolute top-0 left-[716px] font-abeezee text-[17px] text-[#393939] dark:text-gray-300">Customizing</Link>
          </div>
          <div className="absolute w-[183px] h-[54px] top-[9px] left-[152px]">
            <div className="relative w-[179px] h-[54px]">
              <div className="absolute w-[37px] top-[5px] left-[4px] [transform:rotate(16.71deg)] font-inter text-[36px] text-customizing-black dark:text-gray-200">🌸</div>
              <div className="absolute top-[19px] left-[30px] font-mochiy text-[24px] text-customizing-black tracking-[2.4px] dark:text-gray-200">Perfumty</div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="absolute w-[1335px] h-[973px] top-[160px] left-[105px]">
          <h1 className="absolute w-[586px] top-[94px] left-[5px] font-afacad text-[108.5px] leading-[125.1px] text-customizing-black dark:text-gray-200">
            Perfume <span className="text-[72.3px] leading-[83.4px]">Customize your own</span>
          </h1>
          <div className="absolute w-[1335px] h-[973px] top-0 left-0">
            <p className="absolute w-[660px] top-[364px] left-0 font-josefin font-semibold text-[26px] leading-[28px] text-dim-gray dark:text-gray-300">
              Design a fragrance that is uniquely yours! Choose from a variety of top, middle, and base notes to create a scent that matches your style. Customize the intensity, bottle size, and even add a personal touch with engraving. Whether you love fresh citrus, warm woods, or sweet florals, craft the perfect perfume that’s made just for you!
            </p>
            <Image
              src="/images/rose.png"
              alt="Rose"
              width={800}
              height={600}
              className="absolute max-w-[800px] h-auto top-[150px] left-[591px] ml-[250px] object-cover"
            />
            <div className="absolute w-[81px] h-[218px] top-[308px] left-[698px] rounded-[50px] border-2 border-customizing-gray">
              <div className="relative w-[73px] h-[196px] top-[9px] left-[2px]">
                <div className="relative h-[196px]">
                  <Image src="/images/variant-20.png" alt="Watercolor Flower" width={70} height={70} className="absolute top-0 left-[3px] object-cover" />
                  <Image src="/images/variant-61.png" alt="Watercolor Flower" width={70} height={70} className="absolute top-[28px] left-[3px] object-cover" />
                  <Image src="/images/variant-1.png" alt="Watercolor Flower" width={70} height={70} className="absolute top-[63px] left-[3px] object-cover" />
                  <Image src="/images/variant-10.png" alt="Watercolor Flower" width={70} height={70} className="absolute top-[97px] left-0 object-cover" />
                  <Image src="/images/variant-138.png" alt="Watercolor Flower" width={70} height={70} className="absolute top-[126px] left-0 object-cover" />
                </div>
              </div>
            </div>
            <Image src="/images/vector.svg" alt="Vector" width={100} height={175} className="absolute top-[127px] left-[592px]" />
            <div className="absolute top-[550px] left-[651px] font-josefin font-semibold text-[20px] text-customizing-black dark:text-gray-200">Flower complexions</div>
            <p className="absolute top-[752px] left-[180px] font-afacad text-[32px] text-center tracking-[2px] text-customizing-black dark:text-gray-200">
              FIND YOUR SIGNATURE SCENT – TAKE OUR PERSONALITY QUIZ!
            </p>
            <p className="absolute w-[576px] top-[886px] left-[298px] font-afacad text-[24px] text-center tracking-[2px] text-dim-gray dark:text-gray-300">
              DISCOVER YOUR PERFECT FRAGRANCE<br />BASED ON YOUR PERSONALITY AND PREFERENCES
            </p>
          </div>
        </div>

        <Image src="/images/group-26.png" alt="Decoration" width={194} height={79} className="absolute top-[1135px] left-[589px]" />

        {/* Quiz and Customize Buttons */}
        <Link href="/quiz" className="absolute w-[237px] h-[58px] top-[1230px] left-[773px] bg-story-coral rounded-[20px] hover:bg-customizing-hover group">
          <div className="absolute top-[7px] left-[10px] font-afacad text-[16px] text-center tracking-[2px] text-customizing-black group-hover:text-white dark:text-gray-200 dark:group-hover:text-gray-900">TAKE PERSONALITY-SCENT<br />QUIZ!</div>
        </Link>
        <div className="absolute w-[237px] h-[58px] top-[1230px] left-[352px] bg-story-coral rounded-[20px] hover:bg-customizing-hover group">
          <div className="absolute top-[14px] left-[13px] font-afacad text-[20px] tracking-[2px] text-customizing-black group-hover:text-white dark:text-gray-200 dark:group-hover:text-gray-900">START CUSTOMIZING!</div>
        </div>

        {/* Best Sellers */}
        <p className="absolute w-[1342px] top-[1448px] left-[36px] font-afacad text-[40px] text-center tracking-[2px] text-customizing-black dark:text-gray-200">
          DISCOVER OUR MOST-LOVED SCENTS, CRAFTED TO PERFECTION
        </p>
        <Image src="/images/line-11.svg" alt="Line" width={930} height={3} className="absolute top-[1566px] left-[231px]" />
        <div className="absolute w-[1315px] h-[1188px] top-[1634px] left-[71px]">
          <div className="absolute w-[270px] h-[48px] top-0 left-[23px]">
            <div className="absolute top-0 left-[22px] font-playfair font-semibold text-[40px] text-customizing-black dark:text-gray-200">Best Sellers</div>
            <Image src="/images/line-7.svg" alt="Line" width={270} height={3} className="absolute top-[45px] left-0" />
          </div>
          {bestSellers.map((perfume, index) => (
            <div key={index} className={`absolute ${index === 0 ? 'top-[105px] left-[45px]' : index === 1 ? 'top-[777px] left-[45px]' : index === 2 ? 'top-[777px] left-[729px]' : 'top-[112px] left-[729px]'}`}>
              <div className="text-[40px] font-jakarta text-customizing-dark dark:text-gray-200">{perfume.name}</div>
              <p className={`absolute ${index === 0 ? 'top-[138px]' : index === 1 ? 'top-[282px]' : index === 2 ? 'top-[123px]' : 'top-[89px]'} left-0 w-[403px] font-jakarta text-[24px] leading-[36px] text-dim-gray dark:text-gray-300`}>
                Top Notes: {perfume.topNotes.join(', ')}<br />
                Middle Notes: {perfume.middleNotes.join(', ')}<br />
                Base Notes: {perfume.baseNotes.join(', ')}
              </p>
              <Image
                src={perfume.image}
                alt={perfume.name}
                width={index === 2 ? 174 : 92}
                height={index === 2 ? 246 : 253}
                className={`absolute ${index === 0 ? 'top-[66px] left-[446px]' : index === 1 ? 'top-[750px] left-[417px]' : index === 2 ? 'top-0 left-[394px]' : 'top-[66px] left-[1169px]'}`}
              />
              <div className={`absolute ${index === 0 ? 'top-[484px] left-[218px]' : index === 1 ? 'top-[906px] left-[218px]' : index === 2 ? 'top-[361px] left-[217px]' : 'top-[484px] left-[957px]'} w-[165px] h-[44px] bg-story-coral rounded-[20px] hover:bg-customizing-hover group`}>
                <div className="absolute top-[10px] left-[33px] font-afacad text-[18px] text-center tracking-[2px] text-customizing-black group-hover:text-white dark:text-gray-200 dark:group-hover:text-gray-900">SHOP NOW</div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="absolute w-full h-[382px] top-[3091px] left-0 bg-cosmic-latte dark:bg-gray-800">
          <div className="absolute w-[183px] h-[54px] top-[69px] left-[599px]">
            <div className="relative w-[179px] h-[54px]">
              <div className="absolute w-[37px] top-[5px] left-[4px] [transform:rotate(16.71deg)] font-inter text-[36px] text-customizing-black dark:text-gray-200">🌸</div>
              <div className="absolute top-[19px] left-[30px] font-mochiy text-[24px] text-customizing-black tracking-[2.4px] dark:text-gray-200">Perfumty</div>
            </div>
          </div>
          <div className="absolute w-[493px] top-[170px] left-[447px] flex gap-8">
            {['Link One', 'Link Two', 'Link Three', 'Link Four', 'Link Five'].map((link, index) => (
              <div key={index} className="font-abeezee text-[16px] text-customizing-black dark:text-gray-200">{link}</div>
            ))}
          </div>
          <div className="absolute w-[1312px] top-[228px] left-[64px] flex flex-col gap-8">
            <Image src="/images/divider.svg" alt="Divider" width={1312} height={1} className="w-full" />
            <div className="flex justify-between">
              <div className="font-abeezee text-[14px] text-customizing-black dark:text-gray-200">© 2024 Relume. All rights reserved.</div>
              <div className="flex gap-6">
                {['Privacy Policy', 'Terms of Service', 'Cookies Settings'].map((link, index) => (
                  <div key={index} className="font-abeezee text-[14px] underline text-customizing-black dark:text-gray-200">{link}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}