const validateCreateProuctDto=(req,res,next)=>
{  
    const {title,price,stock}=req.body;
    if(title===undefined || title===null || typeof title!=="string" || title.length < 2)
    {
        res.status(400);
        res.json({
            status:'fail',
            message:'Invalid fail',
        })
    }
    if(price===undefined || price===null || Number(price)===NaN || price<0)
    {
        res.status(400);
        res.json({
            status:'fail',
            message:'Invalid fail',
        })
    }
    if(stock===undefined || stock===null || stock<0)
    {
        res.status(400);
        res.json({
            status:'fail',
            message:'Invalid fail',
        })
    }
}