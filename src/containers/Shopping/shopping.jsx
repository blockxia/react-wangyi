import './shopping.less'
import React,{Component} from 'react'
import n from './images/shopcar.png'
class Shopping extends Component{
    render(){
        return(
          <div className="shopping">
            <div  className="header">
              <div className="left">
                <span className="name" >购物车</span>
              </div>
              <div className="right">
                <span onClick={()=>this.props.history.replace('/person')} >
                领券
              </span>
            </div>
          </div>
      <div className="content">
        <div className="ul_list">
          <ul className="tip">
            <li>
              <i className="iconfont icon-kongxinyuan"></i>
              <span>网易自营品牌</span>
            </li>
            <li>
              <i className="iconfont icon-kongxinyuan"></i>
              <span>30天无忧退货</span>
            </li>
            <li>
              <i className="iconfont icon-kongxinyuan"></i>
              <span>48小时快速退款</span>
            </li>
          </ul>
        </div>
        <div className="icon">
          <div className="up">
            <div className="icon_img">
              <img src={n} alt=""/>
            </div>
            <div className="title">
              <span>去添加点什么吧</span>
            </div>
          </div>
          <div className="btn_red" onClick={()=>this.props.history.push('/person')}>
          <div >登录</div>
        </div>
      </div>
    </div>
    </div>

        )
    }
}
export default Shopping