import React, { Component } from 'react';
import './layout.module.css'
import Header from '../../components/header/header';

class Layout extends Component {
   
    state = {
      showNav:false  
      
    }

    toggleSidenav = (action) =>{
        this.setState({
            showNav:action
        })
    }
 
    render(){
        return(
            <div>
                
                <Header 
                    user={this.props.user}
                    showNav={this.state.showNav}
                    onHideNav={() => this.toggleSidenav(false)}
                    onOpenNav={() => this.toggleSidenav(true)}
                />
                {this.props.children}
                
                
            </div>
        )
    }

}


export default Layout;