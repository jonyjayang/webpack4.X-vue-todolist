const Koa=require('koa')
const path=require('path')
const send =require('koa-send')
const routerEntryRender=require('./routers/dex-ssr')
const app=new Koa()

const isDev=process.env.NODE_ENV==='development'

//通用拦截请求
app.use(async(ctx,next)=>{
    try{
        console.log(`request url is :${ctx.path}`)
        await next()
    }catch(err){
        ctx.status=500
        if(isDev){
            console.log(err.message)
            ctx.body=err.message
        }else{
            ctx.body=`please try again later`
        }
    }
})