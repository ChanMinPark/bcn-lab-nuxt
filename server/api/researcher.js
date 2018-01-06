import { Router } from 'express'

const router = Router()

const researcher = [
  {
    name: 'Rehmat Ullah',
    position: 'Ph.D. Student',
    email: 'rehmat_ciit@hotmail.com',
    image: '/img/member/rehmat.jpg'
  },
  {
    name: 'Atif Rehman',
    position: 'Ph.D. Student',
    email: 'atif_r@outlook.com',
    image: '/img/member/atif.png'
  },
  {
    name: 'Sung-Hoon Mah',
    position: 'M.S.Student',
    email: 'akgns0110@naver.com',
    interest: 'Home Network',
    image: '/img/member/sunghoon.jpg'
  },
  {
    name: 'Hyun-doo Jin',
    position: 'M.S.Student',
    email: 'wnsrkdy@naver.com',
    interest: 'Home Network',
    image: '/img/member/hyundoo.jpg'
  },
  {
    name: 'Dong-Hak Kim',
    position: 'Intern',
    email: 'rlaehdgkr7@naver.com',
    interest: 'Programming',
    image: '/img/member/Donghak.jpg'
  }
]

/* GET listing. */
router.get('/researcher', function (req, res, next) {
  res.json(researcher)
})

export default router
