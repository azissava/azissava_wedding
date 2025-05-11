import Countdown from "@/components/Countdown/Countdown"
import Link from "next/link"
import Music from "@/components/music/music"
import FadeContent from "@/components/FadeContent/FadeContent"
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent"

const undangan = () => {
  return (
    <>
      <div className="md:px-96">
        <Music></Music>
      </div>

      <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
        <div className='md:px-96'>
          <img src="images/1.png" alt="" />
        </div>

        <div className="-mt-16 justify-center flex md:px-96">
          <img src="images/bismillah.png" alt="" />
        </div>
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <div className="px-10 -mt-5 md:px-96">
            <p className="text-center">Assalamu’alaikum Warahmatullahi Wabarakatuh, Dengan memohon rahmat dan ridho Allah SWT, Kami Mengundang Bapak/Ibu/Saudara/i, untuk menghadiri acara pernikahan kami.</p>
          </div>
        </AnimatedContent>


        <div className='relative md:px-96'>
          <img src="images/2.png" alt="" className='relative' />
          <FadeContent>
            <div className="absolute inset-0 md:px-96 mt-96 px-10">
              <h1 className="font-bold text-4xl md:text-3xl md:-mt-40 md:text-center">ABDUL AZIS</h1>
              <p className="md:text-center">Bp Juwari Ibu Jumiah</p>
              <p className="md:text-center">Gamping Rt 10/Rw 03 Sidokumpul – Patean</p>
            </div>
          </FadeContent>
        </div>

        <div className='relative md:px-96'>
          <img src="images/3.png" alt="" />
          <FadeContent>
            <div className="absolute inset-0 md:px-96 mt-96 px-10">
              <h1 className="font-bold text-4xl md:text-3xl md:-mt-40 md:text-center">SAVA NUR AVIVA</h1>
              <p className="md:text-center">Bp Nur Wahono Ibu Karsini</p>
              <p className="md:text-center">Gamping Rt 10/Rw 03 Sidokumpul – Patean</p>
            </div>
          </FadeContent>
        </div>

        <FadeContent>
          <div className="flex justify-center mt-2">
            <img src="images/akad.png" className="w-80 h-auto" alt="" />
          </div>
        </FadeContent>

        <FadeContent>
          <div className=" px-10 md:px-96 mt-3">
            <p className="text-center mt-2">Sabtu Paing 14 Juni 2025</p>
            <p className="text-center mt-1"> Pukul 08.00</p>
            <p className="text-center mt-1"> 📍
              <br />Gamping Rt 10/Rw 03
              <br />Sidokumpul – Patean
            </p>
            <div className="flex justify-center mt-3">
              <a href="https://www.google.com/maps/place/7%C2%B004'48.5%22S+110%C2%B006'37.4%22E/@-7.0801358,110.1078148,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-7.0801358!4d110.1103897?hl=id&entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D"
                className="bg-blue-600 p-2 rounded-xl hover:bg-blue-500">Lihat lokasi</a>
            </div>
            <hr className="mt-3" />
            <div className="mt-3">
              <Countdown></Countdown>
            </div>
          </div>
        </FadeContent>


        <FadeContent>
          <div className="flex justify-center mt-5">
            <img src="images/wayang.png" className="w-52 h-auto" alt="" />
          </div>

          <div className="px-10 md:px-96 ">
            <div className="flex justify-center">
              <h1 className="font-medium text-6xl font-upakarti">Our Gallery</h1>
            </div>
            <div className="text-center">
              <p>“Loved you yesterday, love you still,always have, always will.”</p>
            </div>
            <div className=" mt-2 ">
              {/* Foto */}
              <div className="border rounded-xl">
                <div className="columns-2 sm:columns-3 md:columns-4 gap-4 p-5">
                  <img src="images/1 (1).jpeg" alt="" className="mb-4 rounded-md break-inside-avoid transition-transform hover:scale-105 duration-300" />
                  <img src="images/1 (2).jpeg" alt="" className="mb-4 rounded-md break-inside-avoid transition-transform hover:scale-105 duration-300" />
                  <img src="images/1 (3).jpeg" alt="" className="mb-4 rounded-md break-inside-avoid transition-transform hover:scale-105 duration-300" />
                  <img src="images/1 (4).jpeg" alt="" className="mb-4 rounded-md break-inside-avoid transition-transform hover:scale-105 duration-300" />
                  <img src="images/1 (6).jpeg" alt="" className="mb-4 rounded-md break-inside-avoid transition-transform hover:scale-105 duration-300" />
                  <img src="images/1 (7).jpeg" alt="" className="mb-4 rounded-md break-inside-avoid transition-transform hover:scale-105 duration-300" />
                  <img src="images/1 (9).jpeg" alt="" className="mb-4 rounded-md break-inside-avoid transition-transform hover:scale-105 duration-300" />
                  <img src="images/1 (10).jpeg" alt="" className="mb-4 rounded-md break-inside-avoid transition-transform hover:scale-105 duration-300" />
                </div>
              </div>
            </div>
          </div>
        </FadeContent>

        <FadeContent>
          <div className="flex justify-center mt-5">
            <img src="images/pagar.png" className="w-96 h-auto" alt="" />
          </div>

          <h1 className="text-center font-bold text-4xl">Wedding Gift</h1>
          <div className="px-10 md:px-96 mt-2">
            <div className="border rounded-xl">
              <div className="p-3">
                <p className="text-center">Doa restu anda merupakan karunia yang sangat berarti bagi kami, dan jika memberi adalah ungkapan tanda kasih anda, anda dapat memberi kado secara cashless.</p>
              </div>
              <div className="p-5">
                {/* rek 1 */}
                <div className="bg-neutral-200 rounded-lg flex items-center px-3">
                  <div className="p-2">
                    <img src="images/mandiri.png" className="w-32 -mt-5" alt="" />
                    <h1 className="font-bold -mt-4 text-blue-950">SAVA NUR AVIVA</h1>
                    <p className="text-blue-950 mb-3">1360019405320</p>
                  </div>
                  <div className="p-2">
                    <img src="images/gift.png" className="w-14 h-auto ml-5" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeContent>

        <FadeContent>
          <div className="flex justify-center mt-5">
            <img src="images/pagar.png" className="w-96 h-auto" alt="" />
          </div>
        </FadeContent>


        <FadeContent>
          <div className="px-10 md:px-96">
            <img src="images/lastcard.png" alt="" />
            <div className="text-center">
              <h1 className="text-5xl font-bold">Terimakasih</h1>
              <p>Wassalamualaikum Wr. Wb</p>
              <h1 className="text-2xl font-medium">Kami yang berbahagia</h1>
              <h1 className="text-2xl font-medium">Sava Nur Aviva</h1>
              <h1 className="text-2xl font-medium">Abdul Azis</h1>
            </div>
          </div>
        </FadeContent>

        <div className="flex justify-center mt-5">
          <img src="images/pagarbunga.png" className="w-96 h-auto" alt="" />
        </div>
        <div className="md:px-96">
          <div className="bg-amber-900 py-5">
            <div className="px-10 text-center">
              <h1>Designed by Vistar Studio</h1>
              <a href="https://wa.me/6285225576590?text=Halo" className="underline">Order</a>
            </div>
          </div>
        </div>
      </FadeContent>
    </>
  )
}

export default undangan;