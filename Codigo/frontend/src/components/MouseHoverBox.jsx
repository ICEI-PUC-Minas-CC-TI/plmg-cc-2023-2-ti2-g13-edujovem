import React, { useState, useEffect } from "react";


export default function MouseHoverBox({ borderColor, children }) {
    const [rotation, setRotation] = useState(0);
    
    
    const handleMouseMove = (e) => {
        const clock = document.querySelector('.clock');
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 3;
  
        const mouseX = e.clientX - clock.getBoundingClientRect().left - centerX;
        const mouseY = e.clientY - clock.getBoundingClientRect().top - centerY;
  
        const angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
        setRotation(angle);
        
    };
    

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
    
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

  return (
    <div className={"clock z-10 relative bg-[#DDDDDD] overflow-hidden rounded-md flex justify-center items-center overflow-hidden rounded-md after:content=['*'] after:inset-[2px] after:absolute after:bg-[#ffffff] after:rounded-md"}onMouseMove={handleMouseMove} style={{
        width: `100%`,
        height: `100%`,
    }}>
        <div className="absolute rounded-md top-[50%] rounded-md origin-top" style={{ 
          transform: ` rotate(${rotation - 90}deg)`,
          backgroundColor: `${borderColor}` ,
          width: `70%`,
          height: `100vh`
        }}></div>
        <div className="absolute z-20 w-[99%] h-[99%] bg-[#ffffff] rounded-md text-black p-3 ">{children}</div>
    </div>
  )

  //#FF810B
}

