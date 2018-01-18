import { Router } from 'express'

const router = Router()

const project = {
  onGoing: [
    {
      period: '2017.11 ~ 2018.10',
      title: '"Development of User-Defined Data-Share Service-based Wireless 3D Printer" (Ministry of SMEs and Startups)'
    },
    {
      period: '2015.11 ~ 2018.10',
      title: '"Research on Multi-Protocol-Stack-based Context-Adaptive Networking Technology" (National Research Foundation of Korea )',
      link: 'http://bcnlab.hongik.ac.kr/images/project/slide3.jpg'
    }
  ],
  completed: [
    {
      period: '2016.10 ~ 2017.10',
      title: '"Development of Collaboration System for Building Information Modeling (BIM)" (Small and Medium Business Administration )'
    },
    {
      period: '2014.10 ~ 2017.09',
      title: '"Research on context-awareness-based residential design technology for the elderly with energy reduction" (National Research Foundation of Korea )',
      link: 'http://bcnlab.hongik.ac.kr/images/project/slide4.jpg'
    },
    {
      period: '2013.06 ~ 2016.05',
      title: '"Research on Context-Adaptive Wireless Content-Centric (W-CCN) Networks" (National Research Foundation of Korea )',
      link: 'http://bcnlab.hongik.ac.kr/images/project/slide2.jpg'
    },
    {
      period: '2015.05 ~ 2016.04',
      title: '"Development of Visual-Model-based Algorithm Automatic Generation Tool for Financial Asset Management." (Small and Medium Business Administration )',
      link: 'http://bcnlab.hongik.ac.kr/images/project/slide5.jpg'
    },
    {
      period: '2014.06 ~ 2015.05',
      title: '"Development of Traffic Survey System using DSRC and Rader Detectors" (Small and Medium Business Administration )'
    },
    {
      period: '2006.11 ~ 2014.12',
      title: '"Research on Millitary IT Tactical Communications Technologies" (National IT Industry Promotion Agency)'
    },
    {
      period: '2014.05 ~ 2014.12',
      title: '"Simulator Implementation for Wireless CCN-based Group Communication over IoT Environment in Smart City Safety Networks" (The International Science & Business Belt )'
    },
    {
      period: '2010.05 ~ 2013.04',
      title: '"Research on Wireless multicast for efficient multimedia group communication over wireless distributed networks" (National Research Foundation of Korea )'
    },
    {
      period: '2009.09 ~ 2012.08',
      title: '"Research on total solution for Heterogeneous-based Next Generation Public Safety Networks" (National Research Foundation of Korea )'
    },
    {
      period: '2010.05 ~ 2010.12',
      title: '"Analysis on OmniFlow-Crosslayer-based Technologies for QoS control over Wireless Networks" (Electronics and Telecommunications Research Institute (ETRI))'
    },
    {
      period: '2008.10 ~ 2010.09',
      title: '"Development of University Course Program for Science and Engineering area" (Korea Research Foundation)'
    },
    {
      period: '2009.05 ~ 2009.11',
      title: '"Technology Analysis for xGMIP over Mobile Ad-Hoc Networks" (Electronics and Telecommunications Research Institute (ETRI))'
    },
    {
      period: '2008.07 ~ 2009.06',
      title: '"Reliable Data Communication over Next Generation Bradband Wireless Networks for Public Safety (Korea Research Foundation)'
    },
    {
      period: '2007.09 ~ 2008.08',
      title: '"Enhanced Scheduling algorithm and Protocol for Wireless Data Network" (Hongik University)'
    }
  ]
}

/* GET listing. */
router.get('/project', function (req, res, next) {
  res.json(project)
})

export default router
