import React from 'react';
import infoBg from '../../assets/infoBg.mp4';
import InfoCard from '../../components/Infocard';

const Informational = () => {
  return (
    <div className='relative text-black'>
      
      <div className='relative flex flex-wrap w-full  overflow-hidden'>
        <div className='relative flex justify-center items-center h-1/2 w-full desktop:w-1/2 desktop:h-[70vh] laptop:w-1/2 laptop:h-[70vh] '>
          <iframe className='w-[100vw] h-[70vh] rounded-lg' src="https://lottie.host/?file=d2d31dbc-bb52-4ed0-9449-7fb469e3aee4/ka09hX9Knb.json"></iframe>
        </div>
        <div className='relative flex justify-center items-center h-1/2 w-full desktop:w-1/2 desktop:h-[70vh] laptop:w-1/2 laptop:h-[70vh] '>
          <div className='relative w-auto truncate max-w-[75%] grid grid-cols-1 laptop:place-items-start laptop:text-start text-center gap-y-4'>
            <h1 className='text-2xl/[1.2] laptop:text-spct/[1] font-extrabold w-auto whitespace-normal truncate'>
              Por que estudar educação financeira?
            </h1>
            <h3 className='text-lg laptop:text-sspct/[1] font-normal w-auto whitespace-normal truncate'>
              e por que tão cedo?
            </h3>
          </div>
        </div> 
      </div>
      <div className='relative'>
        <video autoPlay muted loop src={infoBg} className='object-cover w-full h-full absolute inset-0 z-0'></video>
        <div className='relative flex flex-wrap justify-center w-full h-full px-20 py-[150px] gap-x-10 gap-y-10 bg-gradient-to-b from-[#FFFFFF] from-30% to-transparent'>
          <InfoCard title='Comportamento inteligente'>
            Deve-se aprender Educação Financeira o mais cedo possível para que o cidadão incorpore à sua vida hábitos saudáveis, leavando à estabilidade e ao equilíbrio financeiro. 
          </InfoCard>
          <InfoCard title='Prevenção'>
            Deve-se aprender Educação Financeira o mais cedo possível para que o cidadão planeje o futuro com segurança considerando sua renda e capacidade financeira.
          </InfoCard>
          <InfoCard title='Consumo consciente'>
            Para ser melhor cidadão, com melhor consciência econômica, social, política e ambiental. No modo de produção capitalista o consumo é uma variável mestra para entender e mudar a sociedade.
          </InfoCard>
        </div>
      </div>
    </div>
  )
}

export default Informational