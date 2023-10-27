import React from 'react';
import { NavLink } from "react-router-dom";
// COMPONENTS
import Button from "../../components/Button";
import MouseHoverBox from '../../components/MouseHoverBox';
// IMG
import Sair from '../../assets/sair.png';
import Conta from '../../assets/conta.png';
import Configuracoes from '../../assets/configuracoes.png';
import Calculadora from '../../assets/calculadora.png';
import CalcJuros from '../../assets/calcJuros.png';
// PAGES
import Caderninho from '../caderninho/Caderninho';
// HOOKS
import { useAuthContext } from '../../hooks/useAuthContext'

const Home = () => {
  const { logout, authenticated } = useAuthContext();

  const handleLogout = () => {
    logout();
  };
  
  //<div className=' shadow-lg bg-[#ffffff] from-[#cacaca] to-[#f0f0f0] rounded-md h-[60%]'>aaaaaa</div>

  return (
    <div className='
      w-[100vw] h-[100vh] bg-[#B4EFF7] flex inline-flex text-black justify-between gap-x-4 truncate text-black font-montserrat
   '>
      <section className='relative rounded-md shadow-lg bg-[#ffffff] from-10% from-[#cacaca] to-[#f0f0f0] h-[97vh] w-[20%] my-3 ml-3'>
        <MouseHoverBox borderColor={'#FF810B'}>
          <div className='relative w-full h-full flex flex-col items-center gap-y-2 px-1'>
            <div className='relative w-full h-[5%] border-b-2' >
              <h1 className='text-2xl font-bold'>Menu</h1>
            </div>
            <div className='relative w-full h-[75%] flex flex-col gap-y-2 pt-5'>
              <div className='
                bg-[#A2A2A2] shadow-md text-white font-bold hover:bg-[#D66F00] h-fit 
                flex inline-flex items-center uppercase tracking-normal transition-colors 
                duration-150 text-base px-4 w-full rounded-md'
                  
              >
                
                <div className='border-r-2 h-full py-2 pr-3'>
                  <img src={Calculadora} alt="calculadora" />
                </div>
                <h1 className='pl-3'>Calculadora normal</h1>
              </div>
              <div className='
                bg-[#A2A2A2] shadow-md text-white font-bold hover:bg-[#D66F00] h-fit 
                flex inline-flex items-center uppercase tracking-normal transition-colors 
                duration-150 text-base px-4 w-full rounded-md'
                  
              >
                
                <div className='border-r-2 h-full py-2 pr-3'>
                  <img src={CalcJuros} alt="calculadora juros" />
                </div>
                <h1 className='pl-3'>Calculadora de juros</h1>
              </div>
            </div>
            <div className='relative w-full h-[20%] rounded-md flex flex-col justify-end pb-1'>
              <div className='flex inline-flex items-center gap-x-4'>
                <div className='
                  bg-[#A2A2A2] text-white font-bold hover:bg-[#D66F00] h-[110%] 
                  flex justify-center items-center uppercase tracking-normal transition-colors 
                  duration-150 text-base py-2 px-4 w-[32%] rounded-md'
                  
                  onClick={handleLogout}>
                  <img src={Sair} alt="sair" />
                </div>
                
                <div className='
                  bg-[#A2A2A2] text-white font-bold hover:bg-[#D66F00] h-[110%] 
                  flex justify-center items-center uppercase tracking-normal transition-colors 
                  duration-150 text-base py-2 px-4 w-[32%] rounded-md'
                  
                >
                  <NavLink to="/profile" >
                  <img src={Conta} alt="conta" />
                  </NavLink>
                </div>
                <div className='
                  bg-[#A2A2A2] text-white font-bold hover:bg-[#D66F00] h-[110%] 
                  flex justify-center items-center uppercase tracking-normal transition-colors 
                  duration-150 text-base py-2 px-4 w-[32%] rounded-md'
                  
                >
                  <img src={Configuracoes} alt="configuracoes" />
                </div>
              </div>
            </div>
          </div>
        </MouseHoverBox>
      </section>
      <section className='relative rounded-md h-[97vh] w-[80%] my-3 mr-3 flex flex-col gap-y-4'>
        <section className=' shadow-lg bg-[#ffffff] from-[#cacaca] to-[#f0f0f0] rounded-md w-full h-[40%]'>
          <MouseHoverBox borderColor={'#FF810B'}>
            <div className='relative w-full h-full flex flex-col items-center gap-y-2 px-1 '>
              <div className='relative w-full h-[15%] border-b-2'>
                <h1 className='text-2xl font-bold'>Mundos</h1>
              </div>
              <div className='relative w-full h-[90%]'>
                
              </div>
            </div>
          </MouseHoverBox>
        </section>
        <section className='shadow-lg bg-[#ffffff] from-[#cacaca] to-[#f0f0f0] rounded-md h-[60%]'>
          <MouseHoverBox borderColor={'#FF810B'}>
            <Caderninho /> 
          </MouseHoverBox>
        </section>
         
      </section>
      
      
      
    </div>
  )
}
//#E4E4E4
export default Home