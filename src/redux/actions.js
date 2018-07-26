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
  RECEIVE_BANNER,
  RECEIVE_COLUMN,
  RECEIVE_RECOMMEND,
  RECEIVE_TENFIFTEENS,
  RECEIVE_CATEGORYS
} from './action-types'
import {
  reqMsite,
  reqMsiteL,
  reqMsiteD,
  reqMsiteT,
  reqMsiteNew,
  reqMsiteHot,
  reqMsiteXsg,
  reqMsiteZT,
  reqMsiteJH,
  reqRealB,
  reqRealC,
  reqRealR,
  reqRealS,
  reqCategoryData
} from '../api'

const receive_headcatelist=(headCateList)=>({type:RECEIVE_HEADCATELIST,data:headCateList})
export const  getHeadCateList=()=> {
  return  async dispatch=>{
    const result=await reqMsite()
    console.log(result);
    if(result.code===0){
      const headCateList=result.data
      dispatch(receive_headcatelist(headCateList))
    }
  }
}

const receive_focuslist=(focuslist)=>({type:RECEIVE_FOCUSLIST,data:focuslist})
export const getFocuslist=()=>{
  return async dispatch=>{
    const result=await reqMsiteL()
    console.log(result);
    if(result.code===0){
      const focuslist=result.data
      dispatch(receive_focuslist(focuslist))
    }
  }
}

const receive_policydesclist=(policyDescList)=>({type:RECEIVE_POLICYDESCLIST,data:policyDescList})
export const getPolicydesclist=()=>{
  return async dispatch=>{
    const result=await reqMsiteD()
    console.log(result);
    if(result.code===0){
      const policyDescList=result.data
      dispatch(receive_policydesclist(policyDescList))
    }
  }
}




//vue中
/*export default {


  async getHeadCateList({commit},cb){
    const result = await reqMsite()
    console.log(result);
    if(result.code===0){
      const headCateList=result.data
     // console.log(headCateList);
      commit(RECEIVE_HEADCATELIST,{headCateList})
      cb&&cb()
    }
  },
  async getFocusList({commit}) {
    const result = await reqMsiteL()
   // console.log('整体',result);
    if (result.code === 0) {
      const focusList = result.data
     //console.log(focusList);
      commit(RECEIVE_FOCUSLIST, {focusList})
    }
  },
  async getPolicyDescList({commit}) {
    const result = await reqMsiteD()
    //console.log('整体',result);
    if (result.code === 0) {
      const policyDescList = result.data
     // console.log(policyDescList);
      commit(RECEIVE_POLICYDESCLIST, {policyDescList})
    }
  },
  async getTagList({commit}) {
    const result = await reqMsiteT()
    //console.log('getTagList整体',result);
    if (result.code === 0) {
      const tagList = result.data
      //console.log(tagList);
      commit(RECEIVE_TAGLIST, {tagList})
    }
  },
  async getNewItemList({commit}) {
    const result = await reqMsiteNew()
    //console.log('getNewItemList',result);
    if (result.code === 0) {
      const newItemList = result.data
     // console.log('getNewItemList');
      commit(RECEIVE_NEWITEMLIST, {newItemList})
    }
  },
  async getPopularItemLists({commit}) {
    const result = await reqMsiteHot()
    //console.log('getPopularItemLists',result);
    if (result.code === 0) {
      const popularItemList = result.data
      //console.log('getPopularItemLists');
      commit(RECEIVE_POPULARITEMLISTS, {popularItemList})
    }
  },
  async getFlashSaleIndexVO ({commit},cb) {
    const result = await reqMsiteXsg()
   //console.log('getFlashSaleIndexVO',result);
    if (result.code === 0) {
      const flashSaleIndexVO = result.data
     // console.log('getFlashSaleIndexVO');
      commit(RECEIVE_FLASHSALEINDEXVO, {flashSaleIndexVO})
      cb && cb()
    }
  },
  async getTopicList ({commit}) {
    const result = await reqMsiteZT()
   // console.log('getTopicList',result);
    if (result.code === 0) {
      const topicList = result.data
     // console.log('getTopicList');
      commit(RECEIVE_TOPICLIST, {topicList})
    }
  },
  async getCateList ({commit}) {
    const result = await reqMsiteJH()
   // console.log('getCateList',result);
    if (result.code === 0) {
      const cateList = result.data
    //  console.log('getCateList');
      commit(RECEIVE_CATELIST, {cateList})
    }
  },
  async getBanner ({commit}) {
    const result = await reqRealB()
    //console.log('getBanner',result);
    if (result.code === 0) {
      const banners = result.data
     // console.log('getBanner');
      commit(RECEIVE_BANNER, {banners})
    }
  },
  async getColumn ({commit}) {
    const result = await reqRealC()
    //console.log('getColumn',result);
    if (result.code === 0) {
      const columns = result.data
     // console.log('getColumn');
      commit(RECEIVE_COLUMN, {columns})
    }
  },
  async getRecommend ({commit}) {
    const result = await reqRealR()
    //console.log('getRecommend',result);
    if (result.code === 0) {
      const recommend = result.data
     //console.log('getRecommend');
      commit(RECEIVE_RECOMMEND, {recommend})
    }
  },
  async getTenfifteens ({commit}) {
    const result = await reqRealS()
    //console.log('getTenfifteens',result);
    if (result.code === 0) {
      const tenfifteens = result.data
    // console.log('getTenfifteens');
      commit(RECEIVE_TENFIFTEENS, {tenfifteens})
    }
  },
  async getCategorys ({commit},cb) {
    const result = await reqCategoryData()
    console.log('getCategorys',result);
    if (result.code === 0) {
      const categorys = result.data
      console.log('getCategorys');
      commit(RECEIVE_CATEGORYS, {categorys})
      cb && cb()
    }
  },


}*/
