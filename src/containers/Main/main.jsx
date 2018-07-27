import React,{Component} from 'react'
import {Switch,Route}  from 'react-router-dom'


import FirstScreen from '../FirstScreen/firstscreen'
import Msite from '../Msite/msite'
import RealGoods from '../RealGoods/realgoods'
import AtHome from '../AtHome/athome'
import Class from '../Class/class'
import Person from '../Person/person'
import Recommend from '../Recommend/recommend'
import Footer from '../../components/Footer/footer'
import Shopping from '../Shopping/shopping'
import HeaderTop from '../../components/HeaderTop/headertop'

 class Main extends Component{
    render(){
      const path=this.props.location.pathname
        return(
            <div>
              {path!=='/firstscreen'&&path!=='/person'&&path!=='/'&&path!=='/msite'&&path!=='/recommend'&&path!=='/real'&&path!=='/class'&&path!=='/shopping'? <HeaderTop /> :''}
              <Switch>
                <Route path='/firstscreen' component={FirstScreen}/>
                <Route path='/msite' component={Msite}/>
                <Route path='/recommend' component={Recommend}/>
                <Route path='/athome/:id' component={AtHome}/>
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