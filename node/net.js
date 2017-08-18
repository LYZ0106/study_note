const net = require('net')

const server = net.createServer( () => {
  console.log('成功后打印')
})

server.on('error',(err)=>{
  throw err
})

server.listen(4646,()=>{
  console.log('成功监听')
})