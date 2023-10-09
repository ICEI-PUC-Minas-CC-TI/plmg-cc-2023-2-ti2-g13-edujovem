import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='relative flex flex-wrap justify-center w-full h-full px-20 py-[100px] gap-y-10 bg-[#000000]'>
            <div className='relative flex-col text-center items-center border-x-2 border-white w-1/3 min-w-[350px] shadow-md px-8 py-5 grow-0 text-white'>
                <h2 className='text-md/[1.2] laptop:text-sspct/[1] pb-5 font-extrabold'>Sobre nós</h2>
                <p>Somos uma equipe de desenvolvedores composta por 4 pessoas. Todos cientistas da computação ingressados no segundo período do curso </p>
            </div>
            <div className='relative flex-col text-center items-center border-white w-1/3 min-w-[350px] shadow-md px-8 py-5 grow-0 text-white'>
                <h2 className='text-md/[1.2] laptop:text-sspct/[1] pb-5 font-extrabold'>Contato</h2>
                <p>EducaJovem.curso@gmail.com</p>
            </div>
            <div className='relative flex-col text-center items-center border-x-2 border-white w-1/3 min-w-[350px] shadow-md px-8 py-5 grow-0 text-white'>
                <h2 className='text-md/[1.2] laptop:text-sspct/[1] pb-5 font-extrabold'>Propriedade Intelectual</h2>
                <p>@exermplo-propriedade1
                @exermplo-propriedade1
                @exermplo-propriedade1
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer