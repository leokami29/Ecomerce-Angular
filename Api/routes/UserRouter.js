//importar routerx
import routerx from 'express-promise-router'
import UserControlloers from '../controllers/UserControlloers'

const router = routerx();

router.post("/register", UserControlloers.register)
router.put("/update", UserControlloers.update)

export default router