import React, { Component } from 'react';
import FormFields from '../FormFields/FormFields';
import { firebaseDB } from '../../firebase';
import styles from './registration.module.css'
import Uploader from '../fileuploader/fileuploader'
class Registration extends Component {

    state = {

        formData:{
            name:{
                element:'input',
                value:'',
                label:true,
                labelText:'First Name:',
                config:{
                    name:'name_input',
                    type:'text',
                    placeholder:'Enter your name'
                },
                validation:{
                    required:true,
                    minLen:5
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            lastname:{
                element:'input',
                value:'',
                label:true,
                labelText:'Lastname:   ',
                config:{
                    name:'lastname_input',
                    type:'text',
                    placeholder:'Enter your Lastname'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
           
            age:{
                element:'select',
                value:'',
                label:true,
                labelText:'Age:      ',
                config:{
                    name:'age_input',
                    options:[
                        {val:'1',text:'10-20'},
                        {val:'2',text:'20-30'},
                        {val:'3',text:'+30'}
                    ]
                },
                validation:{
                    required:false
                },
                valid:true
            },
            Country:{
                element:'select:   ',
                value:'',
                label:true,
                labelText:'Country:',
                config:{
                    name:'Country_input',
                    options:[
                        {val:'1',text:'India'},
                        {val:'2',text:'usa'},
                        {val:'3',text:'Australia'}

                    ]
                },
                validation:{
                    required:false
                },
                valid:true
            },
            City:{
                element:'select',
                value:'',
                label:true,
                labelText:'City:       ',
                
                config:{
                    name:'City_input',
                    options:[
                        {val:'1',text:'manali'},
                        {val:'2',text:'ambala'},
                        {val:'3',text:'delhi'}

                    ]
                },
                validation:{
                    required:false
                },
                valid:true
            },
            Area:{
                element:'select',
                value:'',
                label:true,
                labelText:'Area: ',
                
                config:{
                    name:'Area_input',
                    options:[
                        {val:'1',text:'model'},
                        {val:'2',text:'banur'}

                    ]
                },
                validation:{
                    required:false
                },
                valid:true
            }

        }
    }

    updateForm = (newState) => {
        this.setState({
            formData:newState
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        let dataToSubmit = {};
        let formIsValid = true;

        for(let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value;
        }

        for(let key in this.state.formData){
            formIsValid = this.state.formData[key].valid && formIsValid;
        }

        if(formIsValid){
            firebaseDB.ref('users').push(dataToSubmit)
            .then(()=>{
               console.log('new user added') 
            }).catch( e =>{
                console.log(e)
            })
        }
    
    }

    render(){
        return(
            <div className={styles.logContainer}>
                <form onSubmit={this.submitForm}>

                <Uploader
                        filename={ (filename)=> this.storeFilename(filename) }
                    />

                    <FormFields
                        formData={this.state.formData}
                        onblur={(newState) => this.updateForm(newState)}
                        change={(newState) => this.updateForm(newState)}
                    />
                     <br/>
                    <button type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}

export default Registration;