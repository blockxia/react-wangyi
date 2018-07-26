import React,{Component} from 'react'
import {connect} from 'react-redux'
import HeaderTop from '../../components/HeaderTop/headertop'
//import Footer from '../../components/Footer/footer'
import p from   './images/01.png'
import './recommend.less'
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'
//import BScroll from 'better-scroll'
import {getHeadCateList,getFocuslist,getPolicydesclist} from '../../redux/actions'
 class Recommend extends Component{

   componentDidMount(){
      this.props.getHeadCateList('headCateList')
      this.props.getFocuslist('focuslist')
      this.props.getPolicydesclist('policyDescList')
      this.setState({
       headCateList:this.props.headCateList,
        focuslist:this.props.focuslist,
        policyDescList:this.props.policyDescList
     })
     /*if(!this.swiperId){
       this.swiperId=new Swiper('.swiper-container', {
         loop: true,
         // 如果需要分页器
         pagination: {
           el: '.swiper-pagination',
         }
       })
     }*/
  }
   componentDidUpdate(){
       if(!this.swiperId){
         this.swiperId=new Swiper('.swiper-container', {
           loop: true,
           // 如果需要分页器
           pagination: {
             el: '.swiper-pagination',
           }
         })
       }
    }
    render(){
    let {focuslist}=this.props
    if(!focuslist){
      focuslist = []
    }
     console.log(focuslist);
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
          <li className="item" >
          <div className="item_text">
            <h6>文字</h6>
            <span>26元起</span>
          </div>
          <img  alt=""/>
          </li>
        </ul>

      </div>
      <div className="new">
        <div className="new_title">
          <div className="new_text">
            <div className="shoufa">新品首发</div>
            <div className="all">查看全部 ></div>
          </div>
          <div className="new_img">
            <img src="./images/new.png" alt=""/>
          </div>
        </div>
        <div className="new_slide">
          <div className="inner">
            <ul className="new_wrapper" >
              <li className="item_slide" >
                <img  alt=""/>
                  <div className="item_slide_fold">
                    <span>文字</span>
                  </div>
                  <div className="item_slide_small">
                    <span>这是</span>
                  </div>
                  <div className="item_slide_pay">
                    <span>￥25</span>
                  </div>
              </li>

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
            <img src="./images/new/hot.png" alt=""/>
          </div>
        </div>
        <div className="new_slide">
          <div className="hot_inner">
            <ul className="new_wrapper">
              <li className="item_slide" >
              <img src='' alt=""/>
              <div className="item_slide_fold">
                <span>文字</span>
              </div>
              <div className="item_slide_small">
                <span>22</span>
              </div>
              <div className="item_slide_pay">
                <span>35</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
      <div className="xianshishop">
        <div className="xianshishop_item left">
          <div className="title">
            <span>严选限时购</span>
          </div>
          <div className=" Countdown_time">
            <span className="hour" >66</span>
            <span className="black">:</span>
            <span className="min" >55</span>
            <span className="black">:</span>
            <span className="second" >33</span>
          </div>
          <div className="predict_time">
            <span className="up_time">下一场</span>
            <span className="predict_time_center">7788</span>
            <span className="begin_time">开始</span>
          </div>
        </div>
        <div className=" xianshishop_item right">
          <div className="right_img">
            <img src='' alt=""/>
          </div>
          <div className="circle">
            <div className="new">￥23</div>
            <div className="old">￥24</div>
          </div>
        </div>
      </div>
      <div className="fuli">
        <div>
          <img src="./images/fuli.jpg" alt=""/>
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
            <li >
            <img src="" alt=""/>
            <h4>文字</h4>
            <div className="small">测试</div>
            <span>25元起</span>
          </li>
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
            <li >
              <img src='' alt=""/>
              <div className="ul-item li_inner">1</div>
              <div className="ul-item li_info">1</div>
              <div className="ul-item li_price">￥1</div>
            </li>
          </ul>
        </div>
      </div>
    </div>

        )
    }
}

export default connect(
  state=>({headCateList:state.headCateList,focuslist:state.focusList,policyDescList:state.policyDescList}),
  {getHeadCateList,getFocuslist,getPolicydesclist}
)(Recommend)