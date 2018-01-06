import { Router } from 'express'

const router = Router()

const alumni = [
  {
    name: 'Tran Dinh Hieu',
    position: 'M.S. 2017',
    now: 'Ph.D Student at Chungbuk National University',
    image: '/img/member/hieu.png'
  },
  {
    name: 'Hong-Min Bae',
    position: 'M.S. 2017',
    now: 'LOTTE Data Communication Company',
    image: '/img/member/hongmin.JPG'
  },
  {
    name: 'Rana Asif Rehman',
    position: 'Ph.D. 2016',
    now: 'Assistant Professor at National University of Computer & Emerging Sciences (NUCES-FAST) , Pakistan',
    image: '/img/member/asif.jpg'
  },
  {
    name: 'Chan-Min Park',
    position: 'M.S. 2016',
    now: 'Aart',
    image: '/img/member/chanmin.JPG'
  },
  {
    name: 'Shin-Il Suh',
    position: 'M.S. 2016',
    now: 'SOS Telecom',
    image: '/img/member/sinil.JPG'
  },
  {
    name: 'Muhammad Khalil Afzal',
    position: 'Ph.D. 2015, Co-chair with Prof. Sung Won Kim at YeungNam University',
    now: 'Assistant Professor in COMSATS Institute of Info. Tech. at Wah, Parkistan',
    image: '/img/member/alumni.JPG'
  },
  {
    name: 'Seung Jin Lee',
    position: 'M.S. 2014',
    now: 'SimNet',
    image: '/img/member/alumni.JPG'
  },
  {
    name: 'Sea Won Han',
    position: 'Ph.D. Student, M.S. 2012',
    now: 'Korea Radio Promotion Association',
    image: '/img/member/alumni.JPG'
  },
  {
    name: 'Hyun Ho Shin',
    position: 'M.S. 2013',
    now: 'Samsung Electronics',
    image: '/img/member/alumni.JPG'
  },
  {
    name: 'Ji Hoon Park',
    position: 'M.S. 2013',
    now: 'Nongshim Data Systems',
    image: '/img/member/alumni.JPG'
  }
]

/* GET listing. */
router.get('/alumni', function (req, res, next) {
  res.json(alumni)
})

export default router
