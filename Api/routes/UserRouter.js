//importar routerx
import routerx from 'express-promise-router'
import UserControlloers from '../controllers/UserControlloers'

const router = routerx();

router.post("/register", UserControlloers.register)
router.put("/update", UserControlloers.update)
router.get("/list", UserControlloers.list)
router.put("/login", UserControlloers.login)
router.delete("/delete", UserControlloers.remove)

export default router