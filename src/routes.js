import React from 'react'  ;
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Layout from './hoc/layout/layout';
import SignIn from './components/signin/signin';
import Dashboard from './components/Dashboard/Dashboard'
import Registration from './components/registration/registration'
const Routes=(props)=>{
    
        return(
              <Layout user={props.user}>
                <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/sign-in" exact component={SignIn} />
                <Route path="/registration" exact component={Registration}/>
                <Route path='/dashboard' exact component={Dashboard}/>
                </Switch>
        </Layout>
            
        )
    
}
export default Routes;