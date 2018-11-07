//导入http内置模块
const http = require('http')
const urlModule = require('url') //这个核心模块能帮我们解析URL地址，从而拿到pathname query

//创建http服务器
const server = http.createServer()

//监听http服务器的request请求
server.on('request', function(req, res){
    // const url = req.url
    const { pathname:url, query } =urlModule.parse(req.url,true)

    if(url === '/getscript'){
        //拼接一个合法的js脚本，这里拼接的是一个方法的调用,发送给客户端
        // var scriptStr = 'showScipt()'

        var data = {
            name:'zx',
            age:18,
        }
        var scriptStr = `${query.callback}(${JSON.stringify(data)})`//json对象不能直接调用toString()方法
        res.end(scriptStr)
    }else{
        res.end('404')
    }
})

server.listen(3000, function(){
    console.log('server listen at localhost:3000')
})
//启动服务器 nodemon app ,需要npm install -g nodemon 

/*
  启动node服务：
  1.cmd进入node后输入npm install -g nodemon 
  2.新建终端
  3.进入app.js（拿本例来说）所在目录：F:\MyCode\GitRepository\VueJsDemo\node-server\day2
  4.输入命令：nodemon app 即可开启服务
  */