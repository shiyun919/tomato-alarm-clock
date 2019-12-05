
const { host, t_app_id, t_app_secret } = getApp().globalData
const _http = (url,data,method)=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url: `${host}${url}`,
      data: data,
      header: {
        Authorization: `Bearer ${wx.getStorageSync('X-token')}`,
        t_app_id: t_app_id,
        t_app_secret: t_app_secret,
      },
      method: method,
      dataType: 'json',
      success: (response)=>{
        //未登录 401
        //没权限 403
        //找不到 404
        //服务器内部错误 500
        let statusCode = response.statusCode
        console.log(statusCode)
        if(statusCode >= 400){
          reject({statusCode, response})
          wx.showToast({
            title: '没权限访问',
            icon: 'none',

          })
        }else{
          resolve({statusCode, response})
        }
      },
      fail:(errors)=>{
        wx.showToast({
          title: '请求失败',
          //icon: 'none',
          
        })
          reject(errors)
      },
    })
  })
}


  
  const http = {
    get: (url, params) => _http(url, params, 'GET'),
    post: (url, data) => _http(url, data, 'POST'),
    put: (url, data) => _http(url, data, 'PUT'),
    delete: (url, data) => _http(url, data, 'DELETE')
  
  }

module.exports = {
  http
}