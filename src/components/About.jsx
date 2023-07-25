import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#daedc3] text-gray-400'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-orange-400'>
                            Hakkımızda
                        </p>
                    </div>
                    <div></div>
                </div>
                <div  className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>Dekar Energy ile tanışın.. </p>
                    </div>
                    <div>
                        <p>Takımımız, Hüseyin Demirci ve Dilara Karakaş olmak üzere iki kişiden oluşmakta. Kendi üretimimiz olan solar şarj edilebilir ve taşınabilir güç kaynakaları üretmekteyiz. Taşınabilir enerji kutuları birbirinden farklı kapasitesi ve özellikleriyle satışa sunulmuştur. Ürünlerimiz 1 yıl garantili,minimum 10 yıl pil kullanım süresine sahiptir.</p>
                    </div>
                </div>
        </div>
    </div>
    
   )
}

export default About

