import { Router } from 'express'

import researcher from './researcher'
import alumni from './alumni'
import project from './project'

const router = Router()

// Add Routes
router.use(researcher)
router.use(alumni)
router.use(project)

export default router
