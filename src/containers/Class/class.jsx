import React,{Component} from 'react'
import Cate from '../../components/Cate/cate'
import ClassNav from '../../components/ClassNav/classnav'
import {connect} from 'react-redux'
import {getcategoryData} from '../../redux/actions'
import './class.less'
class Class extends Component{
  componentDidMount(){
    this.props.getcategoryData('categoryData')
  }
    render(){
    const {categoryData}=this.props
        return(
            <div className='cate'>
              <div className="cate_header_wrapper">
                <div  className="header ">
                  <div className="search">
                    <i className="iconfont icon-search"></i>
                    <span className="placeholder">搜索商品, 共10718款好物</span>
                  </div>
                </div>
              </div>
              <div className="bottom">
             <ClassNav categoryData={categoryData}/>
             <Cate categoryData={categoryData}/>
          </div>
         </div>
        )
    }
}

 export default connect(
   state=>({categoryData:state.categoryData}),
   {getcategoryData}
 )(Class)