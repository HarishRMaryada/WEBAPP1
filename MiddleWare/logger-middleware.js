

module.exports  = (app) =>
{
  app.use(
    logger = (req,res,next) => {
      console.log(req.ip)
      next()
    }
  )
}
