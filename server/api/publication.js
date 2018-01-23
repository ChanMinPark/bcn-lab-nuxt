import { Router } from 'express'

const router = Router()

const publication = {
  journal: [
    `Farhana Javed, Muhamamd Khalil Afzal, Malik Sharif and Byung-Seo Kim, “Internet of Things (IOTs) Operating Systems Support, Networking Technologies, Applications and Challenges: A Comparative Review,” IEEE Communications Surveys and Tutorials (jan. 20th. 2018). [ISSN: 1553-877X]`,
    `Ayesha Naz, Hafiz M. Asif, Tariq Umer, and Byung-Seo Kim, “PDOA based indoor Positioning using Visible Light Communication,” IEEE Access, Accepted(jan. 11st. 2018).[ISSN: 2169-3536]`,
    `Sarzamin Khan, Sheraz Anjum, Usman Ali Gulzari, Tariq Umer, and Byung Seo Kim, “Bandwidth-Constrained Multi-Objective Segmented Brute-Force Algorithm for Efficient Mapping of Embedded Applications on NoC Architecture,” IEEE Access, Accepted(Nov. 20th. 2017).[ISSN: 2169-3536]`,
    `Rana Asif Rehman and Byung-Seo Kim, “LOMCF: Forwarding and Caching in Named Data Networking-based MANETs,” IEEE Transactions on Vehicular Technology, Vol. 66, No. 10, pp. 9350 - 9364, October 2017 [ISSN : 0018-9545]`,
    `Rehmat Ullah, Yasir Faheem, and Byung Seo Kim, “Energy and Congestion-Aware Routing Metric for Smart Grid AMI Networks in Smart City,” IEEE Access, Vol. 5, No. 1, pp.13799-13810, July 18th, 2017. [ISSN: 2169-3536]`,
    `Chan Min Park, Rana Asif Rehman, and Byung-Seo Kim, “Packet Flooding Mitigation in CCN-based Wireless Multimedia Sensor Networks for Smart Cities,” IEEE Access, Vol. 5, No. 1, pp.11054-11062, June 14th 2017. [ISSN: 2169-3536]`,
    `Muhammad Amjad, Muhammad Khalil Afzal, Tariq Umer, and Byung-Seo Kim, “QoS-Aware and Heterogeneously Clustered Routing Protocol for Wireless Sensor Networks, IEEE Access, Vol. 5, No. 1, pp.10250-10262, 6th June 2017. [ISSN: 2169-3536]`,
    `Tariq Umer, Mubashir Husain Rehmani, Zhi Guo Ding, Byung-Seo Kim, and Samee U. Khan, “IEEE Access Special Section Editorial: Resource Management in Vehicular Adhoc Networks: Energy Management, Communication Protocol and Future Applications,” IEEE Access, Vol. 5, pp.7839-7842, 2nd June 2017.`,
    `Dung T. Le, Hieu D. Tran, Seong-Gon Choi, Byung-Seo Kim, and Beongku An, “Impact of Beamforming on the Path Connectivity in Cognitive Radio Ad-hoc Networks,” Sensors, Vol. 17, No. 4, pp. 1-14, March 27th 2017. [ISSN: 1022-0038]`,
    `Rana Asif Rehman, Syed Hassan Ahmed, and Byung-Seo Kim, “OEFS: On-demand Energy-based Forwarding Strategy for Named Data Wireless Ad Hoc Networks,” IEEE Access, Vol. 5, pp.6075-6086, 20th March 2017 [ISSN : 0018-9545]`,
    `Byung-Seo Kim, Sung Won Kim, Chi Zhang, and Hao Yue, "A Breakthrough in Multi-Hop Wireless Multimedia Sensor Networking Protocols," SAGE International Journal of Distributed Sensor Networks, vol. 13, no. 3, 13th March 2017. [ISSN: 15501477]`,
    `Rashid Ali, Sung Won Kim, Byung-Seo Kim, and Yongwan Park, “Design of MAC Layer Resource Allocation Schemes for IEEE 802.11ax: Future Directions,” IETE Technical Review, vol. 2016, pp. 1-25, November 24th 2016. [ISSN: 0256-4602]`,
    `Chan-Min Park and Byung-Seo Kim, "Interest-Selective Retransmision Protocol for Wireless Content-Centric Networks," IEICE Transactions on Fundamentals of Electronics, Communications and Computer Sciences, Vol.E99-A, No.09, pp.1753-1757, September 2016.[ISSN: 1745-1337]`,
    `Hieu Dinh Tran, Dung The Le, and Byung-Seo Kim, "Stability-Aware Geographic Routing in Energy Harvesting Wireless Sensor Networks," Sensors, Vol. 16, No.5, pp.1-15, May 14th 2016.[ISSN: 1022-0038]`,
    `Muhammad Khalil Afzal, Byung-Seo Kim, Seung Yeob Nam, and Sung Won Kim,, "SNR-based relay selection in cooperative wireless ad hoc networks," International Journal of Ad Hoc and Ubiquitous Computing, Accepted (Feb. 25th. 2016).[ISSN: 1743-8225]`,
    `Rana Asif Rehman and Byung-Seo Kim, "Location-Aware Forwarding and Caching in CCN-based Mobile Ad Hoc Networks," IEICE Transactions on Information and System, Vol. E99-D, No.5, pp.1388-1391, May. 2016.[ISSN: 1745-1361]`,
    `Gyanendra P. Joshi, Seung Yeob Nam, Sung W. Kim and Byung-Seo Kim, "Adaptive Window Size-based Medium AccessControl Protocol for Cognitive Radio Wireless Sensor Networks," Journal of Sensors, vol. 2016, Article ID 2049859, 9 pages, 2016. doi:10.1155/2016/2049859, January 28th 2016. [ISSN: 1687-725X]`,
    `Jeongyeup Paek and Byung-Seo Kim, "Enhancing IEEE 802.15.4-based Wireless Networks to handle Loss of Beacon Frames," IEICE Transactions on Information and System, Vol.E98-D, No.12, pp.2333 - 2336, Dec. 2015. [ISSN: 1745-1361]`,
    `Rana Asif Rehman and Byung-Seo Kim, "Energy Aware Forwarding in Content Centric based Multihop Wireless Ad hoc Networks," IEICE Transactions on Fundamentals of Electronics, Communications and Computer Sciences, vol.E98-A,no.12, pp.2738 - 2742,Dec. 2015.[ISSN: 1745-1337]`,
    `Shinil Suh, Byung-Seo Kim, and Jae Hee Chung, "Convergence Research Directions in Cognitive Sensor Networks for Elderly Housing Design," International Journal of Distributed Sensor Networks, vol. 2015, Article ID 196280, 11 pages, doi:10.1155/2015/196280, October 1st, 2015. [ISSN: 1550-1329]`,
    `Rana Asif Rehman, Jong Kim and, Byung-Seo Kim, "NDN-CRAHNs: Named Data Networking for Cognitive Radio Ad Hoc Networks," Mobile Information Systems, Vol. 2015, Article ID 281893, 12 pages, 8th June 2015. [doi:10.1155/2015/281893]. [ISSN: 1574-017X]`,
    `Byung-Seo Kim, Sung Won Kim, Chi Zhang, and Miao Pan, "A Breakthrough in Multi-Hop Wireless Multimedia Sensor Networking Protocols," International Journal of Distributed Sensor Networks, vol. 2015, Article ID 921040, 26th March 2015. [ISSN: 1550-1329]`,
    `Muhammad Khalil Afzal, Byung-Seo Kim, and Sung Won Kim, "Efficient and Reliable MPEG-4 Multicast MAC Protocol for Wireless Networks,"IEEE Transactions on Vehicular Technolog, pp. 1026 - 1035, vol. 64, no. 3, March 2015. [ISSN: 0018-9545]`,
    `Rana Asif Rehman and Byung-Seo Kim, "L2ER: Low-Latency and Energy-based Routing Protocol for Cognitive Radio Ad Hoc Networks," International Journal of Distributed Sensor Networks, vol. 2014, Article ID 963202, 9 pages, 11th September 2014.[doi:10.1155/2014/963202] [ISSN: 1550-1329]`,
    `Gyanendra Prasad Joshi, Srijana Acharya, Chang-Su Kim, Byung-Seo Kim, and Sung Won Kim, "Smart Solutions in Elderly Care Facilities with RFID System and Its Integration with Wireless Sensor Networks," International Journal of Distributed Sensor Networks,vol. 2014, Article ID 713946, 11 pages, 27th August 2014.[doi:10.1155/2014/713946] [ISSN: 1550-1329]`,
    `Ji-Hoon Park and Byung-Seo Kim, "Reliable-Beacon-Transmission-based MAC Protocol for LR-WPANs over WLAN Interferences," Frontiers of Information Technology & Electronic Engineering, Vol. 15, No. 6, pp. 470 - 481, June 2014.[ISSN: 1869-1951]`,
    `Sewon Han and Byung-Seo Kim "Performance Enhancements in MIL-STD-188-220-based Tactical Communication Systems," IEICE Fundamentals of Electronics, Communications and Computer Sciences, Vol.E97-A, No.2, pp.713 - 716,February 2014.[ISSN: 1745-1337]`,
    `Muhammad Khalil Afzal, Byung-Seo Kim, and Sung Won Kim, "A Leader-Based Reliable Multicast MAC Protocol for Multimedia Applications," KSII Transactions on Internet and Information Systems , Vol. 8, No.1, pp. 183 - 195, January 2014.[ISSN: 2095-9184]`,
    `Ji-Hoon Park and Byung-Seo Kim "Performance Improvements on LR-WPANs over Interference from WLANs," IEICE Transactions on Information and Systems, Vol.E97-D, No.1, pp.151 - 154, January 2014.[ISSN: 1745-1361]`,
    `Sewon Han and Byung-Seo Kim "Efficient Voice Transmissions for MIL-STD-188-220- based Wideband Tactical Systems," IEICE Transactions on Communications, Vol.E95-B, No.09, pp. 2964 - 2967, September 2012.[ISSN: 1745-1345]`,
    `Sung Won Kim, Byung-Seo Kim, and Randy L. Ekl, "Efficient Retransmission Methods in Wireless MAC Protocol for Multicast," Wireless Personal Communications, Vol. 63, No. 3, pp. 613 - 626, April 2012.[ISSN: 0929-6212]`,
    `Sung Won Kim and Byung-Seo Kim, and Inkyu Lee "MAC protocol for Reliable Multicast over Multi-Hop Wireless Ad Hoc Networks," Journal of Communications and Networks (JCN), Vol. 14, No. 1, February 2012.[ISSN: 1229-2370]`,
    `Sung Won Kim and Byung-Seo Kim, "Rate-Adaptive MAC Protocol for Wireless Multicast over OFDMA-Based MANETs," Wireless Personal Communications, Vol. 56, Issue 4, pp. 675 ~ 692, February 1 2011.[ISSN: 0929-6212]`,
    `Byung-Seo Kim and Sung Won Kim, "Retransmission Decision Method for Wireless Multicast in Ad-Hoc Networks," IEICE Transactions on Communications, Vol.E94-B, No.02, pp.580 - 582, Feb. 2011.[ISSN: 1745-1345]`,
    `Sung Won Kim, Byung-Seo Kim, and Yuguang Fang, "'Network Allocation Vector (NAV)-based Opportunistic Pre-Scanning Process for WLANs," IET Electronics Letters, Vol. 46, Issue 24, November 25 2010.[ISSN: 0013-5194]`,
    `Sung Won Kim, Byung-Seo Kim, and Sung Back Hong "Efficient MAC Protocol for Subcarrier-wise Rate Adaptation over WLAN," Eurasip Journal on Wireless Communcations and Networking, Vol. 2010, Article ID 264838, doi:10.1155/2010/264838, July 2010. (On-Line)[ISSN: 1687-1499]`,
    `Byung-Seo Kim, Sung Won Kim, Yuguang Fang,and Tan Wong "Feedback-Assisted MAC Protocol for Real Time Traffics in High Rate Wireless Personal Area Networks," ACM Wireless Networks, Vol. 16, No. 4, pp. 1109 - 1121, May 2010.[ISSN: 1022-0038]`,
    `Byung-Seo Kim, Sung Won Kim, and Kook-Yeol Yoo "Link-Adaptive MAC Protocol for Wireless Multicast," IEICE Transactions on Communications, Vol.E92-B, No.12, December 2009.[ISSN: 1745-1345]`,
    `Sung Won Kim, and Byung-Seo Kim, "OFDMA-based Reliable Multicast MAC Protocol for Wireless Ad-Hoc Networks ," ETRI Journal, Vol. 31, No. 1, pp. 83 - 85, February 2009.[ISSN: 1225-6463]`,
    `Byung-Seo Kim, "Link-Adaptive Physical Layer for Indoor Broadband Power Line Communications," IEEE Transactions on Power Delivery, Vol. 24, No. 1, pp. 103 - 110, January 1st 2009.[ISSN: 0885-8977]`,
    `Byung-Seo Kim and Sung Won Kim, "Overhead Reduction in Rate-Adaptive MAC over OFDM-based Wireless Networks," IEE Electronics Letters, Vol. 44, No. 22, pp. 1312 - 1313, October 23rd 2008.[ISSN: 0013-5194]`,
    `Byung-Seo Kim, Sung Won Kim, Yong Xi, and Hong Young Ahn, "Enhanced MAC Protocol and Scheduling Algorithm for High Rate WPANs," Chinese Journal of Electronics, Vol. 17, No. 4, page 691 - 697, October 2008.[ISSN: 1022-4653]`,
    `Byung-Seo Kim, Sung Won Kim, and Randy Ekl, "OFDMA-based Reliable Multicasting MAC protocol for WLANs," IEEE Transactions on Vehicular Technology, Vol. 57, No. 5, September 2008.[ISSN: 0018-9545]`,
    `Yu Wu, Yong Xi, Byung-Seo Kim, and Ji-Bo Wei, "PFQ-OS: A Packet Fair Queueing based Opportunistic Scheduler in Wireless Networks," Chinese Journal of Electronics, vol. 16, No. 2, pp. 333 - 339, April 2008.[ISSN: 1022-4653]`,
    `Sungwon Kim and Byung-Seo Kim, "Reliable multicast MAC protocol for wireless Ad Hoc networks," Lecture Notes in Computer Science (LNCS), vol. 4611, pp. 276 - 284, Springer-Verlag, July 2007.`,
    `Yong Xi, Byung-Seo Kim, Ji-bo Wei, and Zaho-Wen Zhuang, "Channel Adaptive Fragmentation Mechanism for IEEE 802.11 WLANs" Chinese Journal of Electronics, Vol. 12, pp. 299 - 304, April 2007.[ISSN: 1022-4653]`,
    `Sung Won Kim and Byung-Seo Kim "Adaptive cross-Layer packet scheduling method for multimedia services in wireless personal area networks" IEEE/Journal on Communications and Networks (JCN), Vol. 5, No. 3, September 2006.[ISSN: 1229-2370]`,
    `Sung Won Kim and Byung-Seo Kim "Resource allocation based on traffic load over relayed wireless access networks" Lecture Notes in Computer Science (LNCS), vol. 3820, pp. 441 - 451, Springer-Verlag, December 2005.`,
    `Sung Won Kim and Byung-Seo Kim "Power-efficient packet scheduling method for IEEE 802.15.3 WPAN" Lecture Notes in Computer Science (LNCS), vol. 3820, pp. 462 - 472, Springer-Verlag, December 2005.`,
    `Byung-Seo Kim, Yuguang Fang, Tan Wong, and Younggoo Kwon "Throughput Enhancement through Dynamic Fragmentation in Wireless LANs" IEEE Transactions on Vehicular Technology, Vol. 54, No. 4, July 2005.[ISSN: 0018-9545]`,
    `Byung-Seo Kim, Sung Won Kim, Yuguang Fang, and Tan Wong "Two-Step Multipolling Scheme in PCF of Wireless LANs" IEEE Journal on Selected Areas in Communications (special issue on Mobile Computing and Networking), Vol. 23, No. 6 pp. 1276 - 1286, Jun 2005.`,
    `Sung Won Kim, Byung-Seo Kim, and Yuguang Fang "Resource Allocation of Downlink and Uplink for IEEE 802.11 Wireless LANs" IEEE Transactions on Vehicular Technology, Vol. 54, No. 1, pp. 320 - 327, January 2005.[ISSN: 0018-9545]`,
    `Sung Won Kim, Byung-Seo Kim, and Yuguang Fang "MAC Protocol for Resource Allocation in a Hotspot Microcell" IEE Electronics Letters, Vol. 40, No. 22, pp. 1426 - 1427, October 2004.[ISSN: 0013-5194]`
  ],
  conference: [
    
  ],
  patents: [
    
  ]
}

/* GET listing. */
router.get('/publication', function (req, res, next) {
  if (req.query.type === 'journal') {
    res.json(publication.journal)
  } else if (req.query.type === 'conference') {
    res.json(publication.conference)
  } else if (req.query.type === 'patents') {
    res.json(publication.patents)
  } else {
    res.json({})
  }
})

export default router
