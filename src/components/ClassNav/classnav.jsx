
import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import './classnav.less'
 class ClassNav extends Component{
  static propTypes={
    categoryData:PropTypes.array.isRequired
  }
   goNav=(index)=>{
     PubSub.subscribe('navData',(msg,data)=> {
       //保存传过来的data里的index到Index
       this.Index = data
     })
   }
    render(){
   const currentIndex=0
    const {categoryData} =this.props
    console.log('categoryData222',this.props);
        return(
          <div className="class_nav">
            <div className="nav">
              <ul className="nav_list">
                {
                  categoryData.map((item,index)=>(
                    <li className={`nav_list_li ${currentIndex===index? 'on' : ''}`}
                        key={index} ref={index}
                        onClick={this.goNav(index)}
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