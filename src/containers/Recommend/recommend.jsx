import React,{Component} from 'react'
import {connect} from 'react-redux'
import HeaderTop from '../../components/HeaderTop/headertop'
//import Footer from '../../components/Footer/footer'
//import p from   './images/01.png'
import './recommend.less'
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import moment from 'moment'
import {
  getHeadCateList,
  getFocuslist,
  getPolicydesclist,
  getTaglist,
  getNewitemlist,
  getPopularItemList,
  getFlashSaleIndexVO,
  getTopicList,
  getcateList
} from '../../redux/actions'
 class Recommend extends Component{


   componentDidMount(){
       this.props.getHeadCateList('headCateList')
       this.props.getFocuslist('focuslist')
       this.props.getPolicydesclist('policyDescList')
       this.props.getTaglist('taglist')
       this.props.getNewitemlist('newItemList')
       this.props.getPopularItemList('popularItemList')
       this.props.getFlashSaleIndexVO('flashSaleIndexVO')
       this.props.getTopicList('topicList')
       this.props.getcateList('cateList')

       this.setState({
         headCateList:this.props.headCateList,
         focuslist:this.props.focuslist,
         policyDescList:this.props.policyDescList,
         taglist:this.props.taglist,
         newItemList:this.props.newItemList,
         popularItemList:this.props.popularItemList,
         flashSaleIndexVO:this.props.flashSaleIndexVO,
         topicList:this.props.topicList,
         cateList:this.props.cateList,
       })


  }
   componentDidUpdate(){
     //单例对象可以实现不重复创建，加判断
       if(!this.swiperId){
         this.swiperId=new Swiper('.swiper-container', {
           loop: true,
           autoplay:true,
           // 如果需要分页器
           pagination: {
             el: '.swiper-pagination',
           }
         })
       }
     //单例对象可以实现不重复创建，加判断/新品首发
       if(!this.scrollId){
         this.scrollId=new BScroll('.inner',{
           scrollX:true,
           eventPassthrough:'vertical'
         })
       }
     //单例对象可以实现不重复创建，加判断/人气推荐
       if(!this.scrollId1){
         this.scrollId1=new BScroll('.hot_inner',{
           scrollX:true,
           eventPassthrough:'vertical'
         })
       }
     //单例对象可以实现不重复创建，加判断/专题精选
       if(!this.scrollId2){
         this.scrollId2=new BScroll('.bottom_wrapper',{
           scrollX:true,
           eventPassthrough:'vertical'
         })
       }

/*
     let time=moment.duration(this.props.flashSaleIndexVO.remainTime)
     const timer=setInterval(()=>{
       time-=1000
       if(time<=0){
         clearInterval(timer)
       }
       time=moment.duration(moment.duration(this.props.flashSaleIndexVO.remainTime))
     },1000)
*/


   }

  /* componentWillReceiveProps(newprop){
     if(newprop.flashSaleIndexVO.remainTime===old){
       return
     }
     let old=this.props.flashSaleIndexVO.remainTime
     let time=this.props.flashSaleIndexVO.remainTime
     if(this.props.flashSaleIndexVO.remainTime&&time>=1000){
       this.timer=setInterval(()=>{
         if(time>=0){
           time-=1000
           this.setState({
             time
           })
         }else{
           clearInterval(this.timer)
         }
       },1000)

     }
   }*/
    render(){
      //限时购倒计时时间
     let time=moment.duration(this.props.flashSaleIndexVO.remainTime)
    //  console.log(time);


    let {focuslist,newItemList,flashSaleIndexVO,topicList,cateList}=this.props
    if(!focuslist) focuslist = []
    if (!newItemList) newItemList=[]
    if (!cateList) cateList=[]
   // console.log(newItemList);
     // console.log('1111',this.props.cateList);
        return(
          <div className="msite_content">
            <HeaderTop headCateList={this.props.headCateList}/>
            <div className="swiper-container">
              <div className="swiper-wrapper">
                {
                  focuslist.map((item,index)=>(
                    <div className="swiper-slide" key={index}>
                      <img src={item.picUrl} alt=""/>
                    </div>
                  ))
                }

                <div className="swiper-slide">
                  <img src={require('./images/01.jpg')} alt=""/>
                </div>
              {/*  <div className="swiper-slide">
                  <img src="./images/03.jpg" alt=""/>
                </div>
                <div className="swiper-slide">
                  <img src="./images/04.jpg" alt=""/>
                </div>
                <div className="swiper-slide">
                  <img src="./images/05.jpg" alt=""/>
                </div>*/}
            </div>
            <div className="swiper-pagination"></div>
          </div>
            <div className="tip">
        {
          this.props.policyDescList.map((policy,index)=>(
            <div key={index}>
              <i className="iconfont icon-duigou-copy"></i>
              <span>{policy.desc}</span>
            </div>
            ))

        }
    </div>
             <div className="shop_pinpai">

        <div className="hd">
          <span>品牌制造商直供<i className="iconfont icon-shouqijiantouxiao-copy"></i></span>
        </div>
        <ul className="pinpai_group">
          {
            this.props.taglist.slice(0,(this.props.taglist.length-1)/17).map((item,index)=>(
              <li className="item"  key={index}>
                <div className="item_text">
                  <h6>{item.name}</h6>
                  <span>{item.floorPrice}元起</span>
                </div>
                <img src={item.picUrl} alt=""/>
              </li>
            ))
          }
        </ul>

      </div>
            <div className="new">
        <div className="new_title">
          <div className="new_text">
            <div className="shoufa">新品首发</div>
            <div className="all">查看全部 ></div>
          </div>
          <div className="new_img">
            <img src={require('./images/new.png')} alt=""/>
          </div>
        </div>
        <div className="new_slide">
          <div className="inner">
            <ul className="new_wrapper" >
              {
                newItemList.map((newitem,index)=>(
                  <li className="item_slide" key={index}>
                    <img src={newitem.listPicUrl} alt=""/>
                    <div className="item_slide_fold">
                      <span>{newitem.name}</span>
                    </div>
                    <div className="item_slide_small">
                      <span>{newitem.simpleDesc}</span>
                    </div>
                    <div className="item_slide_pay">
                      <span>￥{newitem.retailPrice}</span>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
          <div className="hot">
        <div className="new_title">
          <div className="new_text">
            <div className="shoufa">人气推荐 好物精选</div>
            <div className="all">查看全部 ></div>
          </div>
          <div className="new_img">
            <img src={require('./images/new/hot.png')} alt=""/>
          </div>
        </div>
        <div className="new_slide">
          <div className="hot_inner">
            <ul className="new_wrapper">
              {
                this.props.popularItemList.map((item,index)=>(
                  <li className="item_slide" key={index} >
                    <img src={item.listPicUrl} alt=""/>
                    <div className="item_slide_fold">
                      <span>{item.name}</span>
                    </div>
                    <div className="item_slide_small">
                      <span>{item.simpleDesc}</span>
                    </div>
                    <div className="item_slide_pay">
                      <span>{item.retailPrice}</span>
                    </div>
                  </li>
                ))
              }

          </ul>
        </div>
      </div>
    </div>
      <div className="xianshishop" >
        <div className="xianshishop_item left">
          <div className="title">
            <span>严选限时购</span>
          </div>
          <div className=" Countdown_time">
            <span className="hour" >{time._data.hours}</span>
            <span className="black">:</span>
            <span className="min" >{time._data.minutes}</span>
            <span className="black">:</span>
            <span className="second" >{time._data.seconds}</span>
          </div>
          <div className="predict_time">
            <span className="up_time">下一场</span>

            <span className="predict_time_center">{moment(flashSaleIndexVO.nextStartTime).format('HH:mm:ss')}</span>
            <span className="begin_time">开始</span>
          </div>
        </div>
        <div className=" xianshishop_item right">
          <div className="right_img">
            <img src={flashSaleIndexVO.primaryPicUrl} alt=""/>
          </div>
          <div className="circle">
            <div className="new">￥{flashSaleIndexVO.activityPrice}</div>
            <div className="old">￥{flashSaleIndexVO.originPrice}</div>
          </div>
        </div>
      </div>
      <div className="fuli">
        <div>
          <img src={require('./images/fuli.jpg')} alt=""/>
        </div>
      </div>
      <div className="zhuanti">
        <div className="zhuanti_title">
          <div className="title">
            <span>专题精选</span>
            <i className="iconfont icon-shouqijiantouxiao-copy"></i>
          </div>
        </div>
        <div className="bottom_wrapper">
          <ul className="bottom_slide">
            {
              topicList.slice(0,(topicList.length-1)/2).map((topic,index)=>(
                <li key={index}>
                  <img src={topic.itemPicUrl} alt=""/>
                  <h4>{topic.title}</h4>
                  <div className="small">{topic.subtitle}</div>
                  <span>{topic.priceInfo}元起</span>
                </li>
              ))
            }

        </ul>
      </div>
    </div>
      <div className="jujiahaowu">
        <div className="jujiahaowu_title">
          <div className="jujiahaowu_title_inner">
            <h3>居家好物</h3>
          </div>
        </div>
        <div className="jujiahaowu_content">
          <ul className="jujiahaowu_content_inner">
            {
              cateList.map((cate,index)=>(
                <li key={index}>
                  <img src={cate.itemList[0].listPicUrl} alt=""/>
                  <div className="ul-item li_inner">{cate.itemList[0].simpleDesc}</div>
                  <div className="ul-item li_info">{cate.itemList[0].name}</div>
                  <div className="ul-item li_price">￥{cate.itemList[0].retailPrice}</div>
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
  state=>({
    headCateList:state.headCateList,
    focuslist:state.focusList,
    policyDescList:state.policyDescList,
    taglist:state.taglist,
    newItemList:state.newItemList,
    popularItemList:state.popularItemList,
    flashSaleIndexVO:state.flashSaleIndexVO,
    topicList:state.topicList,
    cateList:state.cateList,
  }),
  {getHeadCateList,
    getFocuslist,
    getPolicydesclist,
    getTaglist,
    getNewitemlist,
    getPopularItemList,
    getFlashSaleIndexVO,
    getTopicList,
    getcateList
  }
)(Recommend)