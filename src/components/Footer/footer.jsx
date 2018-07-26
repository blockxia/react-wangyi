import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import './footer.less'
 class Footer extends Component{
/*  static propTypes={
    navList:PropTypes.array.isRequired
  }*/
/*   goto=(path)=>{
     this.props.history.replace(path)
   }*/
    render(){
     // const navList=this.props.navList.filter(nav=>!nav.hide)
        return(
              <footer className="footer_group border-1px">
                 <span className={`group_item ${this.props.location.pathname==='/msite'||this.props.location.pathname==='/recommend' ? 'on' :null }`}
                       onClick={()=>this.props.history.replace('/recommend')}>
                    <span className="item_icon ">
                      <i className="iconfont icon-shouye"></i>
                    </span>
                    <span>首页</span>
                  </span>

              <span className={`group_item ${this.props.location.pathname==='/real'?'on' :null}`}
              onClick={()=>this.props.history.replace('/real')}>
                  <span className="item_icon ">
                    <i className="iconfont icon-shoucang"></i>
                  </span>
                  <span>识物</span>
              </span>

              <span className={`group_item ${this.props.location.pathname==='/class'?'on':null}`}
              onClick={()=>this.props.history.replace('/class')}>
                <span className="item_icon ">
                  <i className="iconfont icon-fenlei"></i>
                </span>
              <span>分类</span>
              </span>

              <span className={`group_item ${this.props.location.pathname==='/shopping'?'on':null}`}
                    onClick={()=>this.props.history.replace('/shopping')}>
                  <span className="item_icon ">
                  <i className="iconfont icon-daishouhuo"></i>
                  </span>
                  <span>购物车</span>
              </span>



              <span className={`group_item ${this.props.location.pathname==='/person'? 'on':null}`}
                    onClick={()=>this.props.history.replace('/person')}>
                <span className="item_icon ">
                <i className="iconfont icon-wode"></i>
                </span>
                <span>个人</span>
              </span>
            </footer>
        )
    }
}

export default withRouter(Footer)