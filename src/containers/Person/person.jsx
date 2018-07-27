import './person.less'
import React,{Component} from 'react'
import a from './images/logo.png'
class Person extends Component{
    render(){
        return(
          <div className="profile">
            <div  className="header">
          <span className="shoubu logo">
            <i className="iconfont icon-shouye" onClick={()=>this.props.history.replace('/recommend')}></i>
            </span>
            <span className="img">
              <img src={a} alt="" onClick={()=>this.props.history.replace('/person')}/>
            </span>
            <span className="shoubu search">
              <i className="iconfont icon-search"></i>
            </span>
            <span className="shoubu shop">
               <i className="iconfont icon-tubiaolunkuo-"
                  onClick={()=>this.props.history.replace('/person')}></i>
            </span>
    </div>
      <div className="content">
        <div className="up">
          <div className="img_wrap">
            <img src={a} alt=""/>
          </div>
        </div>
        <div className="center">
          <div className="btn_wrap">
            <div className="btn_phone"  onClick={()=>this.props.history.replace('/phonelogin')}>
            <i className="iconfont icon-shouji4"></i>
            <span>手机号码登录</span>
          </div>
          <div className="btn_emil" onClick={()=>this.props.history.replace('/login')}>
          <i className="iconfont icon-youxiang"></i>
          <span>邮箱账号登录</span>
        </div>
      {/*  <div className="text_register" onClick={this.props.history.replace('/register')}>
        <span>手机号快捷注册</span>
        <i className="iconfont icon-jiantouyou"></i>*/}
      </div>

    </div>
    </div>
      <div className="down">
        <div className="wrap">
          <div className="wechat">
            <i className="iconfont icon-weixin_"></i>
            <span>微信</span>
          </div>
          <div className="qq">
            <i className="iconfont icon-QQ3"></i>
            <span>QQ</span>
          </div>
          <div className="weibo">
            <i className="iconfont icon-weibo2"></i>
            <span>微博</span>
          </div>
        </div>
      </div>
    </div>

        )
    }
}
export default Person