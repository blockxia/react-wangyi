import React,{Component} from 'react'
import bottom from  './images/bottom.jpg'
import top1 from  './images/top1.jpg'
import top2 from  './images/top2.jpg'
import './firstscreen.less'
 class FirstScreen extends Component{
    render(){
        return(
          <div className="first_wrap">
            <div className="first_image">
              <img src={top1}/>
            </div>
            <div className="first_image_center">
              <img src={top2}/>
            </div>
            <div className="first_bottom"  onClick={this.gotoMsite}>
              <img src={bottom}/>
            </div>

    </div>
        )
    }


   gotoMsite=()=>{
      this.props.history.push('/recommend')
   }
}

export default FirstScreen