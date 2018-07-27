import React,{Component} from 'react'
import Logo from './images/logo.png'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {getHeadCateList} from '../../redux/actions'
//import BScroll from 'better-scroll'
import './headertop.less'
 class HeaderTop extends Component{

  state = {
     targetIndex:0
   }

   componentDidMount(){
     this.props.getHeadCateList()
   }

   goto=()=>{
      this.props.history.replace('/recommend')
     console.log(this.props)
    }
    change=(url,targetIndex)=>{
      this.props.history.replace(url)
        this.setState({
          targetIndex:targetIndex
        },)
    }
    render(){
        let {headCateList} = this.props;
        if(!headCateList){
          headCateList = [];
        }
     // console.log('1111',this.props.headCateList);
        return(
          <div className="header_wrapper">
            <div className="large_header">
              <div  className="header">
                <div className="logo" onClick={this.goto}>
                  <img src={Logo} alt="" />
                </div>
                <div className="search">
                  <i className="iconfont icon-search"></i>
                  <span className="placeholder">搜索商品, 共10718款好物</span>
                </div>
              </div>
              <div className="nav_wrapper" ref="nav">
                <ul className="slide_nav">
                  <li className={`slide_item ${this.props.location.pathname==='/recommend'? 'active':''}`}
                      onClick={()=>this.props.history.replace('/recommend')} >推荐</li>

                    {

                       headCateList.map((headCate,index)=>(
                         <li className={`slide_item ${index===this.state.targetIndex? 'active':null}`}
                             key={index} ref={index} onClick={(val)=>this.change(`/athome/${headCate.id}`,index)}>
                           {headCate.name}
                         </li>
                       ))
                    }

            </ul>
          </div>
      </div>
    </div>
        )
    }
}

export default connect(
  state=>({headCateList:state.headCateList}),
  {getHeadCateList}
)(withRouter(HeaderTop))