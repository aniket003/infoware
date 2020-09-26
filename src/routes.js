import React,{Component} from 'react'  ;
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Layout from './hoc/layout/layout';
import SignIn from './components/signin/signin';
import Registration from './components/registration/registration'
class Routes extends Component {
    render(){
        return(
              <Layout>
                <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/sign-in" exact component={SignIn} />
                <Route path="/registration" exact component={Registration}/>
                </Switch>
                </Layout>
            
        )
    }
}
export default Routes;