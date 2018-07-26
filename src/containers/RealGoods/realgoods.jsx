import React,{Component} from 'react'
import b from './images/logo.png'
import './realgoods.less'
 class RealGoods extends Component{
    render(){
        return(
          <div className="yanxuan_wrapper">
            <div  className="header">
            <span className="shoubu logo">
            <i className="iconfont icon-shouye" onClick={()=>this.props.history.replace('/msite')}></i>
            </span>
            <span className="img">
            <img src={b} alt="" onClick={()=>this.props.history.replace('/msite')}/>
          </span>
            <span className="shoubu search">
      <i className="iconfont icon-search"></i>
    </span>
            <span className="shoubu shop">
      <i className="iconfont icon-tubiaolunkuo-" onClick={()=>this.props.history.replace('/shopping')}></i>
          </span>
    </div>
      <div className="swiper0">
        <div className="swiper-wrapper">
          <div className="swiper-slide" >
          <img src={b} alt=""/>
            <div className="swiper0_gray_inner">
              <div className="jinri">--444--</div>
              <div className="guanyu">222</div>
              <div className="liaoliao">333</div>
            </div>
        </div>
        <div className="swiper-slide">
          <img src={b} alt=""/>
        </div>
        <div className="swiper-slide">
          <img src={b} alt=""/>
        </div>
        <div className="swiper-slide">
          <img src={b} alt=""/>
        </div>
        <div className="swiper-slide">
          <img src={b} alt=""/>
        </div>
      </div>
    </div>
      <div className="small">
        <div className="swiper-container swiper1">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
            <img src={b} alt=""/>
              <div className="small_tip">
                22
              </div>
              <div className="title">文字</div>
          </div>
        </div>
      </div>
    </div>
    {/*  <!--为你推荐-->*/}
      <div className="foryou_tuijian">
        <div className="first">
          <div className="up" >
            <div className="inner_header">
              <div className="up_title">
                为你推荐
              </div>
            </div>
            <div className="content" style={{backgroundImage:`url(${b})`}}>
            <div className="tip" >
              trtrt
            </div>
          </div>
          <div className="footerinfo">
            <div className="footer_title">
              <div className="footer_left" >rrr</div>
              <div className="footer_right">
                <span className="num" >rrr</span>
                <span className="qi">元起</span>
              </div>
            </div>
            <div className="footer_info">b</div>
          </div>
        </div>
        <div className="first_down" >
          <div className="left">
            <div className="left_avatar">
              <div className="left_avatar_img">
                <img src={b} alt=""/>
              </div>
              <div className="left_avatar_name">文字</div>
            </div>
            <div className="left_title">文字</div>
            <div className="left_price">文字</div>
          </div>
          <div className="right" style={{backgroundImage: `${b}`}}>
          <div className="right_title" >
            dede
          </div>
        </div>
      </div>
    </div>

    </div>
      <div className="biaoti_header">
        <div className="up_title">
          十点一刻
        </div>
      </div>
      <div className="clock">
        <div className="swiper2">
          <div className="swiper-wrapper">
            <div className="swiper-slide" >
            <img src={b} alt=""/>
              <div className="gray_inner">
                <div className="jinri">--今日话题--</div>
                <div className="guanyu">de</div>
                <div className="liaoliao">333</div>
                <div className="canyu">
                  <div className="canyu_circle_first">
                    <img src={b} alt=""/>
                  </div>
                  <div className="canyu_circle_avatar">
                    <img src={b} alt=""/>
                  </div>
                  <div className="canyu_circle_third">
                    <img src={b} alt=""/>
                  </div>
                  <div className="canyu_circle_point">
                    <div className="small_point"></div>
                    <div className="small_point"></div>
                    <div className="small_point"></div>
                  </div>
                  <div className="canyu_circle">
                    <span className="canyu_num">2</span>
                    <span className="canyu_text">人参与话题</span>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>

    </div>
    </div>
        )
    }
}

export default RealGoods