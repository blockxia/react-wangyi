import React,{Component} from 'react'
import b from './images/logo.png'
import './realgoods.less'
import {connect} from 'react-redux'
import {getBanner,getcolumn,getrecommend,gettenfifteen,getcategoryData} from '../../redux/actions'
import Swiper from 'swiper'
 class RealGoods extends Component{
    componentDidMount(){
      this.props.getBanner('banner')
      this.props.getcolumn('column')
      this.props.getrecommend('recommend')
      this.props.gettenfifteen('tenfifteen')
      this.props.getcategoryData('categoryData')
    }
   componentDidUpdate() {
     //单例对象可以实现不重复创建，加判断
     if (!this.swiperId) {
       this.swiperId = new Swiper('.swiper0', {
         loop: true,
         slidesPerView: 'auto'
       })
     }
     //单例对象可以实现不重复创建，加判断
     if (!this.swiperId1) {
       this.swiperId1 = new Swiper('.swiper1', {
         //loop: true,
         slidesPerView: 'auto',
       })
     }

//单例对象可以实现不重复创建，加判断
     if (!this.swiperId2) {
       this.swiperId2 = new Swiper('.swiper2', {
         //loop: true,
         slidesPerView: 1
       })
     }
   }
    render(){
      let {banner,column,recommend,tenfifteen}=this.props
      if(!recommend.recommendBanner){
        recommend.recommendBanner={}
      }
      if(!recommend.recommends){
        recommend.recommends=[]
      }
      if(!recommend){
        recommend = {}
      }
      let recommends = recommend.recommends
      if(!recommends){
        recommends = []
      }
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
          {
            banner.map((item,index)=>(
              <div className="swiper-slide" key={index}>
                <img src={item.picUrl} alt=""/>
                <div className="swiper0_gray_inner">
                  <div className="jinri">--{item.subTitle}--</div>
                  <div className="guanyu">{item.title}</div>
                  <div className="liaoliao">{item.desc}</div>
                </div>
              </div>
            ))
          }
        <div className="swiper-slide">
          <img src={require('./images/2.jpg')} alt=""/>
        </div>
        <div className="swiper-slide">
          <img src={require('./images/1.jpg')} alt=""/>
        </div>
        <div className="swiper-slide">
          <img src={require('./images/4.jpg')} alt=""/>
        </div>
        <div className="swiper-slide">
          <img src={require('./images/3.jpg')} alt=""/>
        </div>
      </div>
    </div>
      <div className="small">
        <div className="swiper-container swiper1">
          <div className="swiper-wrapper">
            {
              column.map((item,index)=>(
                <div className="swiper-slide" key={index}>
                  <img src={item.picUrl} alt=""/>
                  <div className="small_tip">
                    {item.articleCount}
                  </div>
                  <div className="title">{item.title}</div>
                </div>
              ))
            }
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
            <div className="content" style={{backgroundImage:`url(${recommend.recommendBanner.picUrl})`}}>
            <div className="tip" >
              {recommend.recommendBanner.nickname}
            </div>
            </div>
            <div className="footerinfo">
            <div className="footer_title">
            <div className="footer_left" >{recommend.recommendBanner.title}</div>
            <div className="footer_right">
            <span className="num" >{recommend.recommendBanner.priceInfo}</span>
            <span className="qi">元起</span>
            </div>
            </div>
            <div className="footer_info">{recommend.recommendBanner.subtitle}</div>
            </div>
            </div>
              {
                recommends.slice(0,recommends.length-1).map((recommend,index)=>(
                  <div className="first_down" key={index}>
                    <div className="left">
                      <div className="left_avatar">
                        <div className="left_avatar_img">
                          <img src={recommend.avatar} alt=""/>
                        </div>
                        <div className="left_avatar_name">{recommend.nickname}</div>
                      </div>
                      <div className="left_title">{recommend.title}</div>
                      <div className="left_price">{recommend.subtitle}</div>
                    </div>
                    <div className="right" style={{backgroundImage: `${recommend.picUrl}`}}>
                      <div className="right_title" >
                        {recommend.typeName}
                      </div>
                    </div>
                  </div>
                ))
              }
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
            {
              tenfifteen.map((item,index)=>(
                <div className="swiper-slide" key={index}>
                  <img src={require('./images/beijingtu.png')} alt=""/>
                  <div className="gray_inner">
                    <div className="jinri">--今日话题--</div>
                    <div className="guanyu">{item.title}</div>
                    <div className="liaoliao">{item.desc}</div>
                    <div className="canyu">
                      <div className="canyu_circle_first">
                        <img src={require('./images/huisetouxiang.png')} alt=""/>
                      </div>
                      <div className="canyu_circle_avatar">
                        <img src={item.participantAvatar[0]} alt=""/>
                      </div>
                      <div className="canyu_circle_third">
                        <img src={require('./images/huisetouxiang.png')} alt=""/>
                      </div>
                      <div className="canyu_circle_point">
                        <div className="small_point"></div>
                        <div className="small_point"></div>
                        <div className="small_point"></div>
                      </div>
                      <div className="canyu_circle">
                        <span className="canyu_num">{item.participantNum}</span>
                        <span className="canyu_text">人参与话题</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }

        </div>
      </div>
    </div>
    </div>
        )
    }
}

export default connect(
  state=>({banner:state.banner,column:state.column,recommend:state.recommend,tenfifteen:state.tenfifteen,categoryData:state.categoryData}),
  {getBanner,getcolumn,getrecommend,gettenfifteen,getcategoryData}
)(RealGoods)