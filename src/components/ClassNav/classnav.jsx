
import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import BScroll from 'better-scroll'
import './classnav.less'
 class ClassNav extends Component{
  static propTypes={
    categoryData:PropTypes.array.isRequired
  }
  state={
    currentIndex:0
  }
   goNav=(obj)=>{
     const {path,index}=obj
     this.props.location.pathname===path
     this.setState({
       currentIndex:index
     }, () => {
       PubSub.publish('navData',this.state.currentIndex)
     })
   }


   componentDidUpdate() {
     //单例对象可以实现不重复创建，加判断
     if(!this.scrollId){
       this.scrollId=new BScroll('.nav',{
         probeType: 2,
         scrollY:true,
         click: true,
       })
     }
   }
    render(){
    const {categoryData} =this.props
        return(
          <div className="class_nav">
            <div className="nav">
              <ul className="nav_list">
                {
                  categoryData.map((item,index)=>(
                    <li className={`nav_list_li ${index===this.state.currentIndex? 'on' : ''}`}
                        key={index}
                        onClick={()=>this.goNav({path:'/class',index})}
                    >
                      {item.name}</li>
                  ))
                }
            </ul>
          </div>
        </div>
        )
    }
}


export default withRouter(ClassNav)