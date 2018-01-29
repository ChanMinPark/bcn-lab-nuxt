import { Router } from 'express'

const router = Router()

const publication = {
  journal: {
    sci: [
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
    nonSci: [
      `Chan Soon Choi, Jae Hee Chung, Byung-Seo Kim, Jong Kim, “A Study on Modular-based Prototypes for the Elderly Housing,” Advanced Science Letters, July 2017`,
      `Tran Dinh Hieu, Le The Dung, Byung-Seo Kim, and Jeongho Cho, "Simulation modeling of the reliability of wireless sensor networks under energy harvesting constraints,” Far East Journal of Electronics and Communications, Vol. 17, No. 2, pp. 497-506, May 2017. [ISSN: 0973-7006]`,
      `Rashid Ali, Summara Asghar, Maria Spante, Sung Won Kim, and Byung-Seo Kim, “Comppetence Development at Workplace: A Work Integrated Informal Learning (WILL),” Far East Journal of Electronics and Communications, Vol. 2, pp. 35-42, September 2016. [ISSN: 0973-7006]`,
      `Jeongho Cho, Dong-Gi Kwag, and Byung-Seo Kim, and Sung Won Kim, "Control of Chaotic Resonance Phenomena using Prototypes in Manifold Forms," Indian Journal of Science and Technology, Vol. 8, No. 26, pp. 1 - 7, October 2015. [ISSN: 0974-6846]`,
      `Muhammad Khalil Afzal, Byung-Seo Kim, and Sung Won Kim, "Performance Evaluations of MPEG-4 Video Traffic Services over Fading Channel-based MANETs," Information, Vol. 16, No. 10A, pp. 7711 - 7716, October 2013.`,
      `Ji-Hoon Park and Byung-Seo Kim, "Enhancements on the Loss of Beacon Frames in LR-WPANs," Lecture Notes in Electrical Engineering (LNEE), vol. 240. pp. 27 - 33, May 2013.`,
      `Sewon Han and Byung-Seo Kim, "Performance Improvements Using Upgrading Precedences in MIL-STD-188-220 Standard," Lecture Notes in Electrical Engineering (LNEE), vol. 240. pp. 827 - 833, May 2013.`,
      `Hyun-Ho Shin, Seungjin Lee, and Byung-Seo Kim, "Enhancements for Local Repair in AODV-Based Ad-Hoc Networks," Lecture Notes in Computer Science (LNCS), vol. 7861. pp. 570 - 576, May 2013.`,
      `Muhammad Khalil Afzal, Byung-Seo Kim, and Sung Won Kim, "A Leader-based Reliable Multicast MAC Protocol for MPEG-4 Traffic," Lecture Notes in Computer Science (LNCS), vol. 7646. pp. 111 - 119, November 2012.`,
      `Hyun-Ho Shin and Byung-Seo Kim, "Performance Evaluations on Local-Repair of AODV Protocol over IP-based Ad-Hoc Networks" Lecture Notes in Computer Science (LNCS), vol. 7425, pp. 57 - 63. August 2012.`,
      `Sewon Han and Byung-Seo Kim, "Evaluations on Effectiveness of Bump-Slot over DAP-NAD-Based Tactical Wideband Wireless Networks" Lecture Notes in Computer Science (LNCS), vol. 6985, pp. 341 - 350, October 2011.`
    ],
    domestic: [
      `Sung-Hoon Mah and Byung-Seo Kim, "Development of Automatic Sensor Detecting-based Home Automation Control Board for Modular Housing," The Journal of The Institute of Internet, Broadcasting and Communication, Vol. 17, No. 6, pp.33-39, Dec. 31, 2017. [ISSN: 2289-0238]`,
      `Hong-Min Bae, Byung-Seo Kim, Jae-Hee Chung, "Version Control System for BIM-based Collaborative Archtectural Design," Journal of the Institute of Internet, Broadcasting, and Communication, Vol. 17, No. 3, pp. 275-282, June. 30 2017. [ISSN: 2289-0238]`,
      `Chan-Min Park and Byung-Seo Kim, "Efficient Content Delivery Method in Wireless Content-Centric Network, " Journal of Korean Society for Internet Information, Vol.18, No. 2, pp. 13-20 , April 30, 2017. [ISSN: 1598-0170]`,
      `Sung-Hoon Mah, Hong-Min Bae, and Byung-Seo Kim, "Design and Implementation of Context-Aware-based Emergency Detection System with Energy Reduction for Elderly Housing," Journal of the Institute of Internet, Broadcasting, and Communication, Vol. 17, No. 1, pp. , Feb. 28 2017. [ISSN: 2289-0238]`,
      `Hong-Min Bae and Byung-Seo Kim, " Implementation of Excel Export Program for BIM-based Collaborative Design," Journal of the Institute of Internet, Broadcasting, and Communication, Vol. 17, No. 1, pp. , Feb. 28 2017. [ISSN: 2289-0238]`,
      `Hong Min Bae and Byung-Seo Kim, "Research on Possible Method to Converge IT and Architectural Design Techniques for Efficient Design of Elderly Housing," Journal of Korean Society for Internet Information, Vol. 17, No. 4, pp. 87 - 93, September 1 2016. [ISSN: 1598-0170].`,
      `Joo-Sang Lee and Byung-Seo Kim, "User Convenience-based Trading Algorithm System," Journal of the Institute of Internet, Broadcasting, and Communication, Vol. 16, No. 3, pp.155 - 161, June 30 2016. [ISSN: 2289-0238]`,
      `Chan-Min Park, and Byung-Seo Kim, "Method to limit the spread of Data in Wireless Content-Centric Network," Journal of The Institute of Embedded Engineering of Korea, Vol.11, No. 1, pp. 9 - 14, February 1, 2016. [ISSN: 1975-5066]`,
      `Hong-Min Bae, and Byung-Seo Kim, "Case Studies of Elderly-Friendly Context-Aware Smart Home System," Journal of The Institute of Internet, Broadcasting, and Communication, Vol.15, No. 3, pp. 85 - 90, June 30, 2015. [ISSN: 2289-0238]`,
      `Hyun-Hwa Park, Sung-Hoon Lee, Hong-Min Bae, and Byung-Seo Kim, "Development of Traffic Volume Measuring System Utilizing DSRC and Radar Detector," Journal of The Institute of Internet, Broadcasting, and Communication, Vol.15, No. 3, pp. 143 - 148, June 30, 2015. [ISSN: 2289-0238]`,
      `Hong-Min Bae Shin-Il Seo, and Byung-Seo Kim, "Home Automation System through Learning User Life Pattern," Journal of The Korea Institute of Information & Electronic Communication Technology, Vol.8, No. 2, pp. 79 - 85, April 30, 2015.`,
      `Seung-Jin Lee, Hong-Min Bae, and Byung-Seo Kim, "Research on Performance Improvement for Wireless CCN," Journal of The Institute of Internet, Broadcasting, and Communication, Vol.15, No. 2, pp. 71 - 76, April 30, 2015. [ISSN: 2289-0238]`,
      `Chan-Min Park, Byung-Seo Kim and Seung-Hyun Lee, "Development of Direct-Information-Sharing Mobile System between Group Members Based on Wi-Fi Direct Technology," Journal of The Institute of Internet, Broadcasting, and Communication, Vol.14, No. 3, pp. 13 - 19, June 30, 2014. [ISSN: 2289-0238]`,
      `Seung-Jin Lee, Chan-Min Park, and Byung-Seo Kim, "Research on Efficiency of Interest-Data Handshaking in Wireless Content-Centric Networks," Journal of The Institute of Internet, Broadcasting, and Communication, Vol.14, No. 2, pp. 81 - 86, April 30, 2014. [ISSN: 2289-0238]`,
      `Muhammad Khalil Afzal and Byung-Seo Kim, "Evaluation on Routing Protocols over MANETs with Fading Channel," Journal of Institute Webcasting and Internet Television, Vol. 11, No. 5, October 2011.`,
      `Sea-Won Han, Byung-Seo Kim, and Hong Young Ahn "Research on Feasibility of DAP-NAD over Broadband Tactical Ad-Hoc Networks," Journal of Institute Webcasting and Internet Television, Vol. 11, No. 1, February 2011.`,
      `Byung-Seo Kim, "Comparative Study of MIL-STD-188-220D Standard over IEEE802.11 Standard," SK telecommunications Review (Invited Paper), Vol. 20, No. 1, April 2010.`,
      `Byung-Seo Kim and Sea-Won Han, "Link Adaptive MAC protocol for Wi-Fi," Journal of Institute Webcasting and Internet Television (Selected from 2009 Conference of Institute Webcasting and Internet Television (Spring) (Seoul, May. 2009) for fast track publication) , Vol. 8, No. 1, June 2009.`,
      `Byung-Seo Kim, "Resource Allocation Method in High-Rate Wireless Personal Area Networks," Journal of Institute Webcasting and Internet Television, Vol. 8, No. 1, February 2008.`,
      `Byung-Seo Kim, "Effective Packet Scheduling Algorithm for Wireless Data Networks," Journal of Institute Webcasting and Internet Television, Vol. 7, No. 5, October 2007.`,
      `Sung Won Kim and Byung-Seo Kim "Enhanced MAC protocol for delay-constrained multimedia services in IEEE 802.15.3 wireless PAN" Journal of Signals, Information, and Systems, Vol. 12, No. 1, pp. 15 - 26, June 2005.`
    ]
  },
  conference: {
    international: [
      `Rehmat Ullah, Hyun-Doo Jin, and Byung-Seo Kim, " A Novel Method for Delay Mitigation in Content-Centric Networking-based Wireless Networks," The Sixth International Conference on Green and Human Information Technology (ICGHIT’18), Chiang Mai, Thailand, Jan. 31 ~ Feb. 2, 2018.`,
      `Muhammad Khalil Afzal, Rehmat Ullah, Byung-Seo Kim, and Sung Won Kim, " A Reliable and Scalable GroupCast Block Acknowledgement Scheme for Video Multicast over IEEE 802.11aa Standard," The Sixth International Conference on Green and Human Information Technology (ICGHIT’18), Chiang Mai, Thailand, Jan. 31 ~ Feb. 2, 2018.`,
      `Rashid Ali, Yousaf Bin Zikria, Farhan Amin, Byung-Seo Kim, and Sung Won Kim, "I-DTMC: An Integrated-Discrete Time Markov Chain Model for Performance Analysis in Future WLANs," International Workshop on Enabling Communications and Networking for Future Internet (WECNet'17), Singapore, 09~12 October 2017.`,
      `Sung-Hoon Mah, Dong-Hak Kim, Byung-Seo Kim, Jong Kim, and Jae Hee Chung, “Home Automation System for Eldely Housing,” The International Conference on Connected Smart Cities (CSC 2017), Lisbon, Portugal, 20~23 July 2017`,
      `Jae Hee Chung, Tae Uk Kang, and Byung-Seo Kim “A Study on Energy-Saving Modular Housing Units Considering Environmental and Aesthetic Aspects,” 19th International Conference on Behavioral Medicine, Stockholm, Sweden, July 13~14, 2017`,
      `Rashid Ali, Noor Hassan, Byung-Seo Kim and Sung Won Kim, “The diffusion of innovation of Internet of Things technology in Korea: A case study for technology adaptation analysis using Moor’s Model,” 2016 International Conference on Information and Communication Technology and Digital Convergence Business (ICIDB-2016), Seoul, Korea, December 16~17, 2016`,
      `Rana Asif Rehman, Tran Dinh Hieu, Hong-Min Bae, Sung-Hoon Mah, and Byung-Seo Kim, "Robust and Efficient Multipath Interest Forwarding for NDN-based MANETs," 2016 9th IFIP Wireless and Mobile Networking Conference-RAFNET (WMNC), Colmar, France, July 11-13, 2016.`,
      `Le The Dung, Tran Dinh Hieu, Beongku An, and Byung-Seo Kim, "How Does Beamforming Influence the Connectivity of Cognitive Radio Ad-hoc Networks?," The 3rd International Symposium on Computer, Consumer and Control, Xi'an, China, July 4-6, 2016. (Won the best paper Award)`,
      `Rashid Ali, Summara Asghar, Maria Spante, Sung Won Kim, and Byung-Seo Kim, "ICACCI-Social Networking Sites for Interdisciplinary Learning at Workplace: Work Intergrated Informal Learning (WiiL)," 2016 International Conference on Advanced Computing, Communications and Information Science, Cebu, Phliippines, May 27-29, 2016.`,
      `Chan-Min Park, Rana Asif Rehman, Tran Dinh Hieu, and Byung-Seo Kim, "Enhanced Protocol for Wireless Content-Centric Network," Fifth International Conference on Mobile & Wireless Networks (MoWiN 2016), Vienna, Austria, May 21-22, 2016.`,
      `Hong Min Bae, Chan Min Park, Shinil Suh, Rana Asif Rehman, and Byung-Seo Kim, "Performance Improvement in Beacon-Enabled LR-WPAN-based Sensor Networks," the 5th International Conference on Sensor Networks (SENSORNETS 2016), Rome Italy, February 19-21, 2016.`,
      `Rana Asif Rehman and Byung-Seo Kim, "Content Centric Networking Approach in Cognitive Radio Ad Hoc Networks," the 13th International Conference on Frontiers of Information Technology (FIT 2015), Islamabad, Pakistan, December 14-16, 2015.`,
      `Rashid Ali, Sung Won Kim, and Byung-Seo Kim, "Performance of Network Redundancy in SCTP: Effects of Different Factors on Multi-homing," 2015 International Workshop on IT Convergence System (KJC-2015), Gyeongsan, Korea, Nov. 1-3, 2015.`,
      `Shinil Suh, Hong-Min Bae, Chan Min Park, and Byung-Seo Kim "IT Research Directions for the Elderly Housing," 2015 International Conference on Electrical and Electronics: Techniques and Applications (EETA2015), Phuket, Thailand, August 23-24, 2015.`,
      `Yousaf Bin Zikria, Sung Won Kim, Jin-Ghoo Choi, and Byung-Seo Kim "A New Opportunistic Routing Forwarders Selection Scheme to Enhance Throughput for Wireless Networks," 6th International Conference on Computing Communciations and Networking Technoloies (ICCCNT 2015), Dallas, TX, USA, July 13-15, 2014.`,
      `Muhammad Khalil Afzal, Sung Won Kim, and Byung-Seo Kim "Modified GroupCast Retries Block Acknowledgement Scheme in IEEE 802.11aa standard-based for Multimedia Applications," 8th International Conference on Signal Processing and Communication Systems (ICSPCS 2014), Gold Coast, Australia, December 15-17, 2014.`,
      `Muhammad Khalil Afzal, Muhammad Touqeer Afzal, Byung-Seo Kim, and Sung Won Kim, "Reliable Multicast Schemes in IEEE 802.11aa Standard," 2014 International Workshop on Electronics & Communications (WEC2014), Chengdu, China, October 27~28, 2014.`,
      `Muhammad Khalil Afzal, Byung-Seo Kim, and Sung Won Kim, "Throughput Enhancement in Cooperative Wireless Ad hoc Networks," 16th IEEE International Conference on High Performance Computing and Communications (HPCC 2014), Paris, France, August 20-22, 2014.`,
      `Ji-Hoon Park, Chan-Min Park, Seungjin Lee, and Byung-Seo Kim, "Interference Resolution Method for IEEE802.15.4-based Wireless Sensor Networks," The 79th IEEE Vehicular Technology Conference (VTC-Spring 2014), Seoul, Korea, May 18-21, 2014.`,
      `Hyun-Ho Shin, Seungjin Lee, and Byung-Seo Kim, "Performance Improvement using Self-Link-Breakage Announcement in Wireless Ad-Hoc Networks," 13th IEEE International Conference on Computer and Information Technology (CIT), Sydney, Austrailia, December 3-5, 2013.`,
      `Muhammad Khalil Afzal, Hyun-Ho Shin, Byung-Seo Kim, and Sung Won Kim, "Link Quality Aware Local Repair in AODV-based Ad-Hoc Networks," 2013 IET/IEEE Second International Conference on Smart and Sustainable City, Shanghai, China, August 19-20, 2013.`,
      `Ji-Hoon Park and Byung-Seo Kim, "Enhancements on the Loss of Beacon Frames in LR-WPANs" The 7th FTRA International Conference on Multimedia and Ubiquitous Engineering (MUE 2013), Seoul, Korea, May 9-11, 2013.`,
      `Hyun-Ho Shin, Seungjin Lee, and Byung-Seo Kim, "Enhancements for Local Repair in AODV-based Ad-Hoc Networks" The 7th International Conference on Grid and Pervasive Computing (GPC 2013), Seoul, Korea, May 9-11, 2013.`,
      `Sewon Han and Byung-Seo Kim, "Performance Improvements using Upgrading Precedences in MIL-STD-188-220 Standard" International Conference on Green and Human Information Technology (ICGHIT'13), Hanoi, Vietnam, February 27 - March 1 2013.`,
      `Muhammad Khalil Afzal, Byung-Seo Kim, and Sung Won Kim, "A Leader-based Reliable Multicast MAC Protocol for MPEG-4 Traffic" 5th International conference on Internet and Distributed Computing System (IDCS'12), Wu Yi Shan, Fujian, China, November 21-23 2012.`,
      `Hyun-Ho Shin and Byung-Seo Kim, "Performance Evaluations on Local-Repair of AODV Protocol over IP-based Ad-Hoc Networks," International Conference on Convergence and Hybrid Information Technology (ICHIT 2012), Daejeon, Korean, August 23-25, 2012.`,
      `Sewon Han and Byung-Seo Kim, "Performance Enhancements in TDMA-based Tactical Wireless Networks," The 75th IEEE Vehicular Technology Conference (VTC-Spring 2012), Yokohama, Japan, May 6-9, 2012.`,
      `Muhammad Khalil Afzal, Byung-Seo Kim and Sung Won Kim, "Performance Evaluations of Multimedia Services over Ricean Fading Channel-based MANETs," The 2012 International Conference on Information Science and Technology (IST 2012), Shanghai, China, April 28-30, 2012.`,
      `Hyun Ho Shin, Ji Hoon Park, and Byung-Seo Kim, "Cognitive Link-Breakage Detection due to Systematic Malfunction in Multi-Hop Wireless Networks," The 1st International Conference on Advanced Information Technology and Sensor Application (AITS 2012), Daejeon, Seoul, Feb. 28-29, 2012.`,
      `Sewon Han and Byung-Seo Kim, "Evaluations on Effectiveness of Bump-Slot over DAP-NAD-based Tactical Wideband Wireless Networks," The 8th IFIP International Conference on Network and Parallel Computing (NPC'11), Chansha, China, October 21-23, 2011.`,
      `Gyanendra Prasad Joshi, Seung Yeob Nam, Byung-Seo Kim, and Sung Won Kim, "Dynamic channel negotiation window based MAC protocol for cognitive radio networks," international Conference on Computer Convergence Technology (ICCCT'11), Seoul, Korea, October 20-22, 2011.`,
      `Farruh Nurutdinovich Ishmanov, Sung Won Kim, and Byung-Seo Kim, "Maximizing Network Lifetime by Balancing Energy Consumption in Wireless Sensor Networks," 2010 International Conference on Computer Applications and Industrial Electronics (ICCAIE'10), Kuala Lumpur, Malaysia, December 5-7, 2010.`,
      `Byung-Seo Kim and Seawon Han "MIL-STD-188-220D Standard vs. IEEE 802.11 Standard," The 5th International Symposium on Embedded Technology (ISET 2010), Daegu, Korea, May 13-14, 2010.`,
      `Gyanendra Prasad Joshi, Sung Won Kim, and Byung-Seo Kim, "An Efficient MAC Protocol for Improving the Network Throughput for Cognitive Radio Networks," 2009 Third International Conference on Next Generation Mobile Applications, Services and Technologies, Cardiff, Wales, UK, September 15-18, 2009.`,
      `Byung-Seo Kim and Sung Won Kim "Dynamic Rate Adaptation for Wireless Multicast," in Proc. of IEEE Military Communications Conference (MILCOM) 2009, Boston, October 18-21 2009.`,
      `Byung-Seo Kim and Sung Won Kim "Efficient Layer-2 Protocol for Bit-Loading Implementation over Wi-Fi," 27th IEEE International Conference on Consumer Electronics 2009 (ICCE'09), January 12-14, 2009, Las Vegas, USA.`,
      `Beongku An and Byung-Seo Kim "A Preliminary Study for Supporting QoS Reliable Multicast for Mobile Ad-Hoc Wireless Networks," International Conference on Ubiquitous Convergence Technology 2008 (ICUCT'08), August 11-12, 2008 Khabarovsk, Russia.`,
      `Byung-Seo Kim, Sung Won Kim, and Farruh Ishmanov "Reliable Wireless Multicasting with Minimum Overheads in OFDM-based WLANs," IEEE International conferences on Communications 2008 (ICC'08), May 19-23, 2008 Beijing, China.`,
      `Yu Wu, Ji-bo Wei, Yong Xi, Byung-Seo Kim, and Sungwon Kim, "Opportunistic Scheduling with Statistical Fairness Guarantee in Wireless Networks," 18th IEEE International Symposium on Personal, Indoor, and Mobile Radio Communications 2007 (PIMRC'07), September 3-7, 2007, Athens, Greece.`,
      `Carlo Tosetti, Byung-Seo Kim, Randy Ekl and Jorge Seoane, "Design and Modeling of a Multitier Broadband Wireless Network for Metropolitan Area Employing the 802.11e EDCA Protocol," in Proc. of the OPNET Network Modeling and Simulation Conference (OPNETWORK 2007), August 27-31, 2007, Washington D.C.`,
      `Wu Yu, Yong Xi, Byung-Seo Kim, and Ji-Bo Wei, "Opportunistic Scheduling for Delay seneitive Flows in Wreless Networks," 16th international conference on Computer Communications and Networks 2007 (ICCCN'07), August 13-16 2007, Honolulu, Hawaii.`,
      `Sung Won Kim, and Byung-Seo Kim, "Reliable Multicast MAC Protocol for Wireless Ad-Hoc Networks" 4th international conference on ubiquitous intelligence and computing (UIC2007), Hong Kong China, July 11-13 2007.`,
      `Yong Xi, Byung-Seo Kim, Ji-bo Wei, and Zaho-Wen Zhuang, "Adaptive Multirate Auto Rate Fallback Protocol for IEEE 802.11 WLANs" in Proc. of IEEE Military Communications Conference (MILCOM) 2006, Washington DC, October 23-25 2006.`,
      `Yong Xi, Byung-Seo Kim, Ji-bo Wei, and Zaho-Wen Zhuang, "Performance Evaluation, Improvement and Channel Adaptive Strategy for IEEE 802.11 Fragmentation Mechanism" in Proc. of IEEE Symposium on Computer and Communications 2006, Sardinia, Italy, June 26-29 2006.`,
      `Sung Won Kim and Byung-Seo Kim "Resource allocation based on traffic load over relayed wireless access networks" The 2nd International Conference on Embedded Software and Systems (ICESS) 2005,, Xi'an, P.R.China, December 2005.`,
      `Sung Won Kim and Byung-Seo Kim "Power-efficient packet scheduling method for IEEE 802.15.3 WPAN" The 2nd International Conference on Embedded Software and Systems (ICESS) 2005,, Xi'an, P.R.China, December 2005.`,
      `Byung-Seo Kim, Sung Won Kim, Yuguang Fang,and Tan Wong "Link-Adaptable Polling-based MAC Protocol for Wireless LANs" in Proc. of IEEE Global Telecommunications Conference (GlobeCom'2004), Dallas, Texas, USA, November-December 2004.`,
      `Byung-Seo Kim, Yuguang Fang,and Tan Wong "Rate-Adaptive MAC Protocol in High-Rate Personal Area Networks" in Proc. of IEEE Wireless Communications and Networking Conference 2004 (WCNC'04), Atlanta, Georgia, USA, March 2004.`,
      `Byung-Seo Kim, Yuguang Fang,Tan Wong, and Younggo Kwon "Dynamic fragmentation scheme for rate-adaptive wireless LANs" in Proc. of IEEE International Symposium on Personal, Indoor and Mobile Radio Communications (PIMRC'2003), Beijing, China, September. 2003.`
    ],
    domestic: [
      `Sung-Hoon Mah, Hyun-Doo Jin, and Byung-Seo Kim “MQTT-based Home Automation System for Modular-based Housing,” 2018년도 한국통신학회 동계종합학술발표회, 평창, 1.17~19, 2018`,
      `Won-Suk Eum , Hyun-Doo Jin, Sung-Hoon Mah, and Byung-Seo Kim “Research on Local Climate Maesurement System using IoT,” 2018년도 한국통신학회 동계종합학술발표회, 평창, 1.17~19, 2018.`,
      `Rehmat Ullah, Tran Dinh Hieu , and Byung-Seo Kim “A Multi-Metric Routing Protocol for Low-Power and Lossy Networks ,” 2017년도 한국통신학회 동계종합학술발표회, 평창, 1.18~20, 2017.`,
      `Hong-Min Bae, Sung-Hoon Mah, and Byung-Seo Kim “디바이스 자동 감지 및 인터페이스 생성 시스템에 관한 연구,” 2017년도 한국통신학회 동계종합학술발표회, 평창, 1.18~20, 2017.`,
      `Hong-Min Bae, Sung-Hoon Mah, Tran Dinh Hieu, and Byung-Seo Kim, “협력 작업을 위한 건축 설계 응용 프로그램 설계," 2016년도 정기총회 및 추계학술대회, 대구, 11.25~26, 2016.`,
      `Sung-Hoon Mah, Hong-Min Bae, Rehmat Ullah, and Byung-Seo Kim “고령자 주거환경을 위한 상황기반 홈 자동화 시스템 설계," 2016년도 정기총회 및 추계학술대회, 대구, 11.25~26, 2016.`,
      `Hong-Min Bae, Sung-Hoon Mah, and Byung-Seo Kim , "고령자 주거 설계를 위한 건축 및 IT 기술의 융합방식에 대한 연구" The 26th Joint Conference on Communications and Information, 속초, 4.27~29, 2016.`,
      `Hong Min Bae, Seo Sin Il, Park Chan Min, Rana Asif Rehman, and Byung-Seo Kim , "고령자 주거환경을 위한 건축설계에 대한 IT 기술의 접근방법 연구," 2015년도 한국통신학회 하계종합학술대회, 제주도, 6.24~6.26. 2015.`,
      `Rana Asif Rehman, Chan-Min Park, and Byung-Seo Kim , "Enhanced Routing Protocol for Multihop Cognitive Radio Wireless Networks," 2015년도 한국통신학회 하계종합학술대회, 제주도, 6.24~6.26. 2015.`,
      `Chan-Min Park, and Byung-Seo Kim , "콘텐츠 전송 기반의 무선망에서 MAC Address를 이용한 Data 확산 감소 방법," 2015년도 한국인터넷정보학회 춘계학술발표대회, 강원도, 강릉, 5.01~5.02. 2015.`,
      `Seung Jin Lee, Se Won Han, and Byung-Seo Kim , "Content-Centric Network 의 성능향상에 관한 연구," 2013년도 한국통신학회 동계종합학술대회, 강원도, 용평, 1.30~2.01. 2013.`,
      `Ji-Hoon Park, Seung Jin Lee, Se Won Han, and Byung-Seo Kim , "WLAN의 간섭하에서 WPAN의 성능 향상 방법," 2012년도 하계 대한전자공학회 학술대회, 제주도, 6.27~29. 2012.`,
      `Seawon Han and Byung-Seo Kim "기회 적응 p-persistence MAC을 이용한 MIL-STD-188-220 프로토콜의 성능향상에 대한 연구," 2011년도 한국통신학회 동계종합학술대회, YoungPyung, 02. 23~25. 2011.`,
      `Hyun-Ho Shin, Ji-Hoon Park, Suk-Min Ahn, Seung-Jin Lee, Byung-Seo Kim, and Bok-Gyu Joo, "무선 에드혹 망에서 빠른 경로 복구 방법을 위한 시뮬레이터 구현," 2010년도 한국인터넷방송통신학회 동계학술대회, Seoul, 12. 06. 2010.`,
      `Seawon Han and Byung-Seo Kim, "전술무선망을 위한 MIL-STD-188-220 프로토콜의 성능향상에 대한 연구," 2010년도 동계 대한전자공학회 학술대회, 제주도, 6.18. 2010.`,
      `Jong Dae Park, Byung-Seo Kim, Ji-Hoon Park, and Hyun-Ho Han, "Route Disconnection의 빠른 검출 방법," 2010년도 하계 대한전자공학회 학술대회, 제주도, 6.17. 2010.`,
      `Byung-Seo Kim, "Reliable Group Communication over WNW," The 5th National Defense Information and Control Technology Conference, September 4 2009.`,
      `In Sik Jang, Byung-Seo Kim, Woo Suk Yang, Yeon Seok Choo, Jung-Ki Lee, and Beongku An, "Development of element Design Project Course for Intro-Mechatronics Major," 2009 Conference on Engineering Education - Fall, November 11 2009.`,
      `Byung-Seo Kim Sung Won Kim and Sea-Won Han, "Efficient Layer-2 Protocol for Bit-Loading Implementation over Wi-Fi," Conference of Institute Webcasting and Internet Television (Spring), May 29 2009.`,
      `Byung-Seo Kim and Sea-Won Han, "Layer-2 Reliability on Wireless Multicast," Conference of Institute Webcasting and Internet Television (Spring), May 31 2008.`
    ]
  },
  patents: [
    `정재희, 허준우, 김종, 배홍민, 김병서, 강태욱, "상황인지 기반 에너지 저감형 주거 설계 플랫폼 시스템(A Platform System for Context-Awareness-based Residential Design with Energy Reduction)" (Korea Patent Application Number: 10-2017-0124129, Date: 09-26-2017)`,
    `마성훈, 배홍민, 김병서, 김종, 정재희 "무선센서 자동 감지 기반의 홈자동화 제어 시스템 (Wireless-Sensor Automatic Detection Home Automation Control Device)" (Korea Patent Application Number: 10-2017-0077235, Date: 06-19-2017)`,
    `박현화 배홍민, 김병서, "DSRC와 레이더 검지기를 이용한 휴대용 교통량 측정기 (Portable Traffic Volume Counter Utilization DSRC and Radar Detector" (Korea Utility Model Registration Number: 20-0483293, Date: 19-04-2017)`,
    `배홍민, 김동학, 김병서, "엑셀 기반 건축 설계 파일의 버전 제어 방법 (Method to control version of excel-based architecture design file)" (Korea Patent Application Number: 10-2017-0055598, Date: 04-28-2017)`,
    `박찬민, 김병서, "무선 CCN에서 중간 노드에서의 병행적 콘텐츠 전달과 요청 방법 (Method to deliver and request in parallel at an intermediate node in wireless CCN)" (Korea Patent Number: 10-1726128, Date: 04-05-2017)`,
    `배홍민, 마성훈, 김병서, "건축 BIM 설계 파일의 엑셀 파일 전환 방법 (EXCEL EXPORT METHOD FOR BIM DESIGN FILES)" (Korea Patent Application number : 10-2017-0012432 , Date: 01-26-2017)`,
    `박찬민, 이승진, 김병서, "CCN에서 Interest Packet을 통한 콘텐츠 요청 방법 (Method to request data packets by using interest packet in CCN)" (Korea Patent Number : 10-1607429 , Date: 03-23-2016)`,
    `박찬민, 김병서, "CCN에서 MAC ADDRESS LIST를 이용한 DATA PACKET 확산 범위 감소 방법 (Method to reduce the spread of Data Packet using MAC address List in CCN)" (Korea Patent Number: 10-1597073, Date: 02-17-2016)`,
    `김병서, 신현호, "무선 Ad-Hoc 네트워크에서 경로를 복구하기 위한 시스템 및 그 방법 (System for Recovering Route in Wireless Ad-Hoc Networks and Route Recovering Method Thereof" (Korea Patent Number: 10-1489591, Date: 03-27-2015)`,
    `박지훈, 김병서, "WLAN의 간섭환경에서 신뢰성이 확보된 WPAN의 Beacon 프레임 전송 방법 (Method to obtain high reliability for WPAN's Beacon transmissions from WLAN's interferences)" (Korea Patent Number: 10-1489591, Date: 01-28-2015)`,
    `이승진, 김병서, "CCN에서 주기적 ANNOUNCE를 이용한 FIB 운영 방법 (Method to Management FIB using Periodic Announcement in CCN)" (Korea Patent Number: 1014313900000, Date: 08-11-2014)`,
    `박종대, 류호영, 이순성, 김병서, "통신 노드 및 그의 통신 장애 처리 방법 (Communication Node and Method for Processing Communications Fault Thereof) " (Korea Patent Number: 1014054510000 , Date: 06-02-2014)`,
    `박지훈, 한세원, 김병서, "비컨 기반의 무선 네트워크에서 비컨 프레임을 복구하기 위한 장치 및 그 방법 (Apparatus for Recovering Beacon Frame in Beacon-based WIreless Network and Method Thereof)" (Korea Patent Number: 10-1376299, Date: 03-13-2014)`,
    `"Communication Node and Method of Processing Communication Fault Thereof" (Chinese Patent Number: ZL 201010292430.7, Date: 12-04-2013)`,
    `"Communication Node and Method of Processing Communication Fault Thereof" (Japan Patent Number: 5161279, Date: 03-13-2013)`,
    `"전술통신에서의 우선순위 재조정을 통한 데이터 참조 시스템 및 그 운용방법 (From tactical communication the data reference system which leads a priority readjustment and the use method)" (Korea Patent Number: 1011532430000) (Date: 05-30-2012)`,
    `"TDMA 기반 전술 무선 통신망에서 음성 데이터를 전송하기 위한 장치 및 그 방법" (Korea Patent Application Number: 10-2012-0050255, Application Date: 05-11-2012)`,
    `"무선 멀티캐스트 재전송에서 경쟁 윈도우를 조정하는 단말시스템 및 그 조정 방법 (Wireless Multicast retransmissions to adjust contention window in the terminal system and its control method)" (Korea Patent Number: 1011395360000) (Date: 04-17-2012)`,
    `"Communication Node and Method of Processing Communication Fault Thereof" (US Patent Application Number: 12887785, Application Date: 10-09-2010)`,
    `"Method and System for Allocating Channels in a Wireless Network" (US Patent Application Number: 20080159209)`,
    `"Method for Managing Scanning of Channels in a Wireless Network" (US Patent Number: 7620397) (Date: 11-17-2009)`,
    `"Channel Estimation and Synchronization with Preamble using Polyphase Code" (US Patent Number: 7453794) (Date: 11-18-2009)`,
    `"Multi-layer Differential Phase Shift Keying with Bit-Interleaved Coded Modulation and OFDM" (US Patent Number: 7324613) (Date: 01-29-2008)`    
  ],
  software: [
    `C-2016-010893, 손쉬운 알고리듬 트레이딩 클라이언트 프로그램, 2016.04.15`,
    `C-2016-005559, 증권정보 실시간 연동 서버 프로그램, 2016.02.14`
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
  } else if (req.query.type === 'software') {
    res.json(publication.software)
  } else {
    res.json({})
  }
})

export default router












