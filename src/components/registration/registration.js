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
                labelText:'Last Name:   ',
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
                labelText:'Age:         ',
                config:{
                    name:'age_input',
                    options:[
                        {val:'0',text:'Select age'},
                        {val:'10-20',text:'10-20'},
                        {val:'20-30',text:'20-30'},
                        {val:'+30',text:'+30'}
                    ]
                },
                validation:{
                    required:false
                },
                valid:true
            },
            Country:{
                element:'select',
                value:'',
                label:true,
                labelText:'Country:    ',
                config:{
                    name:'age_input',
                    options:[
                        {val:'0',text:'Caelect country'},
                        {val:'India',text:'India'},
                        {val:'Usa',text:'usa'},
                        {val:'Australia',text:'australia'}
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
                        {val:'0',text:'select city'},
                        {val:'manali',text:'manali'},
                        {val:'ambala',text:'ambala'},
                        {val:'delhi',text:'delhi'}

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
                labelText:'Area:     ',
                
                config:{
                    name:'Area_input',
                    options:[
                        {val:'0',text:'select area'},
                        {val:'model',text:'model'},
                        {val:'banur',text:'banur'}

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
               this.props.history.push('/')
            }).catch( e =>{
                console.log(e)
            })
        }
       
    }
    storeFilename = (filename) => {
        this.updateForm({id:'image'},filename)
    }


    render(){
        return(
            <div className={styles.logContainer}>
                <form onSubmit={this.submitForm}>

                

                    <FormFields
                        formData={this.state.formData}
                        onblur={(newState) => this.updateForm(newState)}
                        change={(newState) => this.updateForm(newState)}

                    />
                    <Uploader
                        filename={ (filename)=> this.storeFilename(filename) }
                    />
                     <br/>
                    <button type="submit"  >Submit</button>
                </form>
            </div>
        )
    }
}

export default Registration;