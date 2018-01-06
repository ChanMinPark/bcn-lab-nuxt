import { Router } from 'express'

import researcher from './researcher'
import alumni from './alumni'

const router = Router()

// Add Routes
router.use(researcher)
router.use(alumni)

export default router
