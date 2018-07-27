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
  componentDidMount(){
    PubSub.subscribe('navData',(msg,data)=> {
      //保存传过来的data里的index到Index
      console.log('subscribe',data);
     // data=data+1
      this.setState({
        Index:data
      })


    })
  }
  render(){
    const{categoryData}=this.props
   //console.log('cate的categoryData',categoryData);
    //const md=categoryData.find((md,index)=>md.id===this.state.Index)
    return (
      <div className="list">
        <div className="list_wrapper">
          {
           categoryData.map((category,index)=>{
             if(this.state.Index===index){
               return(
                 <div className="list_slide" key={index}>
                   <div className="list_cover">
                     <img src={category.bannerUrl} alt='logo'/>
                   </div>
                   <div className="list_title">
                     <span>--{category.name}分类--</span>
                   </div>
                   <div className="list_img">
                     <ul className="list_img_ul">
                       {
                         category.subCateList.map((subCate,index)=>(
                           <li key={index}>
                             <img src={subCate.bannerUrl?subCate.bannerUrl:subCate.wapBannerUrl} alt=""/>
                             <div className="img_name">{subCate.name}</div>
                           </li>
                         ))
                       }
                     </ul>
                   </div>
                 </div>
               )
             }

           })
          }
        </div>
      </div>
    )
  }
}
 export default withRouter(Cate)
