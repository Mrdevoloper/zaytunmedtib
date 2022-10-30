import * as express from 'express'

const errorhandler = (err:Error, req:express.Request, res:express.Response, next:express.NextFunction) => {
    if(err){
        console.log('Error handled')
        console.log('Error from ', req.path)
        console.log(err.message)
    }else{
        next()
    }


}

export default errorhandler;