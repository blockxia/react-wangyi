import React,{Component} from 'react'
import {connect} from 'react-redux'
import HeaderTop from '../../components/HeaderTop/headertop'
import Footer from '../../components/Footer/footer'
import Recommend from '../Recommend/recommend'
import './msite.less'
import {getHeadCateList} from "../../redux/actions";
 class Msite extends Component{
/*   componentDidMount(){
     this.props.getHeadCateList('headCateList')

   }*/
    render(){
        return(
         <div>
         {/*  <HeaderTop />*/}
         {/*  <Recommend />*/}
         {/*  <Footer/>*/}
         </div>

        )
    }
}

export default connect(
/*  state=>({HeadCateList:state.HeadCateList}),
  {getHeadCateList}*/
)(Msite)