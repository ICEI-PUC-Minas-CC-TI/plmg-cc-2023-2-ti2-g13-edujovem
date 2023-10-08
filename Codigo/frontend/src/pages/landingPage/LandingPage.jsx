const Hero = () => {
    return (
      <section className='relative'>
        <video autoPlay muted loop src={bgVideo} className='object-cover w-full h-full absolute inset-0 z-0'></video>
        <Navbar/>
        <div className='relative w-full mx-auto px-10 pb-10 h-[700px] bg-black/80 text-white'>
          <div className='relative flex flex-wrap w-full h-[700px]'>
            <div className='relative flex justify-center items-center h-1/2 w-full desktop:w-1/2 desktop:h-[70vh] laptop:w-1/2 laptop:h-[70vh] '>
              <div className='relative w-auto truncate max-w-[75%] grid grid-cols-1 laptop:place-items-start laptop:text-start text-center gap-y-4'>
                <h1 className='text-lg/[1.2] laptop:text-spct/[1] font-extrabold w-auto whitespace-normal truncate'>
                  Educação financeira é para todos
                </h1>
                <h3 className='whitespace-normal font-normal'>
                  Aprender sobre finanças não precisa ser complicado
                  ou chato, em qualquer idade. Com o EduJovem, 
                  visamos capacitar o cidadão para o mercado financeiro,
                  preparando-o para conquistar seus sonhos em 
                  todas as escalas de tempo.
                </h3>
                <Button intent="emphasis1">Quero aprender</Button>
              </div>
            </div>
            <div className='relative h-1/2 w-full desktop:w-1/2 desktop:h-[70vh] laptop:w-1/2 laptop:h-[70vh]'>
              <Earth />
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Hero