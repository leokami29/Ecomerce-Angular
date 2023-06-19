import  routerx  from "express-promise-router";
import User from './UserRouter'

const  router = routerx();

router.use('/user',User);

// router.use('/products',Products);

export default router