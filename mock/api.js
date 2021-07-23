const fs = require('fs')//这是属于node中的包专门用于读取文件内容
//根据传递过来的文件名称读取文件内容
function fromJsonFile(fileName) {
  //req；表示接收浏览器发送过来的数据（request）
  //res：表示将数据返回给浏览器（response）
  return (req, res) => {
    const data = fs.readFileSync(`mock/data/${fileName}.json`).toString();
    const jsonData = JSON.parse(data);
    return res.json(jsonData)
  }
}

const proxy = {
  //定义mock接口，接收前端请求,接收到调用方法获取数据返回
  'GET /api/getSwipe': fromJsonFile('Swipe')
}
//必须导出，不然home.vue中使用this.$axios.get('/getSwipe)将访问不到
module.exports = proxy
