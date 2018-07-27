import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import './phonelogin.less'
 class PhoneLogin extends Component{
  state={
    phone:'',
    short:'',
    computeTime:0,
    isRight:true,
    isShow:false
  }


  /*
     this.setState({
       isPhone:isPhone
     })
     if(!this.state.phone){
       alert('请输入正确手机号')
     }*/

sendPhone=()=> {
  const isPhone = /^1\d{10}$/
  const phone = this.refs.content.value
  console.log(phone);
  if (!isPhone.test(phone)) {
     this.setState({
       phone,
        isShow:true
     })
  }
}
changeHandle(e){
 const value= e.target.value
  this.setState({phone:value})
}
  getPhoneCode=()=>{
    const isPhone = /^1\d{10}$/
    const{phone}=this.state
     if(isPhone.test(phone)){
       let computeTime=60
      this.setState({computeTime})
       const timer=setInterval(()=>{
         computeTime--
         this.setState({computeTime})
         if(computeTime<=0){
           clearInterval(timer)
           this.setState({computeTime:0})
         }
       },1000)
     }
   }
    render() {
      const {isRight,isShow} = this.state
    return (
      <div className="login_wrapper">
      <div className="header">
            <span className="shoubu logo">
                <i className="iconfont icon-shouye" onClick={() => this.props.history.replace('/recommend')}></i>
            </span>
        <span className="img">
             <img src="./images/logo.png" alt="" onClick={() => this.props.history.replace('/recommend')}/>
            </span>
        <span className="shoubu search">
              <i className="iconfont icon-search"></i>
            </span>
        <span className="shoubu shop">
              <i className="iconfont icon-tubiaolunkuo-" onClick={() => this.props.history.replace('/shopping')}></i>
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
              <input type="text" maxLength={11} className="emil_phone" placeholder="请输入手机号" ref='content'
              onChange={(e)=>{this.changeHandle(e)}}/>
            </div>
            <div className="input_pwd">
              <div className="input_pwd_inner">
                <input type="text" className="emil_pwd"
                       placeholder="请输入短信验证码" ref="short"/>
              </div>
              {/*:className="{on:isPhone}"*/}
              <div className={`code ${this.state.phone ? 'on' : null}`} onClick={() => this.getPhoneCode()}>
                {/*{{computeTime>0 ? `已发送(${computeTime}s)`:'获取验证码'}}*/}
                <span
                  className="getcode ">{this.state.computeTime > 0 ? `已发送(${this.state.computeTime}s)` : '获取验证码'}</span>
              </div>
            </div>
            <div className="register_phone">
              <div className="text" onClick={() => this.props.history.replace('/register')}>
                <span className="register">注册账号</span>
                {isShow? <span style={{color:"red"}}>{isRight?"手机号错误":"验证码错误"}</span>:null}
              </div>
              <div className="pwd">
                <span className="register">忘记密码</span>
              </div>
            </div>
            <div className="btn_phone" onClick={this.sendPhone}>
              <span>登录</span>
            </div>
            <div className="btn_emil" onClick={() => this.props.history.replace('/login')}>
              <span>其他登录方式</span>
            </div>
            {/*onClick={()=>this.props.history.replace('/register')}*/}
            <div className="text_register">
              <span>注册账号</span>
              <i className="iconfont icon-jiantouyou"></i>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
  }
}

export default withRouter(PhoneLogin)