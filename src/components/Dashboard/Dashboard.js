import React, { Component } from 'react'
import {firebaseDB,firebaseLooper} from '../../firebase'
import Table from './table'
class Dashboard extends Component {

   state ={
     data:[]
   }
    
   componentDidMount() 
    {
        firebaseDB.ref().once('value')
        .then((snapshot)=>{
            const data= firebaseLooper(snapshot);
            this.setState({
                data
            })
            

        })
        .catch((e)=>{
            console.log(e)
        })
    }

    render() {
    return (
        <div >
         
        <Table {...this.state.data}/>
        </div>
    )
    }
}
export default Dashboard