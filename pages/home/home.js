// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [
      { id: 1, text: "实施四点半但我觉得冰岛大狙灯具", finished: true },
      { id: 2, text: "实施四点半但我觉得冰岛大狙灯具fff", finished: false },
      { id: 3, text: "实施四点半但我觉得冰岛大狙灯具5555", finished: false },
      { id: 4, text: "实施四点半但我觉得冰岛大狙灯具5555", finished: false }
    ],
    visible: false,
  },
  showSubmission(){
    this.setData({
      visible: true
    })
  },
  confirm(event){
    console.log(event)
    console.log(event.detail) //子组件传过来的参数值
    let content = event.detail
    if (content){
      let newList = [{id:this.data.lists.length + 1, text:content, finished:false}]
      newList.concat(this.data.lists)  //合并数组
      this.data.lists = newList.concat(this.data.lists)    //将新数组重新赋值
      this.setData({
        lists: this.data.lists
      })
      this.cancel()
    }else{

    }
    
    
  },
  destroyList(e){
    console.log(e)
    console.log(e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index
    this.data.lists[index].finished = true
    this.setData({
      lists: this.data.lists
    })
  },
  cancel(){
    this.setData({
      visible: false
    })
  }
  
})