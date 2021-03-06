import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import './login.less'
 class Login extends Component{
   sendCode=()=>{
    let emil=this.refs.emil.value
    let pwd=this.refs.pwd.value
     if(!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(emil)){
       alert('请输入正确的邮箱')
     }else if(!this.isEmil || !pwd){
       alert('您输入的邮箱或密码错误！')
     }else{
       alert('登陆成功')
     }
   }
    render(){
        return(
          <div className="login_wrapper">
            <div  className="header">
            <span className="shoubu logo">
                <i className="iconfont icon-shouye" onClick={()=>this.props.history.replace('/recommend')} ></i>
            </span>
            <span className="img">
             <img src="./images/logo.png" alt="" onClick={()=>this.props.history.replace('/recommend')}/>
            </span>
            <span className="shoubu search">
              <i className="iconfont icon-search"></i>
            </span>
            <span className="shoubu shop">
              <i className="iconfont icon-tubiaolunkuo-" onClick={()=>this.props.history.replace('/shopping')}></i>
            </span>
          </div>
      <div className="content">
        <div className="up">
          <div className="img_wrap">
            <img src={require('./images/login.png')} alt=""/>
          </div>
        </div>
        <div className="center">
          <div className="btn_wrap">
            <div className="input_emil">
              <input type="text" maxLength={12} className="emil_phone" placeholder="邮箱账号" ref='emil'/>
            </div>
            <div className="input_pwd">
              <input type="password" maxLength={8} className="emil_pwd" placeholder="密码" ref="pwd"/>
            </div>
            <div className="register_phone">
              <div className="text" onClick={()=>this.props.history.replace('/register')} >
              <span className="register">注册账号</span>
            </div>
            <div className="pwd">
              <span className="register">忘记密码</span>
            </div>
          </div>
          <div className="btn_phone"  onClick={this.sendCode}>
          <span>登录</span>
        </div>
        <div className="btn_emil" onClick={()=>this.props.history.replace('/phonelogin')}>

        <span>其他登录方式</span>
      </div>
    </div>
    </div>

    </div>
    </div>
        )
    }
}

export default withRouter(Login)