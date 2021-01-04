目录

[基于区块链的收藏品发行................................................................................................. 2](#_Toc29663)

[一．前言.......................................................................................................................... 2](#_Toc1302)

[1.1 项目背景............................................................................................................. 2](#_Toc8974)

[1.2 收藏品市场存在的各种问题................................................................................. 2](#_Toc26877)

[1.2.1市场平台的混乱.......................................................................................... 2](#_Toc14745)

[1.2.2产品的造假................................................................................................. 3](#_Toc6843)

[1.3 文档介绍............................................................................................................. 4](#_Toc4067)

[二．项目介绍................................................................................................................... 5](#_Toc29295)

[1.项目发展方向......................................................................................................... 5](#_Toc8626)

[2.项目对象................................................................................................................ 5](#_Toc30817)

[3.项目发展前景........................................................................................................ 11](#_Toc19298)

[三．项目技术探究.......................................................................................................... 12](#_Toc32744)

[1.区块链技术.......................................................................................................... 12](#_Toc425)

[1.1起源............................................................................................................ 13](#_Toc26264)

[1.2概念定义..................................................................................................... 14](#_Toc24738)

[1.3发展历程..................................................................................................... 14](#_Toc433)

[1.4 类型........................................................................................................... 16](#_Toc5103)

[1.5 特征........................................................................................................... 16](#_Toc21538)

[1.6 架构模型.................................................................................................... 17](#_Toc26934)

[1.7 核心技术.................................................................................................... 18](#_Toc14756)

[1.8 应用领域.................................................................................................... 20](#_Toc10057)

[1.9 整顿........................................................................................................... 22](#_Toc22460)

[2.收藏品的关键 ：NTF............................................................................................ 22](#_Toc22447)

[3.智能合约............................................................................................................... 25](#_Toc27548)

[3.1 什么是智能合约.......................................................................................... 25](#_Toc23925)

[3.2 基于区块链的智能合约............................................................................... 26](#_Toc1084)

[3.3 基于区块链的智能合约优势........................................................................ 26](#_Toc19299)

[4. 以太坊(Ethereum).............................................................................................. 27](#_Toc29226)

[4.1 什么是以太坊............................................................................................. 27](#_Toc15632)

[4.2 产生背景.................................................................................................... 27](#_Toc17116)

[4.3 设计原则.................................................................................................... 28](#_Toc20845)

[4.4 功能应用.................................................................................................... 29](#_Toc2954)

[4.5 实现........................................................................................................... 30](#_Toc6839)

[四．项目研发................................................................................................................. 31](#_Toc10198)

[1.项目研发环境........................................................................................................ 31](#_Toc14069)

[2.Remix.................................................................................................................... 31](#_Toc29397)

[3. 本地以太坊私有链............................................................................................... 33](#_Toc7533)

[4. Metamask.............................................................................................................. 34](#_Toc30001)

[4.1 什么是metamask?...................................................................................... 34](#_Toc20658)

[4.2 项目部署................................................................................................... 34](#_Toc6519)

[5. 项目合约............................................................................................................. 35](#_Toc25148)

[6. 应用界面............................................................................................................. 39](#_Toc16346)

[五．总结........................................................................................................................ 42](#_Toc23468)

[1.项目总结............................................................................................................... 42](#_Toc5348)

[2. 感言.................................................................................................................... 43](#_Toc799)

 

基于区块链的收藏品发行

一．前言

1.1 项目背景

收藏品分为自然历史、艺术历史、人文历史和科普历史四类，具体分为文物类、珠宝、名石和观赏石类、钱币类、邮票类、文献类、票券类、商标类、徽章类、标本类、陶瓷类、玉器类、绘画类。应该说收藏是一门艺术，更是一门学问。在当前时代，收藏品的范围在不断扩大，有收藏经典歌手的黑胶光盘、NIKE出的新品AJ，二次元出的限量手办，这些东西都富含了一定的收藏价值和经济价值。人们热衷于收集收藏品，不仅是是因为是其自身的收藏价值，同时因为自身所含有的一定经济价值，人们热衷于收藏品的收集与转卖。一般的古董类收藏品都有专门的鉴定，一些大厂发行的限量产品也有专门的辨伪标识。但随着科技的发展，作假的技术在不断的发展，甚至达到了以假乱真的地步，比如各种作假的名画瓷器，以及出了名的浦东假鞋，一些盗版手办，这些都是关于收藏品发行一直存在且难以解决的问题。

1.2 收藏品市场存在的各种问题

1.2.1市场平台的混乱

现在搞收藏的人越来越多，藏品的种类也越来越丰富，藏什么的都有。这给骗子们有了大量行骗的机会。他们打着中国收藏协会或者收藏家协会的名义行骗，或者通过电视电话进行迷惑性行骗。藏品表面看金玉辉映，各种证书一应俱全，珍宝玉石，大师工艺，国宝全球限量发行等等宣传口号让人眼花心乱，事实上这些都是粗制滥造、仿冒的赝品，价值甚至抵不上它的外包装。还有的骗子公司，打着为消费者拍卖藏品的旗号，明目张胆的收取各项高额服务费用，实际上却收钱不办事，最后以东西流拍搪塞，甚至连藏品也不退还了。![img](https://i.loli.net/2021/01/04/TYIKOMjp4QE83Xn.jpg)

1.2.2产品的造假

![IMG_256](https://i.loli.net/2021/01/04/ErhwTKNaoe4ZfuH.jpg)

..

由于正版的收藏品往往较为昂贵，所以并不是所有人都可以负担，人们为了满足自己的虚荣心，造假的产业便随之而起。其中以假鞋现象为主，在我国的莆田的假鞋制造产业十分庞大，每年产生几亿的效益。随着技术的不断改进，甚至官方也无法判断到底那双鞋是他们自己的，许多人通过海外代购，最后的产地却依旧是来自莆田，正版购买者甚至无法确定自己购买的产品是否是官方正品。同时也让正版厂商的利益受到了极大的损伤。无法一次性解决所有的造假产业，连绵不绝，打破了市场秩序。

1.3 文档介绍

收藏品，从参与人数来说相对小众，但产业规模相当可观，中国仅艺术收藏品资产规模就约等于房地产总量，有300万亿的市场规模。近年来随着区块链技术的不断发展，我国大力提倡区块链技术，针对收藏品市场目前的种种问题，运用区块链技术进行解决，将会有很好的改善。本文档主要用于介绍在基于区块链技术的基础上，对收藏品发行等各个方面的问题进行解决，介绍一些技术方面的使用以及环境，发展方向等等。

二．项目介绍

1.项目发展方向

以保证产品的真实性以及交易平台的真实性为主，杜绝欺诈现象发生，减少人们在收藏品方面以及厂家在产品方面的损失。

2.项目对象

为产品公司设计以及博物馆拍卖品设计，通过区块链技术，确定产品的版权或者收藏品的唯一性，同时可追溯展品来源，保证展品的真实性。一下是区块链与收藏品结合的几个例子：

 

 

2.1中国博物馆藏品版权集体“上链”

 

2018 年起，“BATJ” 等国内互联网巨头们在区块链赛道上就已经开始你追我赶，依托自身的资源与业务优势，力求在区块链+ 行业上能率先占位抢先机。

 

蚂蚁走金融线，京东走溯源线，腾讯走娱乐线，百度则依托其百度百科选择了在文博领域发力，建立了“文博艺术链”，推动百科博物馆计划中的 327 家博物馆的线上藏品上链，在区块链上记录藏品名称、所属博物馆、藏品介绍、存证时间、区块链存证 ID 及哈希值等，实现藏品版权的确证与保护。

 

这些博物馆的藏品多是珍贵的历史文物，文博链所能起到的另一个作用是防止藏品被窃后流失海外或被出售后的真品认证问题。

 

下图为中国国家博物馆一件藏品——后母戊鼎的版权区块链存证证书。![img](https://i.loli.net/2021/01/04/zhI1aKkVl3HbCJm.jpg)

 

 

 

 

 

 

2 .2美国好莱坞明星 IP 衍生品“上链”

 

这个方向是瞄准了粉丝经济，好莱坞明星拥有大量的粉丝，也会追买明星的各种商品，尤其是限量款。《星际迷航》中进取号星舰舰长詹姆斯·柯克的扮演者威廉·沙特纳，一位老牌常青树明星与 WAX 区块链合作，将私人纪念照片数字化并上链，做成区块链数字收藏卡，出售给全球粉丝收藏。这些卡片上的照片之前未曾曝光过，记录的都是他本人在职业生涯及私人生活中的珍贵场景，总计发行了125,000 张，分别包装在 10,000 数字包里，上个月末正式对外销售后 9 分钟售罄。因为供不应求，所以售完后就有藏家开始在二级市场转售，进入流转。![img](https://i.loli.net/2021/01/04/BWjY5APoN4UZMLt.jpg)

威廉·沙特纳本人一直都非常看好区块链开发的产品商机，所以这也是他在好莱坞率先来尝试将自己 IP 衍生品上链的原因。他在社交上写道：有人说，上传至网络就可以永久储存，这个说法我不认同，上传至区块链才可永久储存。这款基于明星 IP 的数字收藏卡应用了非同质性通证 NFT 来做确权、追溯和交易。每个 NFT 都有其独特的属性，独一无二且无法伪造或。威廉·沙特纳的卡片中还有拼图式的，需要集齐三张才能看到完整的图片，这种玩法把 NFT 又玩出了一个新境界，即拼图完整后出现了新的稀有品，价值更高。![img](https://i.loli.net/2021/01/04/FIkpvNW4OlTa9e5.jpg)

英国佳士得的拍卖交易“上链”

 

2.3英国比较积极探索区块链应用的是拍卖行，以英国艺术品及奢侈品拍卖行 Christie's（佳士得）为代表，也成为了首家利用区块链技术记录拍卖数据的主要国际拍卖行。

 

2018 年，佳士得与区块链技术提供商 Artory 合作，在拍卖 Barney A. Ebsworth 收藏品之前，先将藏品的过往交易历史上传区块链供买家浏览，提升买家对收藏品真实性的信心，主要也是为了“防伪”，这是收藏业中最大的问题，寄希望于区块链技术来突破性的解决。

 

佳士得一直都在数字化的方向拓展，从线上拍卖、360 度虚拟预展空间到人工智能画作的高价出售，区块链是其中的一个方向，目前来看佳士得还是以实物收藏品交易记录“上链”为主要应用落地点，相信未来随着佳士得在数字收藏品方面的深化，区块链的其他价值也将被更好的发掘和应用。![img](https://i.loli.net/2021/01/04/d9IbHaqUWhkQYEi.jpg)

 

2.4 美国知名收藏卡公司 Topps 与 WAX 区块链合作，把美国民众人人皆知的知名 IP Garbage Pail Kids（中文为“垃圾桶小破孩”）做成数字收藏卡，采用基于区块链的 NFT（非同质性通证），让每一张卡片都在 WAX 链上做了“独一无二”的记录，有属于它自己的特质，因此每张 NFT 数字卡都与同系列中的其他数字卡不同。这些 WAX NFT 发行于区块链上，确保了卡片的真实性，且永久不被复制。

 

"垃圾桶小破孩" 系列数字收藏卡已推出两批，最近的一次发售一共有 20,000 包，240,000 张卡片， 67 分钟内被全球收藏家抢购一空，销售总额 204,800 美元，创造了区块链 NFT 数字卡片销售新纪录。![img](https://i.loli.net/2021/01/04/Q2fINRpMX4Vu1by.jpg)

“ 收藏家对数字搜藏品的认可是这次 ‘GPK Goes Exotic’ 系列收藏卡成功售罄的主要原因。他们认为区块链上的数字收藏品具有许多传统收藏品的特质，” WAX 团队 Evan Vandenberg 解释说：“ 我们看到收藏品市场趋势开始从实物转移到数字化的物品，其中包含收藏卡这个细分领域。在这方面的应用上，区块链技术有天然的优势，能加速收藏品的交易，同时避免假货掺杂。”

收藏品行业，可以说是目前数字化极低的产业，迟迟未突破实物收藏品市场，无法数字化的一个瓶颈问题就是真伪问题，因为没有很好的办法防止它稀缺性及唯一性的证明，所以现在还是以实物收藏品为主。但在区块链技术出现后，数字物品的稀缺性能在区块链上查证，且收藏品的过往交易记录都能纪录在区块链上，区块链的出现将很有可能助推数字收藏品市场的爆发。

 

 

 

 

 

3.项目发展前景

2017 年的CryptoKitties，让每个人都能养成独一无二的数字猫咪，猫咪有独一无二的外观，养成后还可不但可以繁衍出更独特的后代，更能将数字猫咪进行交易，这一切都记录在区块链上。可以说，CryptoKitties 的流行给数字收藏品的区块链化打下了认知基础，埋下了伏笔。![img](https://i.loli.net/2021/01/04/Cj5PbkYclzIonva.jpg)

收藏卡公司 Topps 与 WAX 区块链的试水合作，验证了NFT 与收藏品行业的结合。在日本和欧美国家，这些稀有的收藏卡是每个孩子最珍爱的童年小伙伴，孩子们会去抢购片包，拆开来看买到了哪些稀有卡片，并将这些卡片与朋友们做交换，比如：皮卡丘卡片，如下图。可见，收藏品市场的粘性相当高，且具有情感 + 金融属性，市场规模也不可小视，是区块链产业结合破冰的一个绝佳方向。![img](https://i.loli.net/2021/01/04/BXtso9xMZSzqiAD.jpg)

收藏品的价值，大多来自非物理属性，当收藏家发现有了基于区块链发行的收藏品，他们意识到这些数字收藏品拥有所有传统收藏品的特质，完全可以支撑其稀有性、美感及价值等，这都是收藏家所看重的。不仅如此，区块链收藏品还拥有许多传统收藏品所没有的特质，而且只能在数字收藏品上体现。

 

创造 “垃圾桶小破孩” IP 的美国公司 Topps 是世界上最受欢迎的收藏卡制造商。Topps 发行的收藏卡包括美国职棒大联盟球员卡、星球大战收藏卡、世界摔角娱乐选手卡等，涵盖全球众多知名品牌。据其官方消息称，这次合作成功后，他们还将继续推出其他 IP 的数字收藏卡，开启区块链与传统行业结合应用的一个新趋势，潜力无限。在国内，书画、酒业、邮票等藏品都很值得借鉴。

三．项目技术探究

1.区块链技术

区块链是一个信息技术领域的术语。从本质上讲，它是一个共享数据库，存储于其中的数据或信息，具有“不可伪造”“全程留痕”“可以追溯”“公开透明”“集体维护”等特征。基于这些特征，区块链技术奠定了坚实的“信任”基础，创造了可靠的“合作”机制，具有广阔的运用前景。

2019年1月10日，国家互联网信息办公室发布《区块链信息服务管理规定》 [1] 。2019年10月24日，在中央政治局第十八次集体学习时，习近平总书记强调，“把区块链作为核心技术自主创新的重要突破口”“加快推动区块链技术和产业创新发展”。“区块链”已走进大众视野，成为社会的关注焦点。

 

 

1.1起源

区块链起源于比特币，2008年11月1日，一位自称中本聪(Satoshi Nakamoto)的人发表了《比特币:一种点对点的电子现金系统》一文  ，阐述了基于P2P网络技术、加密技术、时间戳技术、区块链技术等的电子现金系统的构架理念，这标志着比特币的诞生。两个月后理论步入实践，2009年1月3日第一个序号为0的创世区块诞生。几天后2009年1月9日出现序号为1的区块，并与序号为0的创世区块相连接形成了链，标志着区块链的诞生  。

近年来，世界对比特币的态度起起落落，但作为比特币底层技术之一的区块链技术日益受到重视。在比特币形成过程中，区块是一个一个的存储单元，记录了一定时间内各个区块节点全部的交流信息。各个区块之间通过随机散列(也称哈希算法)实现链接，后一个区块包含前一个区块的哈希值，随着信息交流的扩大，一个区块与一个区块相继接续，形成的结果就叫区块链

1.2概念定义

什么是区块链？从科技层面来看，区块链涉及数学、密码学、互联网和计算机编程等很多科学技术问题。从应用视角来看，简单来说，区块链是一个分布式的共享账本和数据库，具有去中心化、不可篡改、全程留痕、可以追溯、集体维护、公开透明等特点。这些特点保证了区块链的“诚实”与“透明”，为区块链创造信任奠定基础。而区块链丰富的应用场景，基本上都基于区块链能够解决信息不对称问题，实现多个主体之间的协作信任与一致行动。

区块链是分布式数据存储、点对点传输、共识机制、加密算法等计算机技术的新型应用模式。区块链（Blockchain），是比特币的一个重要概念，它本质上是一个去中心化的数据库，同时作为比特币的底层技术，是一串使用密码学方法相关联产生的数据块，每一个数据块中包含了一批次比特币网络交易的信息，用于验证其信息的有效性（防伪）和生成下一个区块 。

比特币白皮书英文原版 其实并未出现 blockchain 一词，而是使用的 chain of blocks。最早的比特币白皮书中文翻译版 中，将 chain of blocks 翻译成了区块链。这是“区块链”这一中文词最早的出现时间。

国家互联网信息办公室2019年1月10日发布《区块链信息服务管理规定》，自2019年2月15日起施行 。

作为核心技术自主创新的重要突破口，区块链的安全风险问题被视为当前制约行业健康发展的一大短板，频频发生的安全事件为业界敲响警钟。拥抱区块链，需要加快探索建立适应区块链技术机制的安全保障体系。

 

1.3发展历程

2008年由中本聪第一次提出了区块链的概念  ，在随后的几年中，区块链成为了电子货币比特币的核心组成部分：作为所有交易的公共账簿。通过利用点对点网络和分布式时间戳服务器，区块链数据库能够进行自主管理。为比特币而发明的区块链使它成为第一个解决重复消费问题的数字货币。比特币的设计已经成为其他应用程序的灵感来源。

2014年，"区块链2.0”成为一个关于去中心化区块链数据库的术语。对这个第二代可编程区块链，经济学家们认为它是一种编程语言，可以允许用户写出更精密和智能的协议  。因此，当利润达到一定程度的时候，就能够从完成的货运订单或者共享证书的分红中获得收益。区块链2.0技术跳过了交易和“价值交换中担任金钱和信息仲裁的中介机构”。它们被用来使人们远离全球化经济，使隐私得到保护，使人们“将掌握的信息兑换成货币”，并且有能力保证知识产权的所有者得到收益。第二代区块链技术使存储个人的“永久数字ID和形象”成为可能，并且对“潜在的社会财富分配”不平等提供解决方案 。

2016年1月20日，中国人民银行数字货币研讨会宣布对数字货币研究取得阶段性成果。会议肯定了数字货币在降低传统货币发行等方面的价值，并表示央行在探索发行数字货币。中国人民银行数字货币研讨会的表达大大增强了数字货币行业信心。这是继2013年12月5日央行五部委发布关于防范比特币风险的通知之后，第一次对数字货币表示明确的态度。

2016年12月20日，数字货币联盟——中国FinTech数字货币联盟及FinTech研究院正式筹建 。

如今，比特币仍是数字货币的绝对主流，数字货币呈现了百花齐放的状态，常见的有bitcoin、litecoin、dogecoin、dashcoin，除了货币的应用之外，还有各种衍生应用，如以太坊Ethereum、Asch等底层应用   开发平台以及NXT，SIA，比特股，MaidSafe，Ripple等行业应用 。

1.4 类型

公有区块链

公有区块链（Public Block Chains)是指：世界上任何个体或者团体都可以发送交易，且交易能够获得该区块链的有效确认，任何人都可以参与其共识过程。公有区块链是最早的区块链，也是应用最广泛的区块链，各大bitcoins系列的虚拟数字货币均基于公有区块链，世界上有且仅有一条该币种对应的区块链。

联合（行业）区块链

行业区块链（Consortium Block Chains)：由某个群体内部指定多个预选的节点为记账人，每个块的生成由所有的预选节点共同决定（预选节点参与共识过程），其他接入节点可以参与交易，但不过问记账过程(本质上还是托管记账，只是变成分布式记账，预选节点的多少，如何决定每个块的记账者成为该区块链的主要风险点），其他任何人可以通过该区块链开放的API进行限定查询  。

私有区块链

私有区块链（Private Block Chains)：仅仅使用区块链的总账技术进行记账，可以是一个公司，也可以是个人，独享该区块链的写入权限，本链与其他的分布式存储方案没有太大区别。传统金融都是想实验尝试私有区块链，而公链的应用例如bitcoin已经工业化，私链的应用产品还在摸索当中 。

1.5 特征

去中心化:区块链技术不依赖额外的第三方管理机构或硬件设施，没有中心管制，除了自成一体的区块链本身，通过分布式核算和存储，各个节点实现了信息自我验证、传递和管理。去中心化是区块链最突出最本质的特征 。

开放性:区块链技术基础是开源的，除了交易各方的私有信息被加密外，区块链的数据对所有人开放，任何人都可以通过公开的接口查询区块链数据和开发相关应用，因此整个系统信息高度透明 。

独立性:基于协商一致的规范和协议(类似比特币采用的哈希算法等各种数学算法)，整个区块链系统不依赖其他第三方，所有节点能够在系统内自动安全地验证、交换数据，不需要任何人为的干预 [17] 。

安全性:只要不能掌控全部数据节点的51%，就无法肆意操控修改网络数据，这使区块链本身变得相对安全，避免了主观人为的数据变更 。

匿名性:除非有法律规范要求，单从技术上来讲，各区块节点的身份信息不需要公开或验证，信息传递可以匿名进行 。

1.6 架构模型

一般说来，区块链系统由数据层、网络层、共识层、激励层、合约层和应用层组成。

其中，数据层封装了底层数据区块以及相关的数据加密和时间戳等基础数据和基本算法；网络层则包括分布式组网机制、数据传播机制和数据验证机制等；共识层主要封装网络节点的各类共识算法；激励层将经济因素集成到区块链技术体系中来，主要包括经济激励的发行机制和分配机制等；合约层主要封装各类脚本、算法和智能合约，是区块链可编程特性的基础；应用层则封装了区块链的各种应用场景和案例。该模型中，基于时间戳的链式区块结构、分布式节点的共识机制、基于共识算力的经济激励和灵活可编程的智能合约是区块链技术最具代表性的创新点 。 ![img](https://i.loli.net/2021/01/04/JGeZ6EQhd31MD8X.jpg)

1.7 核心技术

分布式账本

分布式账本指的是交易记账由分布在不同地方的多个节点共同完成，而且每一个节点记录的是完整的账目，因此它们都可以参与监督交易合法性，同时也可以共同为其作证。

跟传统的分布式存储有所不同，区块链的分布式存储的独特性主要体现在两个方面：一是区块链每个节点都按照块链式结构存储完整的数据，传统分布式存储一般是将数据按照一定的规则分成多份进行存储。二是区块链每个节点存储都是独立的、地位等同的，依靠共识机制保证存储的一致性，而传统分布式存储一般是通过中心节点往其他备份节点同步数据。没有任何一个节点可以单独记录账本数据，从而避免了单一记账人被控制或者被贿赂而记假账的可能性。也由记账节点足够多，理论上讲除非所有的节点被破坏，否则账目就不会丢失，从而保证了账目数据的安全性 。

非对称加密

存储在区块链上的交易信息是公开的，但是账户身份信息是高度加密的，只有在数据拥有者授权的情况下才能访问到，从而保证了数据的安全和个人的隐私 。

共识机制

共识机制就是所有记账节点之间怎么达成共识，去认定一个记录的有效性，这既是认定的手段，也是防止篡改的手段。区块链提出了四种不同的共识机制，适用于不同的应用场景，在效率和安全性之间取得平衡 。

区块链的共识机制具备“少数服从多数”以及“人人平等”的特点，其中“少数服从多数”并不完全指节点个数，也可以是计算能力、股权数或者其他的计算机可以比较的特征量。“人人平等”是当节点满足条件时，所有节点都有权优先提出共识结果、直接被其他节点认同后并最后有可能成为最终共识结果。以比特币为例，采用的是工作量证明，只有在控制了全网超过51%的记账节点的情况下，才有可能伪造出一条不存在的记录。当加入区块链的节点足够多的时候，这基本上不可能，从而杜绝了造假的可能。

智能合约

智能合约是基于这些可信的不可篡改的数据，可以自动化的执行一些预先定义好的规则和条款。以保险为例，如果说每个人的信息（包括医疗信息和风险发生的信息）都是真实可信的，那就很容易的在一些标准化的保险产品中，去进行自动化的理赔。在保险公司的日常业务中，虽然交易不像银行和证券行业那样频繁，但是对可信数据的依赖是有增无减。因此，笔者认为利用区块链技术，从数据管理的角度切入，能够有效地帮助保险公司提高风险管理能力。具体来讲主要分投保人风险管理和保险公司的风险监督。

 

 

1.8 应用领域

金融领域

区块链在国际汇兑、信用证、股权登记和证券交易所等金融领域有着潜在的巨大应用价值。将区块链技术应用在金融行业中，能够省去第三方中介环节，实现点对点的直接对接，从而在大大降低成本的同时，快速完成交易支付。

比如Visa推出基于区块链技术的 Visa B2B Connect，它能为机构提供一种费用更低、更快速和安全的跨境支付方式来处理全球范围的企业对企业的交易。要知道传统的跨境支付需要等3-5天，并为此支付1-3%的交易费用。Visa 还联合 Coinbase 推出了首张比特币借记卡，花旗银行则在区块链上测试运行加密货币“花旗币” 。

物联网和物流领域

区块链在物联网和物流领域也可以天然结合。通过区块链可以降低物流成本，追溯物品的生产和运送过程，并且提高供应链管理的效率。该领域被认为是区块链一个很有前景的应用方向 。

区块链通过结点连接的散状网络分层结构，能够在整个网络中实现信息的全面传递，并能够检验信息的准确程度。这种特性一 定程度上提高了物联网交易的便利性和智能化。区块链+大数据的解决方案就利用了大数据的自动筛选过滤模式，在区块链中建立信用资源，可双重提高交易的安全性，并提高物联网交易便利程度。为智能物流模式应用节约时间成本。区块链结点具有十分自由的进出能力，可独立的参与或离开区块链体系，不对整个区块链体系有任何干扰。区块链 +大数据解决方案就利用了大数据的整合能力，促使物联网基础用户拓展更具有方向性，便于在智能物流的分散用户之间实现用户拓展 。

公共服务领域

区块链在公共管理、能源、交通等领域都与民众的生产生活息息相关，但是这些领域的中心化特质也带来了一些问题，可以用区块链来改造。区块链提供的去中心化的完全分布式DNS服务通过网络中各个节点之间的点对点数据传输服务就能实现域名的查询和解析，可用于确保某个重要的基础设施的操作系统和固件没有被篡改，可以监控软件的状态和完整性，发现不良的篡改，并确保使用了物联网技术的系统所传输的数据没用经过篡改。

数字版权领域

通过区块链技术，可以对作品进行鉴权，证明文字、视频、音频等作品的存在，保证权属的真实、唯一性。作品在区块链上被确权后，后续交易都会进行实时记录，实现数字版权全生命周期管理，也可作为司法取证中的技术性保障。例如，美国纽约一家创业公司Mine Labs开发了一个基于区块链的元数据协议，这个名为Mediachain的系统利用IPFS文件系统，实现数字作品版权保护，主要是面向数字图片的版权保护应用。

保险领域

在保险理赔方面，保险机构负责资金归集、投资、理赔，往往管理和运营成本较高。通过智能合约的应用，既无需投保人申请，也无需保险公司批准，只要触发理赔条件，实现保单自动理赔。一个典型的应用案例就是LenderBot, 是 2016 年由区块链企业 Stratumn、德勤与支付服务商 Lemonway 合作推出，它允许人们通过 Facebook Messenger 的聊天功能，注册定制化的微保险产品， 为个人之间交换的高价值物品进行投保，而区块链在贷款合同中代替了第三方角色。

公益领域

区块链上存储的数据，高可靠且不可篡改，天然适合用在社会公益场景。公益流程中的相关信息，如捐赠项目、募集明细、资金流向、受助人反馈等，均可以存放于区块链上，并且有条件地进行透明公开公示，方便社会监督。

1.9 整顿

随着区块链技术成为社会关注热点，被监管部门严厉打击的虚拟货币出现死灰复燃势头。针对这一新情况，多地监管部门宣布，新一轮清理整顿已经展开。

2019年11月22日，有国家互联网金融风险专项整治小组办公室（下称整治办）人士表示，区块链的内涵很丰富，并不等于虚拟货币。所有打着区块链旗号关于虚拟货币的推广宣传活动都是违法违规的。监管部门对于虚拟货币炒作和虚拟货币交易场所的打击态度没有丝毫改变。

据了解，监管部门已经通盘部署，要求全国各地全面排查属地借助区块链开展虚拟货币炒作活动的最新情况，出现问题及时打早打小。在下一阶段的工作中，监管部门将加大清理整顿虚拟货币及交易场所的力度，发现一起、处置一起。

2.收藏品的关键 ：NTF

自 2020 年以来，NFT 经济增长迅猛，尤其是近日，在 9 月 7 日至 9 月 13 日这一周内，NFT 销售额就高达 100 万美金。人们开始意识到 NFT 可以代表虚拟世界中的几乎任何事物，并链接虚拟与现实。

 

NFT全称Non-Fungible Token，中文名叫非同质化通证。它是具有唯一且彼此不可替换属性的数字资产。具有标准化、通用性、流动性以及可编程性。每一枚NFT都有着区别于其他NFT的专属特性，这个专属特性就代表了每一枚NFT价值都不一样。

 

NFT一直都是区块链技术的重要应用之一，其应用场景包括游戏道具、门票、艺术品、收藏品等。NFT的第一次且最典型的应用是加密猫游戏。在这款游戏中，每一只都对应着链上的一个NFT，拥有独特的ID和基因，拥有独立的价值。其火热程度让以太坊出现了第一次的大规模拥堵，NFT的可行性被证实。这之后NFT在很多领域都有很大的发展，2020年上半年也增长很快，据统计，目前NFT交易市场Open Sea用户超过2万。NFT项目达到706个，有1ETH交易量以上的项目达到285个，100ETH交易量以上的项目达到59个，1000ETH交易量以上的项目达到24个。排在前列的加密猫和Decentraland的交易量高达几万个ETH。

 

![img](https://i.loli.net/2021/01/04/TJ6Se3ml2FshUi1.jpg)NFT的魅力表现在三个方面：首当其冲地就是它的独特性，NTF的每一个通证都对应着永久保存并不能被更改的元数据，这元数据记录的内容，使得每个通证都与众不同。其次是稀缺性，开发者可以决定相应稀缺度。当然，也可以无限地发行某种资产。最后是NFT的不可分割性，在大多数情况下，NFT都是不能被切分成更少的面额的。买卖也只能被作为一个整体进行。

 

 

![img](https://i.loli.net/2021/01/04/BfdUuq3rlWm8AIQ.jpg)币咖（Coinka）目前注册用户30万+，日活高峰达2万+，上线项目100+，运营2年多时间，“0”安全事故。身为最具前瞻性的数字货币交易平台，已经率先开启了对NFT板块的布局。据悉，coinka为满足用户需求，优化用户的交易体验，使对市场热点项目操作更加便捷，目前正在NFT真正爆发所需要的基础设施方面深耕。

 

真正旨在为全球用户提供资产安全保障服务，投身区块链行业，丰富平台投资生态，为广大用户提供安全可信赖、快捷、高效的数字资产综合金融服务。带给用户安全可信赖、投资更便捷的数字资产平台 。

 

随着今年DeFi的火热。DeFi与NFT的联合也进入了大家的视野。相信DeFi+NFT可以带来NFT的更加繁荣。目前两者结合的场景已经非常多，首先是NFT项目参与流动性挖矿，包括WHALE、MEME、AAVE等等。另外还有一种目前不算流行的玩法叫NFT Mining，是抵押NFT资产进行挖矿的玩法。

 

而除了和DeFi结合，NFT和分布式储存结合的场景也非常有想象空间。 NFT可以作为一个“身份凭证”，就像开启储物柜的“钥匙”，可以定向让你访问某些文件或媒体。NFT对于产权转移有着非常大的应用场景，比如物联网可以将NFT连接到物理世界，我们可以使用钱包中的NFT打开汽车的锁，当我想卖掉我的车时，我可以把NFT卖给其他人，这样我就不能再访问这辆车了，也避免了复刻钥匙等情况。

![IMG_256](https://i.loli.net/2021/01/04/p29flSsqwvWHQDA.gif)

而Coinka交易所从2018年创立之初便奉行着公平、公正、公开的原则，把用户的资金安全放在第一位。Coinka运用IPFS分布协议存储，将交易数据直接写入分布式存储系统IPFS的链上，保证交易链数据安全永久存储不被非法获取，同时实现交易数据的公开化、透明化。而在NFT日渐成熟的现在，coinka计划将NFT与分布式储存相结合，打造出更加安全稳定的服务系统，保证用户的资产安全。

 

NFT有着三年的行业积淀，很可能是区块链离应用落地和现实世界最近的一个入口；其次，有众多圈内以及圈外的大机构支持；第三，对于普通用户来说，NFT概念更好出圈，它能够更好地和实体世界相结合。所以，不管是在圈内还是圈外，NFT都将成为下一个亮点。

 

 

 

3.智能合约

3.1 什么是智能合约

智能合约并不是一个新的概念，早在1995年就由跨领域法律学者尼克萨博提出，是对现实中的合约条款执行电子化的量化交易协议。智能合约设计的总体目标是满足常见的合约条件（如支付条款、留置权、机密性以及执行等），以及最大程度地减少恶意和偶然地异常，最大限度地减少对可信中介的依赖。智能合约已经在电子投票和供应链管理等很多领域得到应用，且前景广阔。

3.2 基于区块链的智能合约

本质上来说，智能合约是一段程序，它以计算机指令的方式实现了传统合约的自动化处理。简单讲，智能合约就是双方在区块链资产上交易时，触发执行的一段代码，这段代码就是智能合约。“智能合约程序不只是一个可以自动执行的计算机程序，它本身就是一个系统参与者，对接收到的信息进行回应，可以接收和储存价值，也可以向外发送信息和价值。这个程序就像一个可以被信任的人，可以临时保管资产，总是按照事先的规则执行操作。”简单的来说就是，你可以提前规定好合约的内容，当在满足触发合约条件的时候，程序就会自动执行合约内容。“智能合约的工作理论迟迟没有实现，一个重要原因是因为缺乏能够支持可编程合约的数字系统和技术。区块链技术的出现解决了该问题，不仅可以支持可编程合约，而且具有去中心化、不可篡改、过程透明可追踪等优点，天然适合于智能合约。因此，也可以说，智能合约是区块链技术的特性之一”摘录来自: “区块链：从数字货币到信用社会”。

 

3.3 基于区块链的智能合约优势

区块链2.0以后提出的智能合约，让区块链应用更具便捷性和拓展性。主要优势体现如下：

1.将合约以数字化的形式写入区块链中，因区块链的特性，数据将无法删除、修改，只能新增，整个过程透明可跟踪，保证了历史的可追溯性;

\2.  因行为将被永久记录，可极大程度避免恶意行为对合约正常执行的干扰;

\3.  去中心化，避免了中心化因素的影响，提高智能合约在成本效率方面的优势;

\4.  当满足合约内容时，将自动启动智能合约的代码，既避免了手动过程，同时又保障了发行者无法违约;

\5.  由区块链自带的共识算法构建出一套状态机系统，使得智能合约能够高效地运行。

 

 

\4. 以太坊(Ethereum)

4.1 什么是以太坊

以太坊（英文Ethereum）是一个开源的有智能合约功能的公共区块链平台，通过其专用加密货币以太币（Ether，简称“ETH”）提供去中心化的以太虚拟机（Ethereum Virtual Machine）来处理点对点合约。

以太坊的概念首次在2013至2014年间由程序员Vitalik Buterin受比特币启发后提出，大意为“下一代加密货币与去中心化应用平台”，在2014年通过ICO众筹开始得以发展。

截至2018年2月，以太币是市值第二高的加密货币，仅次于比特币。

4.2 产生背景

比特币开创了去中心化密码货币的先河，五年多的时间充分检验了区块链技术的可行性和安全性。比特币的区块链事实上是一套分布式的数据库，如果再在其中加进一个符号——比特币，并规定一套协议使得这个符号可以在数据库上安全地转移，并且无需信任第三方，这些特征的组合完美地构造了一个货币传输体系——比特币网络。

然而比特币并不完美，其中协议的扩展性是一项不足，例如比特币网络里只有一种符号——比特币，用户无法自定义另外的符号，这些符号可以是代表公司的股票，或者是债务凭证等，这就损失了一些功能。另外，比特币协议里使用了一套基于堆栈的脚本语言，这语言虽然具有一定灵活性，使得像多重签名这样的功能得以实现，然而却不足以构建更高级的应用，例如去中心化交易所等。以太坊从设计上就是为了解决比特币扩展性不足的问题。

4.3 设计原则

简洁原则

以太坊协议将尽可能简单，即便以某些数据存储和时间上的低效为代价。一个普通的程序员也能够完美地去实现完整的开发说明。这将最终有助于降低任何特殊个人或精英团体可能对协议的影响并且推进以太坊作为对所有人开放的协议的应用前景。添加复杂性的优化将不会被接受，除非它们提供了非常根本性的益处。

通用原则

没有“特性”是以太坊设计哲学中的一个根本性部分。取而代之的是，以太坊提供了一个内部的图灵完备的脚本语言以供用户来构建任何可以精确定义的智能合约或交易类型。想建立一个全规模的守护程序（Daemon）或天网（Skynet），你可能需要几千个联锁合约并且确定慷慨地喂养它们，一切皆有可能。

模块化原则

以太坊的不同部分应被设计为尽可能模块化的和可分的。开发过程中，应该能够容易地让在协议某处做一个小改动的同时应用层却可以不加改动地继续正常运行。以太坊开发应该最大程度地做好这些事情以助益于整个加密货币生态系统，而不仅是自身。

无歧视原则

协议不应主动地试图限制或阻碍特定的类目或用法，协议中的所有监管机制都应被设计为直接监管危害，不应试图反对特定的不受欢迎的应用。人们甚至可以在以太坊之上运行一个无限循环脚本，只要他愿意为其支付按计算步骤计算的交易费用。

 

4.4 功能应用

以太坊是一个平台，它上面提供各种模块让用户来搭建应用，如果将搭建应用比作造房子，那么以太坊就提供了墙面、屋顶、地板等模块，用户只需像搭积木一样把房子搭起来，因此在以太坊上建立应用的成本和速度都大大改善。具体来说，以太坊通过一套图灵完备的脚本语言（Ethereum Virtual Machinecode，简称EVM语言）来建立应用，它类似于汇编语言。我们知道，直接用汇编语言编程是非常痛苦的，但以太坊里的编程并不需要直接使用EVM语言，而是类似C语言、Python、Lisp等高级语言，再通过编译器转成EVM语言。

上面所说的平台之上的应用，其实就是合约，这是以太坊的核心。合约是一个活在以太坊系统里的自动代理人，他有一个自己的以太币地址，当用户向合约的地址里发送一笔交易后，该合约就被激活，然后根据交易中的额外信息，合约会运行自身的代码，最后返回一个结果，这个结果可能是从合约的地址发出另外一笔交易。需要指出的是，以太坊中的交易，不单只是发送以太币而已，它还可以嵌入相当多的额外信息。如果一笔交易是发送给合约的，那么这些信息就非常重要，因为合约将根据这些信息来完成自身的业务逻辑。

合约所能提供的业务，几乎是无穷无尽的，它的边界就是你的想象力，因为图灵完备的语言提供了完整的自由度，让用户搭建各种应用。白皮书举了几个例子，如储蓄账户、用户自定义的子货币等。

4.5 实现

4.5.1 区块链程序

以太坊可以用来创建去中心化的程序、自治组织和智能合约，据纽约时报的报导，在2016年5月已经有数十个可用的程序。预期的应用目标涵盖金融、物联网、农田到餐桌（farm-to-table）、智能电网、体育赌博等。去中心化自治组织有潜力让许多原本无法运行或成本过高的营运模型成为可能。较知名的应用有：

去中心化创业投资：The DAO用以太币资金创立，目标是为商企业和非营利机构创建新的去中心化营业模式、The Rudimental让独立艺术家在区块链上进行群众募资。

社会经济平台：Backfeed。

去中心化预测市场：Augur。

物联网：Ethcore（一间以太坊公司）研发的客户端、Chronicled（一间区块链公司）发表了以太坊区块链的实物资产验证平台；芯片公司、物理IP创建者和生产者可以用植入的蓝牙或近场通信进行验证。Slock.It开发的智能锁可以在付费后自动打开，让用户在付费后可以帮电动车充电、或是打开租屋的房门。

虚拟宝物交易平台：FreeMyVunk。

版权授权：Ujo Music平台让创作人用智能合约发布音乐，消费者可以直接付费给创作人。伊莫珍·希普用此平台发布了一首单曲。

智能电网：TransActive Grid让用户可以和邻居买卖能源。

去中心化期权市场：Etheropt。

钉住汇率的代币：DigixDAO提供与黄金挂钩的代币，在2016年四月正式营运。Decentralized Capital提供和各种货币挂钩的代币。

移动支付：Everex让外劳汇款回家乡。

4.5.2 客户端软件

以太坊的两个主要的客户端软件是Geth和Parity。

企业软件

企业软件公司也正测试用以太坊作为各种用途。已知有兴趣的公司包括微软、IBM、摩根大通。

德勤和ConsenSys在2016年宣布成立数字银行Project ConsenSys。

R3公司在Microsoft Azure上运行私人以太坊区块链，将11间银行连接至一本分布式帐薄（distributed ledger）。

Microsoft Visual Studio提供程序开发者使用Solidity编程语言。

英国政府中负责推动创新的机构Innovate UK提供了近25万英镑给Tramonex用以太坊发展跨国支付系统。

 

4.5.3 认许制记账

有许多方案正在研究使用以太坊创建认许制的区块链。

摩根大通打算用以太坊上创建一个私人区块链“Quorum”。其功能是洗乱派生性金融产品及其交易纪录来保护交易者的隐私，但同时匹配金融管制单位在信息公开上的要求，以期在保障隐私和信息公开之间找到平衡。

苏格兰皇家银行用以太坊的分布式记账和智能合约平台创建了一个结算交割机制（Clearing and Settlement Mechanism， CSM），可以达成每秒100笔交易、模拟六间银行，平均每个trip在3到8秒间完成，这些数值用在于全国的支付系统是可接受的。

四．项目研发

1.项目研发环境

| Win10系统 | 本体Remix | 本地区块链私链接 | Solidity | Metamask | Web3js |
| --------- | --------- | ---------------- | -------- | -------- | ------ |
|           |           |                  |          |          |        |

 

2.Remix

Remix是基于浏览器的编译器和IDE，使用户能够使用**Solidity****语言**构建**以太坊合约**并调试交易。

要尝试，请访问**[https://remix.ethereum.org](https://remix.ethereum.org/)**。

**https://github.com/ethereum/remix-ide/releases**还提供了其他在本地使用Remix的方法。请检查一下。

本项目使用的是本地remix-ide ![img](https://i.loli.net/2021/01/04/VGywtO17s4Xk2Tb.jpg)

 

选择编译器，进行编译。（本项目使用0.7版本编译器，本地去github 下载相应的编译器）![img](https://i.loli.net/2021/01/04/NEnal8z4gTZVhFq.jpg)

选择本地网络，![img](https://i.loli.net/2021/01/04/VDzuIQy73KbwsWF.jpg)此处需要打开本地私有链![img](https://i.loli.net/2021/01/04/XGvZ35eK16lrUJx.jpg)

同时，为了程序设定，要metamask进行连接

\3.    本地以太坊私有链

该项目用于本地调试，需要搭建本地私有以太坊私有链进行调试。当然，在测试网络进行直接测试也是可以的。关于本地私有链搭建，需要安装geth。（https://geth.ethereum.org/downloads/）选择自己相应的系统所对应的版本。![img](https://i.loli.net/2021/01/04/zbkoX78MsDxgLV6.jpg)

安装时务必勾选开发工具这一选项（其中包含私有链搭建的工具），安装好geth后。

（https://github.com/Heemale/EthereumPrivateChain）此处详细讲述了搭建私有链的细节，根据网址里的选项，进行选择，就可以顺利搭建私有链了。

\4.    Metamask

 

4.1 什么是metamsk?

MetaMask 是一个开源的以太坊钱包，能帮助用户方便地管理自己的以太坊数字资产。MetaMask允许用户以各种方式（包括硬件钱包）管理帐户及其密钥，同时将它们与站点上下文隔离。与将用户密钥存储在单个中央服务器甚至本地存储上相比，这是一个很大的安全性改进，它可以防止大量帐户被盗。

此安全功能还配备了开发商的方便：对于开发者来说，只需与全球可用的交互ethereumAPI，用于标识WEB3兼容的浏览器的用户（如MetaMask用户），每当你请求一个交易签名（如eth_sendTransaction，eth_signTypedData或其他）， MetaMask将以一种易于理解的方式提示用户。这样可以使用户随时了解情况，并使攻击者可以尝试对单个用户进行网络钓鱼，而不是进行大规模的黑客攻击（尽管DNS黑客攻击仍然可以用于网络钓鱼）。![img](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image037.jpg)

4.2 项目部署

连接本地私有以太坊，连接上本地账户。可以进行账户的转换，交易，与合约进行交互。（本项目使用的metamask需更新到8.0版本）

\5.    项目合约

// SPDX-License-Identifier: MIT

pragma solidity ^0.7.0;

 

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Counters.sol";

 

/*/contract owned {

  address public cowner = msg.sender;

  uint256 public price = 22222222;

   modifier onlyOwner {

  require(msg.sender == cowner,"u not owner");

​    

 _;

  

}

  

}

*/

contract GameItem is ERC721 {

  using Counters for Counters.Counter;

  Counters.Counter private _tokenIds;

   struct product {

​    string Name;

​    string Id;

​    string url;

​    uint256 price;

​    address owner;

​    uint256 mfgTimeStamp;

  }

  address public cowner = msg.sender;

  uint256 public price = 22222222;

   modifier onlyOwner {

  require(msg.sender == cowner,"u not owner");

​    

 _;

  

}

 mapping (address => uint256) public balance;

  mapping(uint256 => product) public products;

 mapping (address => uint) pendingWithdraws;

 

  constructor() public ERC721("GameItem", "ITM") {}

   

 

 

 

 

  function awardItem(string memory tokenURl,string memory _Name,string memory _Id)

​    public onlyOwner

​    returns (uint256)

  {

​    _tokenIds.increment();

 

​    uint256 tokenId = _tokenIds.current();

​    _mint(msg.sender, tokenId);

​    _setTokenURI(tokenId, tokenURl);

​      products[tokenId].Name = _Name;

​      products[tokenId].Id = _Id;

​      products[tokenId].price = 22222222;

​      products[tokenId].url = tokenURl;

​      products[tokenId].owner = msg.sender;

​      products[tokenId].mfgTimeStamp = uint256(block.timestamp);

​    return tokenId;

  }

  

 

  

  

  

  

   function getProductName(uint256 _tokenId)

​    public

​    view

​    

​    returns (

​    

​      string memory Name

​     

​     

​    )

  {

​    return (

​       

​      products[_tokenId].Name

​      

​     

​    

​    );

  }

  

  

  

  function getProdId(uint256 _Index)

​    public

​    view

​    returns (string memory r_token, uint256 r_index, string memory r_name )

  {

​    uint256 _token = tokenOfOwnerByIndex(msg.sender, _Index);

​    return (tokenURI(_token), _token,getProductName(_token));

  }

  

  

  

  

  

  

  

  

  

  

  

  

  

  function transferFrom(address from, address to, uint256 tokenId) public virtual override {

​    //solhint-disable-next-line max-line-length

​    require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: transfer caller is not owner nor approved");

 

   _transfer(from, to, tokenId);

​     products[tokenId].owner = to;

​     products[tokenId].Name;

​      products[tokenId].Id;

​      products[tokenId].url;

​      //_transfer(from, to, tokenId);

​      products[tokenId].owner = to;

​      products[tokenId].mfgTimeStamp;

  }

 

​    function buyproduct(address buy , uint256 tokenId) public payable returns (

​      string memory Name,

​      string memory Id,

​      string memory url,

​      address owner,

​      uint256 time

​    )

  {

​    require(msg.value == 2 ether,"u need 2ether");

​       _transfer(buy, msg.sender, tokenId);

​    return (

​      products[tokenId].Name,

​      products[tokenId].Id,

​      products[tokenId].url,

​      products[tokenId].owner = msg.sender,

​      products[tokenId].mfgTimeStamp

​    );

  }

  /*function tr(uint256 _value) public payable returns (bool success){

​    //equire(balance[msg.sender] >= _value,"Insuffcient funds for Transfer source");

​    balance[msg.sender] -= _value;

​    balance[address(this)] += _value;

​    //emit Transfer(msg.sender, _to, _value);

​     return true;

  }*/

  

  

  function getconwer() public view returns(address){

​    return cowner;

  }

  

  

  

  function getUserBalance(address _user) public view returns (uint256) {

​    return balanceOf(_user);

  }

 

   function getContractBalance() public view onlyOwner returns (uint256) {

​     return address(this).balance;

   }

   

​    function getContractBalance2() public view returns (uint256) {

​     return address(this).balance;

   }

   

​    function withdrawAmount(uint256 amount) public onlyOwner {

​     require(amount <= getContractBalance());

​     msg.sender.transfer(amount);

​    // emit Transfer(amount);

 

   }

​    function withdrawAmount2(uint256 amount) public {

​     require(amount <= getContractBalance());

​     msg.sender.transfer(amount);

​    // emit Transfer(amount);

 

   }

 

  

  function money() public payable {}

  

}

 

本项目是基于erc721的基础上进行开发。ERC-721是非同质化代币（Non-Fungible Token，缩写为NFT）的标准接口,ERC-721是非同质化代币，也就意味着每个Token都是不一样的，都有自己的唯一性和独特价值，当然这也就意味着它们是不可分割的，也同时具有了可追踪性。本合约所设计的收藏品的发行，每个收藏品或者产品将由一个代币来代表，该代币具有唯一性，由此来保证产品的价值，由厂商来部署合约，发布产品。只有合约部署者，才可以创建产品（代币），购买者将通过部署者的账户，以及所需要的代币id进行购买，本项目于web3js写定产品价格，2eth,购买者支付后，以太币会直接转入合约，只有合约的部署者即厂家可以查看余额以及提取余额到自己的帐户上。

 

\6.    应用界面

![img](https://i.loli.net/2021/01/04/826PhCoQae15EVX.jpg)

本项目运用web3js,与合约进行交互，合约部署者可以进行产品创建，查看合约余额，进行提钱。![img](https://i.loli.net/2021/01/04/2PoFs9XQcqUIkZJ.jpg)

购买者无发看到创建界面，只可以通过厂商的地址和产品ID进行购买。![img](file:///C:/Users/dell/AppData/Local/Temp/msohtmlclip1/01/clip_image043.jpg)![img](https://i.loli.net/2021/01/04/ZEzJli7OI4GXq8m.jpg)

购买后，钱会自动存入合约。![img](https://i.loli.net/2021/01/04/HnvILd89kVc4Oql.jpg)

部署者可以看到合约已经有两个以太币存入。合约的主人输入要提取的数量，可以提取相应的以太币。![img](https://i.loli.net/2021/01/04/Sc5JHBQVbpqFivY.jpg)![img](https://i.loli.net/2021/01/04/KGXTazSjPt5LiQY.jpg)

然后我们发现，余额已经变成一个以太币了。本项目结合ERC721代币，在此基础上，保证发行产品的价值，同时结合智能合约，可以很好的解决市场平台现象混乱以及收藏品假冒伪劣的问题。至此本次项目告一段落。（相关代码已上传github：https://github.com/smallzqq-cloud/erc721_product）

 

五．总结

1.项目总结

​    本次基于区块链基础所进行开发的收藏品发行项目，正式告一段落，本次项目针对当前国内外的市场环境所出现的问题进行探究研发，利用区块链的技术进行攻克，同时利用erc721代币的特殊性，解决了唯一性的问题，同时结合web3js进行前后端开发，做出了一个较为简陋的demo，后续或许会继续开发。

\2.   感言

​    历时长达一个月的开发，关于合约的改写，以及应用前后端调试，关于整体的整合，花了一些功夫，对各方面的了解都有了加深，消除了许多心中以前的一直保留的疑惑。另外本次项目感谢江海教授（下图，本人更好看）的指导。![1609401594968](https://i.loli.net/2021/01/04/JAbk4v9ms7LFDOo.jpg)

 

在合约与前后端调试，都在江教授的指导下完成，感谢江教授一个月来的帮助，和在这一个月的不断努力为我提供过帮助的友人，至此本次项目最终完成。