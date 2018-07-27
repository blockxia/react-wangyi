import React,{Component} from 'react'
import Logo from './images/logo.png'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {getHeadCateList} from '../../redux/actions'
import BScroll from 'better-scroll'
import './headertop.less'
 class HeaderTop extends Component{

  state = {
     targetIndex:0
   }
   componentDidMount(){
     this.props.getHeadCateList()
   }
   componentDidUpdate() {
     //单例对象可以实现不重复创建，加判断
     if(!this.scrollId){
       this.scrollId=new BScroll('.nav_wrapper',{
         probeType: 2,
         scrollX:true,
         click: true,
         eventPassthrough:'vertical'
       })
     }
   }

   goTj=()=>{
      this.props.history.replace('/recommend')
      this.setState({
       targetIndex:0
     }, () => {
        this.updateClass();
      })
    }
  /* goto=()=>{
      this.props.history.replace('/recommend')
    }*/
   /* componentWillMount(){
     console.log(this.props.location.pathname);
     console.log(this.refs);
    }*/
    change=(url,targetIndex)=>{
      this.props.history.replace(url)
      console.log(targetIndex);
      this.setState({
        targetIndex:targetIndex
      }, () => {
        this.updateClass();
      })
    }

    updateClass = () => {
      let lis=this.refs.list.children;
      lis=Array.from(lis)
      lis.forEach((item, index) => {
        item.className=''
        item.className='slide_item '
        if(index===this.state.targetIndex){
          item.className='slide_item active'
        }
      })
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
              <div className="nav_wrapper">
                <ul ref='list' className="slide_nav">
                  <li className={`slide_item ${(this.props.location.pathname.length===10)? 'active':''}`}
                      onClick={this.goTj} >推荐</li>
                    {
                       headCateList.map((headCate,index)=>(
                         <li key={index}   onClick={()=>this.change(`/athome/${headCate.id}`,index+1)}>
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