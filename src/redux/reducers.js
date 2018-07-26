import {
  RECEIVE_HEADCATELIST,
  RECEIVE_FOCUSLIST,
  RECEIVE_POLICYDESCLIST,
  RECEIVE_TAGLIST,
  RECEIVE_NEWITEMLIST,
  RECEIVE_POPULARITEMLISTS,
  RECEIVE_FLASHSALEINDEXVO,
  RECEIVE_TOPICLIST,
  RECEIVE_CATELIST,
  RECEIVE_COLUMN,
  RECEIVE_BANNER,
  RECEIVE_RECOMMEND,
  RECEIVE_TENFIFTEENS,
  RECEIVE_CATEGORYS,

} from './action-types'
import {combineReducers} from 'redux'

const initHeadCateList=[]

function headCateList(state=initHeadCateList,action) {
  /*switch (action.type){
    case RECEIVE_HEADCATELIST:
      const headCateList=action.data
          return headCateList
    default:
      return state
  }*/

  if(action.type===RECEIVE_HEADCATELIST){
    return action.data
  }else{
    return state
  }
}

const initfocusList=[]
function focusList(state=initfocusList,action) {
  if(action.type===RECEIVE_FOCUSLIST){
    return action.data
  }else{
    return state
  }
}
const initpolicyDescList=[]
function policyDescList(state=initpolicyDescList,action) {
  if(action.type===RECEIVE_POLICYDESCLIST){
    return action.data
  }else{
    return state
  }
}

const initTaglist=[]//初始化数据为空数组
function taglist(state=initTaglist,action) {
  if(action.type===RECEIVE_TAGLIST){
    return action.data
  }else{
    return state
  }
}

const initNewItemList=[]
function newItemList(state=initNewItemList,action) {
  if(action.type===RECEIVE_NEWITEMLIST){
    return action.data
  }else{
    return state
  }
}

const initPopularItemList=[]
function popularItemList(state=initPopularItemList,action) {
  if(action.type===RECEIVE_POPULARITEMLISTS) {
    return action.data
  }else{
    return state
  }
}
const initflashSaleIndexVO=[]
function flashSaleIndexVO(state=initflashSaleIndexVO,action) {
  if(action.type===RECEIVE_FLASHSALEINDEXVO){
    return action.data
  }else{
    return state
  }
}

const inittopicList=[]
function topicList(state=inittopicList,action) {
  if(action.type===RECEIVE_TOPICLIST){
    return action.data
  }else{
    return state
  }
}



const initcateList=[]
function cateList(state=initcateList,action) {
  if(action.type===RECEIVE_CATELIST){
    return action.data

  }else{
    return state
  }

}
//整合多个reducer函数
export default combineReducers({
  headCateList,
  focusList,
  policyDescList,
  taglist,
  newItemList,
  popularItemList,
  flashSaleIndexVO,
  topicList,
  cateList
})
/*export default {
  [RECEIVE_HEADCATELIST](state,{headCateList}){
    state.headCateList=headCateList
  },
  [RECEIVE_FOCUSLIST](state,{focusList}){
    state.focusList=focusList
  },
  [RECEIVE_POLICYDESCLIST](state,{policyDescList}){
    state.policyDescList=policyDescList
  },
  [RECEIVE_TAGLIST](state,{tagList}){
    state.tagList=tagList
  },
  [RECEIVE_NEWITEMLIST](state,{newItemList}){
    state.newItemList=newItemList
  },
  [RECEIVE_POPULARITEMLISTS](state,{popularItemList}){
    state.popularItemList=popularItemList
  },
  [RECEIVE_FLASHSALEINDEXVO](state,{flashSaleIndexVO}){
    state.flashSaleIndexVO=flashSaleIndexVO
  },
  [RECEIVE_TOPICLIST](state,{topicList}){
    state.topicList=topicList
  },
  [RECEIVE_CATELIST](state,{cateList}){
    state.cateList=cateList
  },
  [RECEIVE_BANNER](state,{banners}){
    state.banners=banners
  },
  [RECEIVE_COLUMN](state,{columns}){
    state.columns=columns
  }
  ,
  [RECEIVE_RECOMMEND](state,{recommend}){
    state.recommend=recommend
  }
  ,
  [RECEIVE_TENFIFTEENS](state,{tenfifteens}){
    state.tenfifteens=tenfifteens
  }
  ,
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys=categorys
  }
}*/
