import React,{Component} from 'react'
import {Switch,Route}  from 'react-router-dom'


import FirstScreen from '../FirstScreen/firstscreen'
import Msite from '../Msite/msite'
import RealGoods from '../RealGoods/realgoods'
/*import Register from '../Register/register'*/
import Class from '../Class/class'
import Person from '../Person/person'
import Recommend from '../Recommend/recommend'
import Footer from '../../components/Footer/footer'
import Shopping from '../Shopping/shopping'

//import HeaderTop from '../../components/HeaderTop/headertop'


 class Main extends Component{
   /*navList=[
     {
       path:'/firstscreen',
       component:FirstScreen
     },
     {
       path:'/msite',
       component:Msite
     },
     {
       path:'/recommend',
       component:Recommend
     },
     {
       path:'/real',
       component:RealGoods
     },
     {
       path:'/class',
       component:Class
     },
     {
       path:'/person',
       component:Person
     },
     {
       path:'/shopping',
       component:Shopping
     },
    /!* {
       path:'/register',
       component:Register
     }*!/
   ]*/

    render(){
      //const navList=this.navList
      const path=this.props.location.pathname
      //const currentNav=navList.find(nav=>nav.path===path)
        return(
            <div>
             {/* <HeaderTop/>*/}
              <Switch>
                <Route path='/firstscreen' component={FirstScreen}/>
                <Route path='/msite' component={Msite}/>
                <Route path='/recommend' component={Recommend}/>
                <Route path='/real' component={RealGoods}/>
                <Route path='/class' component={Class}/>
                <Route path='/person' component={Person}/>
                <Route path='/shopping' component={Shopping}/>
                <Route component={FirstScreen}/>
               {/* <Route path='/register' component={Register}/>*/}
              </Switch>
              {path==='/firstscreen'||path==='/person'||path==='/'?  '':<Footer />}
            </div>
        )
    }
}

export default Main