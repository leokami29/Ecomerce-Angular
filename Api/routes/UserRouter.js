//importar routerx
import routerx from 'express-promise-router'
import UserControlloers from '../controllers/UserControlloers'
import auth from '../middelwares/auth';

const router = routerx();

router.post("/register", UserControlloers.register)
router.put("/update", UserControlloers.update)
router.get("/list",  auth.verifyAdmin, UserControlloers.list)
router.post("/login", UserControlloers.login)
router.delete("/delete", UserControlloers.remove)

export default router