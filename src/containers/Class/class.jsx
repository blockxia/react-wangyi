import React,{Component} from 'react'
import Cate from '../../components/Cate/cate'
import ClassNav from '../../components/ClassNav/classnav'
import './class.less'
class Class extends Component{
    render(){
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
             <ClassNav/>
             <Cate/>
          </div>
         </div>
        )
    }
}

 export default Class