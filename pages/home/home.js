// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'YM',
    age: 18,
    students: [
      {id: 110, name: 'kobe', age: 30},
      {id: 111, name: 'kuli', age: 31},
      {id: 112, name: 'james', age: 35}
    ],
    counter: 0
  },
  handleBtnClick() {
    // 错误做法
    // this.data.counter++
    // console.log(this.data.counter)
    // this.setData()
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  }

  
})

// 编程范式：
// 1.命令式编程：原生操作dom
// 2.声明式编程：Vue/React/Angular