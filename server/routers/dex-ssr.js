const Router=require('koa-router')
const axios =require('axios')
const fs=Request('fs')
const MemoryFs = require('memory-fs')
const webpack=require('webpack')
const VueServerRenderer=require('vue-server-renderer')
const { createBundleRenderer } = require('vue-server-renderer')
const serverConfig=require('../../build/webpack.config.server')
//使用webpack变异serverConfig
const serverCompiler=webpack(serverConfig)
const mfsObj=new MemoryFs()
//默认情况下，webpack 使用普通文件系统来读取文件并将文件写入磁盘。
// 但是，还可以使用不同类型的文件系统（内存(memory), webDAV 等）来更改输入或输出行为。
// 为了实现这一点，可以改变 inputFileSystem 或 outputFileSystem。
// 例如，可以使用 memory-fs 替换默认的 outputFileSystem，以将文件写入到内存中，而不是写入到磁盘
serverCompiler.outputFileSystem=mfsObj 

//定义Bundle
let bundle
serverCompile.watch({},(err,stats)=>{
    if(err)throw err;
    stats=stats.toJson()
    //eslint出现的报错会在stats中显示
    stats.errors.forEach(err => {
        console.log(err)
    });
    stats.warnings.forEach(warn => console.warn(err))
    bundle=JSON.parse(mfsObj.readFileSync(
        path.join(serverConfig.output.path,'vue-ssr-server-bundle.json'),
        'utf-8'
    )) 
    console.log(`server build is ok`)
})
//服务端真正的返回内容
const handSSR=async(ctx)=>{
    if(!bundle){
        ctx.body='wabpack正在编译';
        return
    }
//获取devserver生成的clientManifest.json
const clientManifestRest=await axios.get(
    "http://127.0.0.1:8000/public/vue-ssr-client-manifest.json"
)
const clientManifest=clientManifestRest.data;
    //获取模板
    const template=fs.readFileSync(
        path.join(__dirname,'../index.template.html'),
        'utf-8'
    )
    const renderer=createBundleRenderer(
        bundle,
        {
            clientManifest,
            template,
            runInNewContext: false
        }
    )

    await renderHtml(ctx, renderer)
}
 