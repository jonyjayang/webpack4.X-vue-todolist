const Router=require('koa-router')
const axios =require('axios')
const MemoryFs = require('memory-fs')
const webpack=require('webpack')
const VueServerRenderer=require('vue-server-renderer')

const serverConfig=require('../../build/webpack.config.server')
//使用webpack变异serverConfig
const serverCompiler=webpack(serverConfig)
const mfsObj=new MemoryFs()
//默认情况下，webpack 使用普通文件系统来读取文件并将文件写入磁盘。
// 但是，还可以使用不同类型的文件系统（内存(memory), webDAV 等）来更改输入或输出行为。
// 为了实现这一点，可以改变 inputFileSystem 或 outputFileSystem。
// 例如，可以使用 memory-fs 替换默认的 outputFileSystem，以将文件写入到内存中，而不是写入到磁盘
serverCompiler.outputFileSystem=mfsObj 

 