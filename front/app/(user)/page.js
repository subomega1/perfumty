"use client";
import React from 'react'
import { motion } from "framer-motion";

import Link from 'next/link'
const text1 = "Perfume";
const text2 = "Customize your own";

const letterAnimation = {
  hidden: { opacity: 0, y: -50 }, // drop from top
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // slower animation (0.1s between letters)
      duration: 0.5, // smooth drop
    },
  }),
};
const page = () => {
  return (
  
    <div className="bg-[#f8f4e3] flex flex-row justify-center w-full">
      <div className="bg-[#f8f4e3] overflow-hidden w-[1440px] h-[2590px]">
        <div className="relative w-[1808px] h-[2864px] left-[-50px]">
          <div className="relative w-[1708px] h-[2864px]">
            <div className="absolute w-[1708px] h-[2864px] top-0 left-0">
              <div className="absolute w-[1708px] h-[874px] top-0 left-0">   
                <div className="absolute w-[1418px] h-[678px] top-[140px] left-[72px]">
                  <div className="absolute w-[1391px] h-[678px] top-0 left-[27px]">
                    <div className="absolute top-[539px] left-[664px] [font-family:'Josefin_Slab-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal]">
                      Flower complexions
                    </div>

                    <div className="absolute w-[73px] h-[196px] top-[307px] left-[718px]">
                      <div className="relative h-[196px]">
                        <img
                          className="!h-[70px] !absolute !left-[3px] !w-[70px]  !top-0"
                          src="https://c.animaapp.com/89QQPZoh/img/variant-20-1@2x.png"
                          alt="twenty"
                        />
                        <img
                          className="absolute w-[70px] h-[70px] top-7 left-[3px] object-cover"
                          alt="Variant"
                          src="https://c.animaapp.com/89QQPZoh/img/variant-61@2x.png"
                        />

                        <img
                          className="absolute w-[70px] h-[70px] top-[63px] left-[3px] object-cover"
                          alt="Variant"
                          src="https://c.animaapp.com/89QQPZoh/img/variant-1@2x.png"
                        />

                        <img
                          className="absolute w-[70px] h-[70px] top-[97px] left-0 object-cover"
                          alt="Variant"
                          src="https://c.animaapp.com/89QQPZoh/img/variant-10@2x.png"
                        />

                        <img
                          className="absolute w-[70px] h-[70px] top-[130px] left-[3px] object-cover"
                          alt="variant"
                          src="https://c.animaapp.com/89QQPZoh/img/variant-138-1@2x.png"
                        />
                      </div>
                    </div>

                    <div className="absolute w-[81px] h-[218px] top-[295px] left-[715px] rounded-[50px] border-2 border-solid border-[#797979]" />

                    <img
                      className="absolute w-[100px] h-[152px] top-[202px] left-[599px]"
                      alt="Vector"
                      src="https://c.animaapp.com/89QQPZoh/img/vector.svg"
                    />

                    

                    <p className="absolute top-[625px] left-[21px] [font-family:'Afacad-Regular',Helvetica] font-normal text-black text-[32px] text-center tracking-[2.00px] leading-[normal]">
                      FIND YOUR SIGNATURE SCENT – TAKE OUR PERSONALITY QUIZ!
                    </p>

                    <img
                      className="absolute w-[778px] h-[658px] top-0 left-[613px] object-cover"
                      alt="Lllllll removebg"
                      src="https://c.animaapp.com/89QQPZoh/img/lllllll-removebg-preview-1.png"
                    />
                  </div>

                  <div className="absolute w-[588px] h-[200px] top-[50px] left-0">
                  <p className="absolute w-[681px] top-[310px] left-0 [font-family:'Josefin_Slab-SemiBold',Helvetica]  text-[#706c61] text-[26px] tracking-[0] leading-7">
                      Design a fragrance that is uniquely yours! Choose from a
                      variety of top, middle, and base notes to create a scent
                      that matches your style. Customize the intensity, bottle
                      size, and even add a personal touch with engraving.
                      Whether you love fresh citrus, warm woods, or sweet
                      florals, craft the perfect perfume that’s made just for
                      you!
                    </p>
                    <div className="absolute w-[586px] top-6 left-0">
      {/* Perfume */}
      <div className="[font-family:'Afacad-Regular',Helvetica] font-normal text-[#1c1c1c] text-[108.5px] tracking-[0] leading-[125.1px] flex flex-wrap">
        {text1.split("").map((letter, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterAnimation}
            initial="hidden"
            animate="visible"
          >
            {letter === " " ? "\u00A0" : letter} {/* keeps spaces */}
          </motion.span>
        ))}
      </div>

      {/* Customize your own */}
      <div className="text-[60px] leading-[83.4px] flex flex-wrap">
        {text2.split("").map((letter, index) => (
          <motion.span
            key={index}
            custom={index + text1.length} // continue the delay from first text
            variants={letterAnimation}
            initial="hidden"
            animate="visible"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>
    </div>
                  </div>
                </div>
              </div>

              <p className="absolute w-[1342px] top-[1089px] left-[55px] [font-family:'Afacad-Regular',Helvetica] font-normal text-black text-[40px] text-center tracking-[2.00px] leading-[normal]">
                DISCOVER OUR MOST-LOVED SCENTS, CRAFTED TO PERFECTION
              </p>

              <div className="absolute w-[1463px] h-[1594px] top-[1270px] left-[7px]">
                <div className="h-[1594px]">
                  <div className="w-[1471px] h-[1594px]">
                    <div className="relative w-[1463px] h-[1320px]">
                      <div className="absolute w-[1326px] h-[1320px] top-0 left-0">
                        <img
                          className="absolute w-0.5 h-[1320px] top-0 left-[718px]"
                          alt="Line"
                          src="https://c.animaapp.com/89QQPZoh/img/line-8.svg"
                        />

                        <img
                          className="absolute w-[1245px] h-0.5 top-[546px] left-[82px]"
                          alt="Line"
                          src="https://c.animaapp.com/89QQPZoh/img/line-9.svg"
                        />

                        <p className="absolute top-[1006px] left-0 [font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-9 whitespace-nowrap">
                          Vibe: Sensual, warm, and luxurious—ideal for evening
                          occasions.
                        </p>
                      </div>

                      <p className="absolute top-[347px] left-[34px] [font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-9 whitespace-nowrap">
                        Vibe: Fresh, floral, and elegant—perfect for daytime
                        wear.
                      </p>

                      <p className="absolute w-[712px] top-[1006px] left-[751px] [font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-9 whitespace-nowrap">
                        Vibe: Sensual, warm, and luxurious—ideal for evening
                        occasions.
                      </p>

                      <p className="absolute top-[347px] left-[751px] [font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-9 whitespace-nowrap">
                        Vibe: Cozy, sweet, and addictive—perfect for fall and
                        winter.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              

              <div className="absolute w-[1297px] h-[1188px] top-[1216px] left-[55px]">
                <div className="relative w-[1315px] h-[1188px]">
                  <img
                    className="absolute w-[92px] h-[253px] top-[66px] left-[446px]"
                    alt="Idolenectar"
                    src="https://c.animaapp.com/89QQPZoh/img/lu12733-idolenectar-50ml-1000x1000-removebg-preview-3@2x.png"
                  />

                  <img
                    className="absolute w-[92px] h-[253px] top-[66px] left-[1169px]"
                    alt="Chopard"
                    src="https://c.animaapp.com/89QQPZoh/img/chopard-perfume2-removebg-preview-1@2x.png"
                  />

                  <div className="absolute w-[270px] h-12 top-0 left-[23px]">
                    <div className="left-[22px] [font-family:'Playfair-SemiBold',Helvetica] font-semibold text-black whitespace-nowrap absolute top-0 text-[40px] tracking-[0] leading-[normal]">
                      Best Sellers
                    </div>

                    <img
                      className="absolute w-[270px] h-[3px] top-[45px] left-0"
                      alt="Line"
                      src="https://c.animaapp.com/89QQPZoh/img/line-7.svg"
                    />
                  </div>

                  <div className="absolute w-[262px] top-[105px] left-[45px] [font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-[#202020] text-[40px] tracking-[0] leading-[normal]">
                    Celestial Bloom
                  </div>

                  <div className="absolute w-[262px] top-[777px] left-[45px] [font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-[#202020] text-[40px] tracking-[0] leading-[normal]">
                    Velvet
                    <br />
                              
                    Noir
                  </div>

                  <div className="absolute w-[568px] h-[411px] top-[777px] left-[729px]">
                    <div className="absolute w-[262px] top-0 left-[38px] [font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-[#202020] text-[40px] tracking-[0] leading-[normal]">
                      Ocean Whisper
                    </div>

                    <div className="absolute w-[568px] h-[405px] top-1.5 left-0">
                      <p className="absolute w-[403px] top-[123px] left-0 [font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-[#706c61] text-2xl tracking-[0] leading-9">
                        Top Notes: Pear, Basil
                        <br />
                        Middle Notes: Lavender, Fig
                        <br />
                        Base Notes: Cedarwood, Vetiver
                      </p>

                      <div className="absolute w-[167px] h-11 top-[361px] left-[217px]">
                        <div className="relative w-[165px] h-11 bg-[#B9A3D1] rounded-[20px]">
                          <Link href="/collection">
                          <div className="absolute top-2.5 left-[33px] [font-family:'Afacad-Regular',Helvetica] font-normal text-[#1c1c1c] text-lg text-center tracking-[2.00px] leading-[normal]">
                            SHOP NOW
                          </div>
                          </Link>
                        </div>
                      </div>

                      <img
                        className="absolute w-[174px] h-[246px] top-0 left-[394px]"
                        alt="Img"
                        src="https://c.animaapp.com/89QQPZoh/img/334faec7293c0f76d4a4c65647050b04-removebg-preview-1@2x.png"
                      />
                    </div>
                  </div>

                  <div className="absolute w-[403px] h-[330px] top-28 left-[729px]">
                    <div className="w-[262px] left-[23px] [font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-[#202020] absolute top-0 text-[40px] tracking-[0] leading-[normal]">
                      Golden Dusk
                    </div>

                    <p className="top-[89px] absolute w-[403px] left-0 [font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-[#706c61] text-2xl tracking-[0] leading-9">
                      Top Notes: Grapefruit, Ginger
                      <br />
                      Middle Notes: Caramel, Blackcurrant
                      <br />
                      Base Notes: Coffee, Praline
                    </p>
                  </div>

                  <p className="top-[243px] absolute w-[403px] left-0 [font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-[#706c61] text-2xl tracking-[0] leading-9">
                    Top Notes: Bergamot, Green Tea
                    <br />
                    Middle Notes: Jasmine, Raspberry
                    <br />
                    Base Notes: Sandalwood, White Musk
                  </p>

                  <div className="absolute w-[403px] h-[282px] top-[906px] left-0">
                    <p className="absolute w-[403px] top-0 left-0 [font-family:'Plus_Jakarta_Sans-Regular',Helvetica] font-normal text-[#706c61] text-2xl tracking-[0] leading-9">
                      Top Notes: Pink Pepper, Cardamom
                      <br />
                      Middle Notes: Vanilla, Almond
                      <br />
                      Base Notes: Tonka Bean, Amber
                    </p>

                    <div className="absolute w-[167px] h-11 top-[238px] left-[218px]">
                      <div className="relative w-[165px] h-11 bg-[#B9A3D1] rounded-[20px]">
                        <Link
                        href="/collection">
                        <div className="absolute top-2.5 left-[33px] [font-family:'Afacad-Regular',Helvetica] font-normal text-[#1c1c1c] text-lg text-center tracking-[2.00px] leading-[normal]">
                          SHOP NOW
                        </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="absolute w-[167px] h-11 top-[484px] left-[218px]">
                    <div className="relative w-[165px] h-11 bg-[#B9A3D1] rounded-[20px]">
                      <Link
                      href="/collection">
                      <div className="absolute top-2.5 left-[33px] [font-family:'Afacad-Regular',Helvetica] font-normal text-[#1c1c1c] text-lg text-center tracking-[2.00px] leading-[normal]">
                        SHOP NOW
                      </div>
                      </Link>
                    </div>
                  </div>

                  <div className="absolute w-[167px] h-11 top-[484px] left-[957px]">
                    <div className="relative w-[165px] h-11 bg-[#B9A3D1] rounded-[20px]">
                    <Link
                      href="/collection">
                      <div className="absolute top-2.5 left-[33px] [font-family:'Afacad-Regular',Helvetica] font-normal text-[#1c1c1c] text-lg text-center tracking-[2.00px] leading-[normal]">
                        SHOP NOW
                      </div>
                      </Link>
                    </div>
                  </div>

                  <img
                    className="absolute w-[150px] h-[322px] top-[750px] left-[417px] object-cover"
                    alt="Element removebg"
                    src="https://c.animaapp.com/89QQPZoh/img/11617-removebg-preview-1@2x.png"
                  />
                </div>
              </div>

              <p className="absolute w-[576px] top-[820px] left-[253px] [font-family:'Afacad-Regular',Helvetica] font-normal text-[#706c61] text-2xl text-center tracking-[2.00px] leading-[normal]">
                DISCOVER YOUR PERFECT FRAGRANCE
                <br /> BASED ON YOUR PERSONALITY AND PREFERENCES
              </p>

              <img
                className="absolute w-[602px] h-[904px] top-[334px] left-[888px] mix-blend-color-dodge object-cover"
                alt="Element"
                src="https://c.animaapp.com/89QQPZoh/img/20240708-001128-2.png"
              />
            </div>

            <div className="absolute w-[430px] h-28 top-[916px] left-[408px]">
              <img
                className="absolute w-[194px] h-[69px] top-0 left-0"
                alt="Group"
                src="https://c.animaapp.com/89QQPZoh/img/group-25@2x.png"
              />

              <img
                className="absolute w-[237px] h-[58px] top-[54px] left-[193px]"
                alt="Bg"
                src="https://c.animaapp.com/89QQPZoh/img/bg.svg"
              />
              <Link
              href="/quiz">
              <button>
              <div className="absolute top-[67px] left-[220px] [font-family:'Afacad-Regular',Helvetica] font-normal text-[#1c1c1c] text-sm text-center tracking-[2.00px] leading-[normal]">
                PERSONALITY-SCENT
                <br />
                QUIZ!
              </div>
              </button>
              </Link>
            </div>
            <Link
            href='/survey' 
            >
            <button>
            <div className="absolute w-[259px] h-[58px] top-[970px] left-[137px] bg-[url(https://c.animaapp.com/89QQPZoh/img/bg-1.svg)] bg-[100%_100%]">
              <div className="absolute top-[20px] left-[27px] [font-family:'Afacad-Regular',Helvetica] font-normal text-black text-[15px] tracking-[2.00px] leading-[normal]">
                START CUSTOMIZING!
              </div>
            </div>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
