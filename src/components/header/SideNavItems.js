import React from 'react';

import {firebase} from '../../firebase'
import FontAwesome from 'react-fontawesome';
import style from './sidestyle.module.css'
import { Link, withRouter } from 'react-router-dom';

const SideNavItems = (props) => {
    
    const items = [
        {
            type: style.option,
            icon: 'home',
            text: 'Home',
            link: '/',
            login :''
        },
        {  
            type: style.option,
            icon : 'wpforms ',
            text : 'Dashboard',
            link : '/dashboard',
            login :'false'
            
        },
        {  
            type: style.option,
            icon : 'wpforms ',
            text : 'Registration',
            link : '/registration',
            login :'true'
            
        },
        {
            type: style.option,
            icon: 'sign-in',
            text: 'Sign in',
            link: '/sign-in',
            login :'true'
        },
        {
            type: style.option,
            icon: 'sign-out',
            text: 'Sign out',
            link: '/sign-out',
            login :'false'
        }
    ]
    const element = (item,i) => (
        <div key={i} className={item.type}>
            <Link to={item.link}>
                <FontAwesome name={item.icon}/>
                {item.text}
            </Link>
        </div>
    ) 


    const restricted = (item,i) => {
        
        let template = null;

        if( props.user === null && item.login ==='true' ){
             template= element(item,i)
        }

        if(props.user !== null && item.login === 'false'){
            if(item.link === '/sign-out'){
            template = (
                <div key={i} 
                    className={item.type}
                    onClick={()=>{
                        firebase.auth().signOut()
                        .then(()=>{
                            props.history.push("/")
                        })
                    }}
                    >
                    <FontAwesome name={item.icon}/>
                    {item.text}
                </div>
            )
                }
                else {
                    template = element(item,i)
                }
        
            
        }

        return template;
    }
   
    const showItems = () => {
       
        return items.map( (item,i) =>{
            
            return (
                 item.login !== '' ?
                restricted(item,i)
               :
                element(item,i)
            )
        } )
    }


    return(
           <div>
               {showItems()}
           </div> 
    )
}

export default withRouter(SideNavItems);