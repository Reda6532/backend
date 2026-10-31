const logger=(req,res,next)=>{
    const heure=new Date().toLocaleDateString()
    console.log(`${heure} ${req.method} ${req.url}`)
    next()
}
export default logger