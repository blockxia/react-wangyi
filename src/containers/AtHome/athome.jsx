import React,{Component} from 'react'
import b from './images/logo.png'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {getcateList} from '../../redux/actions'
import './athome.less'
 //v-show="index==Index"  v-for="(cate,index) in headCateList"
 class Athome extends Component{
  componentDidMount(){
    this.props.getcateList()
  }
    render(){
      let id=this.props.match.params.id*1
      let {cateList}=this.props
      if(!cateList){
        cateList=[]
      }
      let headCate=cateList.find((item,index)=>{
        return item.id===id
      })
      if(!headCate){
        headCate={}
      }
      let subCateList=headCate.itemList
      if(!subCateList){
        subCateList=[]
      }
      console.log(subCateList);
        return(
          <div className="msite_content" >
            <div className="jujiahaowu"  >
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src={headCate.bannerUrl} alt=""/>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
              <div className="jujiahaowu_title">
                <div className="jujiahaowu_title_inner">
                  <h3>{headCate.name}好物</h3>
                  <span className="info">{/*{headCate.name}*/}</span>
                </div>
              </div>
              <div className="jujiahaowu_content">
                <ul className="jujiahaowu_content_inner">
                  {
                    subCateList.map((item,index)=>(
                      <li key={index}>
                        <img src={item.listPicUrl} alt=""/>
                        <div className="ul-item li_inner">{item.simpleDesc}</div>
                        <div className="ul-item li_info">{item.name}</div>
                        <div className="ul-item li_price">￥{item.retailPrice}</div>
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
  state=>({cateList:state.cateList}),
  {getcateList}
)(withRouter(Athome))