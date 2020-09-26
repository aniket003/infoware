import React from 'react';
import style from './header.module.css'
import FontAwesome from 'react-fontawesome'
import SideNav from './SideNav'
const Header = (props) =>{

    const navbars=()=>(
      <div className={style.bars}>
       <FontAwesome name="bars"
        onClick={props.onOpenNav}
         style={{
             color:'#dfdfdf',
             padding:'10px',
             cursor:'pointer'
         }}
       />
      </div>
    )
    return(
        <header className={style.head}>
            <SideNav {...props}/>
           <div className={style.headd}>
               {navbars()}
               <div style={{
                    color:'white',
                    padding:'10px',
                    
                }}> 
                 Click on navbars 
               </div>

           </div>
        </header>
            
        
    )

}
export default Header;