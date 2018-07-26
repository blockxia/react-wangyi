import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import PubSub from'pubsub-js'
import './cate.less'
import logo from './images/logo.png'
class Cate extends Component {
  static propTypes={
    categoryData:PropTypes.array.isRequired
  }
  state={
    Index:0
}
componentWillReceiveProps(newprops){
    const {categoryData}=newprops
}
  componentDidMount(){

  }
  render(){
    const{categoryData}=this.props
    //const md=categoryData.find((md,index)=>md.id===this.state.Index)
    return (
      <div className="list">
        <div className="list_wrapper">
          {
            <div className="list_slide" >
              <div className="list_cover">
                <img src={logo} alt='logo'/>
              </div>
              <div className="list_title">
                <span>--推荐分类--</span>
              </div>
              <div className="list_img">
                <ul className="list_img_ul">
                  {/*v-for="(subCate,index) in category.subCateList"*/}
                  <li >
                    <img src={logo} alt=""/>
                    <div className="img_name">类型</div>
                  </li>
                </ul>
              </div>
            </div>
          }
        </div>
      </div>
    )
  }
}
 export default withRouter(Cate)
