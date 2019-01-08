module.exports=async (ctx,render)=>{
    ctx.header['Content-Type']='text/html'
    const context={url:ctx.path}

    try{
        await renderer.renderToString(context,(err,html)=>{
            if(!err){
                ctx.body=html
            }
        })
    }catch(err){
        ctx.status=500
        throw err
    }
}