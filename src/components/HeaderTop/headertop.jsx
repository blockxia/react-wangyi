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
   componentWillMount(){
      this.setState({
        targetIndex: sessionStorage.getItem('INDEX')*1
      }, () => {
        console.log(this.refs.list.children, 'xxxxx');
        window.requestAnimationFrame(this.updateClass)
      })
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
     sessionStorage.setItem('INDEX', 0);
      this.setState({
       targetIndex:0
     }, () => {
        this.updateClass();
      })
    }
    change=(url,targetIndex)=>{
      this.props.history.replace(url)
      sessionStorage.setItem('INDEX', targetIndex);
      this.setState({
        targetIndex:targetIndex
      }, () => {
        this.updateClass();
      })
    }
    updateClass = () => {
      let lis=this.refs.list.children;
      if(lis.length <=1){
        window.requestAnimationFrame(this.updateClass);
      }
     // console.log(lis, '再次测试', this.state.targetIndex);
     //  得到的每一个lis是伪数组,把他转换为真数组
      lis=Array.from(lis);
      console.log(lis);
      lis.forEach((item, index) => {
      //  console.log(item, index);
        item.className='';
        item.className='slide_item';
        if(index===this.state.targetIndex){
          item.className='slide_item active';
        }
      })
    }
    render(){
        let {headCateList} = this.props;
        if(!headCateList){
          headCateList = [];
        }
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