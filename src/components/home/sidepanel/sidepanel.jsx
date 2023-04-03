// import { useState } from "react";
import style from "./sidepanel.module.css"



const Sidepanel = function(){


    return(
        <>
      <div className={style.sidepanel}>
            
            <div className={style.white_line}></div>
            <div className={style.changediv}>
                    
                    <h1 className={style.home_h2} >HOME</h1>
        
                    <h2 className={style.skill_h2} >SKILLS</h2>
                    <h2 className={style.works_h2} >WORKS</h2>
                    <h2 className={style.about_h2} >ABOUT</h2>
                </div>

      

        </div>  

          
      
        

        </>
    );
}

export default Sidepanel;