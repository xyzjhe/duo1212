export var config={

//是否启用本地配置：0是网络配置，1是本地配置

启用本地配置:0
	
//设置自己的哔哩cookie
cookie:"https://raw.githubusercontent.com/xinyi1984/xytv/master/txt/cookie.txt",


//搜索开关，0是关闭，1是开启
searchable:1,

//推荐页开关，0是关闭，1是开启
homeSwitch:1,
 
//推荐页内容，在"homeSwitch=1"的情况下
 homeName:"白噪音",

//分类
 classes:[
		{"type_name":"🎙影视解说","type_id":"影视解说"},
		{"type_name":"🎪戏曲大全","type_id":"戏曲"},
		{"type_name":"🎭相声小品","type_id":"相声小品"},
		{"type_name":"📹纪录片","type_id":"纪录片"},
		{"type_name":"✒️书法国画","type_id":"书法国画"},
		{"type_name":"🌼园艺栽培","type_id":"园艺栽培"},
		{"type_name":"🎺吹拉弹唱","type_id":"乐器演奏"},
		{"type_name":"✂️奇巧手工","type_id":"手工制作"},
		{"type_name":"📋自学教程","type_id":"自学教程"},
		{"type_name":"💃舞蹈健身","type_id":"舞蹈健身"},
		{"type_name":"♟️棋牌合集","type_id":"下棋教学"},
		{"type_name":"🎶音乐鉴赏","type_id":"音乐合集"},	
		{"type_name":"🥙美食秘笈","type_id":"美食教程"},
		{"type_name":"🏫小灯塔学堂","type_id":"小灯塔学堂科学实验"},
		{"type_name":"📚幼儿乐园","type_id":"幼儿启蒙"},
		{"type_name":"📚人教版","type_id":"人教版"},
		{"type_name":"📚沪教版","type_id":"沪教版"},
		{"type_name":"📚苏教版","type_id":"苏教版"},
		{"type_name":"📚北师大版","type_id":"北师大版"},
		{"type_name":"👩‍⚕️健康生活","type_id":"健康养生知识"},
		{"type_name":"👮‍安全防骗","type_id":"网络安全防骗"},
		{"type_name":"💞心理健康","type_id":"心理健康"}
	],

//筛选	
 filterObj:{
	 "戏曲": [{"key": "tid","name": "分类","value": [{"n":"全部","v":""},{"n":"豫剧","v":"豫剧"},{"n":"曲剧","v":"河南曲剧"},{"n":"黄梅戏","v":"黄梅戏"},{"n":"越剧","v":"越剧"},{"n":"小戏骨","v":"小戏骨"},{"n":"民间小调","v":"民间小调"},{"n":"蒲剧","v":"蒲剧"},{"n":"吕剧","v":"吕剧"},{"n":"眉户","v":"眉户"},{"n":"歌仔戏","v":"歌仔戏"},{"n":"评剧","v":"评剧"},{"n":"沪剧","v":"沪剧"},{"n":"昆曲","v":"昆曲"},{"n":"花鼓戏","v":"花鼓戏"},{"n":"潮剧","v":"潮剧"},{"n":"芗剧","v":"芗剧"},{"n":"超清潮剧","v":"超清潮剧"},{"n":"百花潮剧院","v":"百花潮剧院"},{"n":"香港潮剧","v":"香港潮剧"},{"n":"潮剧院","v":"潮剧院"},{"n":"潮剧团","v":"潮剧团"},{"n":"潮剧全剧","v":"潮剧全剧"},{"n":"潮剧选段","v":"潮剧选段"},{"n":"名家潮剧","v":"名家潮剧"},{"n":"潮汕小品","v":"潮汕小品"},{"n":"潮汕讲古","v":"潮汕讲古"},{"n":"河北梆子","v":"河北梆子"},{"n":"梆子腔","v":"梆子腔"},{"n":"晋剧","v":"晋剧"},{"n":"龙江剧","v":"龙江剧"},{"n":"越调","v":"越调"},{"n":"山东梆子","v":"山东梆子"},{"n":"淮剧","v":"淮剧"},{"n":"滑稽戏","v":"滑稽戏"},{"n":"婺剧","v":"婺剧"},{"n":"绍剧","v":"绍剧"},{"n":"徽剧","v":"徽剧"},{"n":"雁剧","v":"雁剧"},{"n":"上党梆子","v":"上党梆子"},{"n":"秦腔","v":"秦腔"},{"n":"武安平调","v":"武安平调"},{"n":"二人台","v":"二人台"},{"n":"吉剧","v":"吉剧"},{"n":"高腔","v":"高腔"}]},{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
	 "相声小品": [{"key": "tid","name": "分类","value": [{"n":"全部","v":""},{"n":"单口相声","v":"单口相声"},{"n":"群口相声","v":"群口相声"},{"n":"德云社","v":"德云社"},{"n":"青曲社","v":"青曲社"},{"n":"郭德纲","v":"郭德纲"},{"n":"岳云鹏","v":"岳云鹏"},{"n":"评书","v":"评书"},{"n":"二人转","v":"二人转"},{"n":"春晚小品","v":"春晚小品"},{"n":"赵本山","v":"赵本山"},{"n":"陈佩斯","v":"陈佩斯"},{"n":"冯巩","v":"冯巩"},{"n":"宋小宝","v":"宋小宝"},{"n":"赵丽蓉","v":"赵丽蓉"},{"n":"郭达","v":"郭达"},{"n":"潘长江","v":"潘长江"},{"n":"郭冬临","v":"郭冬临"},{"n":"严顺开","v":"严顺开"},{"n":"开心麻花","v":"开心麻花"},{"n":"屌丝男士","v":"屌丝男士"},{"n":"戏剧综艺","v":"戏剧综艺"}]},{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
	 "纪录片": [{"key": "tid","name": "分类","value": [{"n":"全部","v":""},{"n":"动物","v":"动物世界"},{"n":"历史","v":"历史纪录片"},{"n":"时事","v":"时事报道纪录片"},{"n":"政论","v":"政论纪录片"},{"n":"生活","v":"生活纪录片"},{"n":"纪录片","v":"纪录片超清"},{"n":"人文地理","v":"人文地理纪录片"},{"n":"舞台","v":"舞台纪录片"},{"n":"专题","v":"专题纪录片"},{"n":"传记","v":"传记纪录片"}]},{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
	 "书法国画": [{"key": "tid","name": "分类","value": [{"n":"全部","v":""},{"n":"毛笔书法","v":"毛笔书法"},{"n":"楷书","v":"楷书教程"},{"n":"行书","v":"行书教程"},{"n":"草书","v":"草书教程"},{"n":"隶书","v":"隶书教程"},{"n":"篆书","v":"篆书教程"},{"n":"国画","v":"国画教程"},{"n":"人物画","v":"国画人物画教程"},{"n":"山水画","v":"山水画教程"},{"n":"花鸟画","v":"花鸟画教程"},{"n":"水墨画","v":"水墨画教程"},{"n":"水彩画","v":"水彩画教程"},{"n":"铅笔画","v":"铅笔画教程"},{"n":"素描","v":"素描教程"},{"n":"油画","v":"油画教程"},{"n":"版画","v":"版画教程"},{"n":"漆画","v":"漆画教程"},{"n":"粉笔画","v":"粉笔黑板画教程"},{"n":"板绘","v":"板绘教程"}]},{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
	 "园艺栽培": [{"key": "tid","name": "分类","value": [{"n":"全部","v":""},{"n":"园艺","v":"园艺"},{"n":"盆栽","v":"家庭盆栽推荐"},{"n":"室内","v":"室内盆栽"},{"n":"室外","v":"室外盆栽"},{"n":"花卉","v":"花卉种植"},{"n":"果树","v":"果树种植技术"},{"n":"蔬菜","v":"蔬菜种植技术"},{"n":"多肉","v":"多肉种植教程"},{"n":"配土","v":"盆栽配土教程"},{"n":"施肥","v":"盆栽肥料教程"},{"n":"修剪","v":"盆栽修剪教程"},{"n":"嫁接","v":"盆栽嫁接教程"},{"n":"鱼缸造景","v":"鱼缸造景"},{"n":"芦丁鸡造景","v":"芦丁鸡造景"}]},{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
	 "乐器演奏": [{"key": "tid","name": "分类","value": [{"n":"全部","v":""},{"n":"二胡","v":"二胡曲欣赏二胡教学"},{"n":"古筝","v":"古筝曲欣赏古筝教学"},{"n":"琵琶","v":"琵琶曲欣赏琵琶教学"},{"n":"洞箫","v":"洞箫欣赏洞箫教学"},{"n":"笛子","v":"笛子曲欣赏笛子教学"},{"n":"唢呐","v":"唢呐名曲唢呐教学"},{"n":"葫芦丝","v":"葫芦丝欣赏葫芦丝教学"},{"n":"钢琴","v":"钢琴名曲欣赏钢琴教学"},{"n":"口琴","v":"口琴欣赏口琴教学"},{"n":"小提琴","v":"小提琴名曲欣赏小提琴教学"},{"n":"吉他","v":"吉他欣赏吉他教程"},{"n":"手风琴","v":"手风琴欣赏教程"},{"n":"架子鼓","v":"架子鼓欣赏教程"},{"n":"埙","v":"埙欣赏埙教学"},{"n":"五线谱","v":"五线谱教程"},{"n":"简谱","v":"简谱教程"},{"n":"学唱歌","v":"声乐教程"}]},{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
	 "手工制作": [{"key": "tid","name": "分类","value": [{"n":"全部","v":""},{"n":"纸艺","v":"纸艺"},{"n":"折纸","v":"手工折纸"},{"n":"剪纸","v":"手工剪纸"},{"n":"捏彩泥","v":"橡皮泥"},{"n":"搭积木","v":"儿童积木搭建"},{"n":"纸箱改造","v":"纸箱手工"},{"n":"旧物改造","v":"废旧物改造"},{"n":"布艺","v":"布艺"},{"n":"串珠","v":"串珠教程"},{"n":"缝补","v":"缝补"},{"n":"编织","v":"手工编织"},{"n":"织毛线","v":"织毛线教程"},{"n":"刺绣","v":"刺绣"},{"n":"DIY","v":"diy手工"}]},{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
	 "自学教程": [{"key": "tid","name": "分类","value": [{"n":"全部","v":""},{"n":"办公","v":"办公软件教程"},{"n":"摄影","v":"手机/单反摄影教程"},{"n":"自媒体","v":"自媒体运营教程"},{"n":"理财","v":"理财教程"},{"n":"语言","v":"英语教程"},{"n":"设计","v":"设计软件教程"},{"n":"编程","v":"编程教程"},{"n":"建造","v":"建筑学教程"},{"n":"法律","v":"法律基础知识"}]},{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
	 "舞蹈健身": [{"key": "tid","name": "分类","value": [{"n":"全部","v":""},{"n":"广场舞","v":"广场舞教学"},{"n":"太极拳","v":"太极拳教学"},{"n":"健身操","v":"老年健身操"},{"n":"交际舞","v":"交际舞教学"},{"n":"秧歌","v":"秧歌舞"},{"n":"霹雳舞","v":"霹雳舞"},{"n":"街舞","v":"街舞"},{"n":"拉丁","v":"拉丁舞蹈"},{"n":"探戈","v":"探戈"},{"n":"瑜伽","v":"瑜伽"},{"n":"印度舞蹈","v":"印度舞蹈"},{"n":"男团","v":"男团"},{"n":"女团","v":"女团"}]},{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
	 "下棋教学": [{"key": "tid","name": "分类","value": [{"n":"全部","v":""},{"n":"象棋","v":"象棋教学进阶"},{"n":"国际象棋","v":"国际象棋教学进阶"},{"n":"围棋","v":"围棋教学进阶"},{"n":"五子棋","v":"五子棋教学进阶"},{"n":"军旗","v":"军旗教学进阶"},{"n":"飞行棋","v":"飞行棋教学进阶"},{"n":"跳棋","v":"跳棋教学进阶"},{"n":"斗地主","v":"斗地主教学进阶"},{"n":"麻将","v":"麻将教学进阶"},{"n":"四川麻将","v":"四川麻将教学进阶"},{"n":"国际麻将","v":"国际麻将教学进阶"},{"n":"台湾麻将","v":"台湾麻将教学进阶"},{"n":"欢乐麻将","v":"欢乐麻将教学进阶"},{"n":"二八杠","v":"二八杠麻将教学进阶"},{"n":"炸金花","v":"炸金花教学进阶"},{"n":"梭哈","v":"梭哈教学进阶"},{"n":"80分","v":"80分升级棋牌教学进阶"},{"n":"拱猪","v":"拱猪教学进阶"},{"n":"锄大地","v":"锄大地棋牌教学进阶"},{"n":"跑胡子","v":"跑胡子教学进阶"},{"n":"三打一","v":"三打一棋牌教学进阶"},{"n":"干瞪眼","v":"干瞪眼教学进阶"},{"n":"双扣","v":"双扣教学进阶"},{"n":"打滚子","v":"打滚子棋牌教学进阶"},{"n":"远离赌博，创造美好家庭","v":""}]},{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
	 "音乐合集": [{"key": "tid","name": "分类","value": [{"n":"全部","v":""},{"n":"演唱会","v":"演唱会"},{"n":"粤语","v":"粤语歌曲"},{"n":"热榜","v":"热门歌曲"},{"n":"KTV热门","v":"KTV热门歌曲"},{"n":"经典老歌","v":"经典老歌"},{"n":"古风歌曲","v":"古风歌曲"},{"n":"滚石经典","v":"滚石歌曲"},{"n":"闽南语歌曲","v":"闽南语歌曲"},{"n":"印度歌舞","v":"印度歌舞"},{"n":"DJ","v":"DJ歌曲"},{"n":"网红翻唱","v":"网红翻唱歌曲"},{"n":"韩国女团","v":"韩国女团演唱会"},{"n":"A阿黛尔","v":"阿黛尔演唱会"},{"n":"Blackpink","v":"blackpink演唱会"},{"n":"Beyond","v":"beyond演唱会"},{"n":"B坂井泉水","v":"坂井泉水演唱会"},{"n":"B宝丽金","v":"宝丽金演唱会"},{"n":"B布兰妮","v":"布兰妮演唱会"},{"n":"C陈瑞","v":"陈瑞歌曲"},{"n":"C崔健","v":"崔健演唱会"},{"n":"C陈意文","v":"陈意文歌曲"},{"n":"C蔡依林","v":"蔡依林演唱会"},{"n":"C草蜢","v":"草蜢演唱会"},{"n":"Coldplay","v":"coldplay演唱会"},{"n":"C陈慧娴","v":"陈慧娴演唱会"},{"n":"C陈百强","v":"陈百强演唱会"},{"n":"C陈淑桦","v":"陈淑桦演唱会"},{"n":"C陈慧琳","v":"陈慧琳演唱会"},{"n":"D邓丽君","v":"邓丽君演唱会"},{"n":"D邓紫棋","v":"邓紫棋演唱会"},{"n":"D刀郎","v":"刀郎演唱会"},{"n":"D达明一派","v":"刘以达歌曲"},{"n":"F费玉清","v":"费玉清演唱会"},{"n":"F飞图","v":"飞图演唱会"},{"n":"G谷村新司","v":"谷村新司演唱会"},{"n":"G郭富城","v":"郭富城演唱会"},{"n":"G高胜美","v":"高胜美演唱会"},{"n":"G关淑怡","v":"关淑怡演唱会"},{"n":"H黄凯芹","v":"黄凯芹演唱会"},{"n":"J降央卓玛","v":"降央卓玛演唱会"},{"n":"J江慧","v":"江慧歌曲"},{"n":"J吉永小百合","v":"吉永小百合歌曲"},{"n":"J金庸","v":"金庸影视歌曲"},{"n":"K柯以敏","v":"柯以敏演唱会"},{"n":"K邝美云","v":"邝美云歌曲"},{"n":"L刘德华","v":"刘德华演唱会"},{"n":"L李贞贤","v":"李贞贤演唱会"},{"n":"L李秀英","v":"李秀英演唱会"},{"n":"L李志","v":"李志歌曲"},{"n":"LadyGaga","v":"LadyGaga演唱会"},{"n":"L龙飘飘","v":"龙飘飘演唱会"},{"n":"L罗大佑","v":"罗大佑演唱会"},{"n":"L林志炫","v":"林志炫演唱会"},{"n":"L林忆莲","v":"林忆莲演唱会"},{"n":"L李知恩","v":"李知恩演唱会"},{"n":"L梁静茹","v":"梁静茹演唱会"},{"n":"L冷漠","v":"冷漠演唱会"},{"n":"L李克勤","v":"李克勤演唱会"},{"n":"L林子祥","v":"林子祥演唱会"},{"n":"L黎明","v":"黎明演唱会"},{"n":"L刘若英","v":"刘若英演唱会"},{"n":"M莫文蔚","v":"莫文蔚演唱会"},{"n":"M孟庭苇","v":"孟庭苇演唱会"},{"n":"M麦当娜","v":"麦当娜演唱会"},{"n":"M迈克杰克逊","v":"迈克杰克逊演唱会"},{"n":"N雅尼紫禁城","v":"雅尼紫禁城演唱会"},{"n":"P潘越云","v":"潘越云演唱会"},{"n":"P潘美辰","v":"潘美辰演唱会"},{"n":"Q齐秦","v":"齐秦演唱会"},{"n":"R任贤齐","v":"任贤齐演唱会"},{"n":"S苏慧伦","v":"苏慧伦演唱会"},{"n":"T童安格","v":"童安格演唱会"},{"n":"TFBOYS","v":"TFBOYS演唱会"},{"n":"T太极乐队","v":"太极乐队演唱会"},{"n":"T唐朝摇滚","v":"唐朝摇滚演唱会"},{"n":"T谭咏麟","v":"谭咏麟演唱会"},{"n":"W王琪","v":"王琪歌曲"},{"n":"W伍珂玥","v":"伍珂玥演唱会"},{"n":"W王杰","v":"王杰演唱会"},{"n":"W伍佰","v":"伍佰演唱会"},{"n":"W温兆伦","v":"温兆伦演唱会"},{"n":"W王菲","v":"王菲演唱会"},{"n":"X徐小凤","v":"徐小凤演唱会"},{"n":"X席琳迪翁","v":"席琳迪翁演唱会"},{"n":"X许嵩","v":"黄许嵩演唱会"},{"n":"X许美静","v":"许美静演唱会"},{"n":"X许冠杰","v":"许冠杰演唱会"},{"n":"X小虎队","v":"小虎队演唱会"},{"n":"X熊天平","v":"熊天平演唱会"},{"n":"X许巍","v":"许巍演唱会"},{"n":"Y叶启田","v":"叶启田演唱会"},{"n":"Y杨钰莹","v":"杨钰莹演唱会"},{"n":"Y叶玉卿","v":"叶玉卿演唱会"},{"n":"Y杨千嬅","v":"杨千嬅演唱会"},{"n":"Y怡正宵","v":"怡正宵演唱会"},{"n":"Z左麟右李","v":"左麟右李演唱会"},{"n":"Z张楚","v":"张楚演唱会"},{"n":"Z张真","v":"张真歌曲"},{"n":"Z张震岳","v":"张震岳演唱会"},{"n":"Z赵传","v":"赵传演唱会"},{"n":"Z周华健","v":"周华健演唱会"},{"n":"Z周启生","v":"周启生演唱会"},{"n":"Z张信哲","v":"张信哲演唱会"},{"n":"Z张也","v":"张也歌曲"},{"n":"Z周慧敏","v":"周慧敏演唱会"},{"n":"Z张碧晨","v":"张碧晨演唱会"},{"n":"Z中岛美雪","v":"中岛美雪演唱会"},{"n":"Z张学友","v":"张学友演唱会"},{"n":"Z张卫健","v":"张卫健歌曲"},{"n":"Z猪哥亮","v":"猪哥亮歌曲"},{"n":"Z周杰伦","v":"周杰伦演唱会"},{"n":"Z周深","v":"周深演唱会"},{"n":"Z张蔷","v":"张蔷演唱会"},{"n":"Z张帝","v":"张帝演唱会"},{"n":"Z张琳","v":"张琳，灰太狼"},{"n":"Z张国荣","v":"张国荣演唱会"},{"n":"Z周传雄","v":"周传雄演唱会"}]},{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
	 "影视解说": [{"key": "tid","name": "分类","value": [{"n":"全部","v":""},{"n":"影视解说","v":"影视解说"},{"n":"木鱼水心","v":"木鱼水心"},{"n":"史君说剧","v":"史君说剧"},{"n":"百晓生说剧","v":"百晓生说剧"},{"n":"low君","v":"low君"},{"n":"小片片","v":"小片片"},{"n":"刘哔电影","v":"刘哔电影"},{"n":"刘老师说电影","v":"刘老师说电影"},{"n":"电影最TOP","v":"电影最TOP"},{"n":"阿斗归来了","v":"阿斗归来了"},{"n":"老邪说电影","v":"老邪说电影"},{"n":"大蓝雀","v":"大蓝雀"},{"n":"big笑工坊","v":"big笑工坊"},{"n":"虫哥说电影","v":"虫哥说电影"},{"n":"蔡老板家的长工","v":"蔡老板家的长工"},{"n":"牛叔万岁万岁万万岁","v":"牛叔万岁万岁万万岁"},{"n":"嘻咦啊看","v":"嘻咦啊看"},{"n":"我是怪异君","v":"我是怪异君"},{"n":"UFC","v":"UFC"}]},{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
	 "美食教程": [{"key": "tid","name": "分类","value": [{"n":"全部","v":""},{"n":"家常菜","v":"家常菜"},{"n":"早餐","v":"早餐"},{"n":"面食","v":"面食"},{"n":"火锅","v":"火锅"},{"n":"烧烤","v":"烧烤"},{"n":"海鲜","v":"海鲜"},{"n":"津菜","v":"津菜"},{"n":"川菜","v":"川菜"},{"n":"湘菜","v":"湘菜"},{"n":"鲁菜","v":"鲁菜"},{"n":"苏菜","v":"苏菜"},{"n":"闽菜","v":"闽菜"},{"n":"粤菜","v":"粤菜"},{"n":"东北菜","v":"东北菜"},{"n":"冀菜","v":"冀菜"},{"n":"豫菜","v":"豫菜"},{"n":"鄂菜","v":"鄂菜"},{"n":"本帮菜","v":"本帮菜"},{"n":"客家菜","v":"客家菜"},{"n":"赣菜","v":"赣菜"},{"n":"京菜","v":"京菜"},{"n":"浙菜","v":"浙菜"},{"n":"徽菜","v":"徽菜"},{"n":"湘菜","v":"湘菜"},{"n":"凉菜","v":"凉菜"},{"n":"蒸菜","v":"蒸菜"},{"n":"日料","v":"日料"},{"n":"点心","v":"点心"},{"n":"汉堡","v":"汉堡"},{"n":"小吃","v":"小吃"},{"n":"素食","v":"素食"},{"n":"韩国菜","v":"韩国菜"},{"n":"泰国菜","v":"泰国菜"},{"n":"穆斯林菜","v":"穆斯林菜"},{"n":"土耳其菜系","v":"土耳其菜系"},{"n":"法国菜","v":"法国菜"},{"n":"意大利菜","v":"意大利菜"},{"n":"希腊菜","v":"希腊菜"},{"n":"德国菜","v":"德国菜"},{"n":"西班牙菜","v":"西班牙菜"},{"n":"阿拉伯菜","v":"阿拉伯菜"},{"n":"伊朗菜","v":"伊朗菜"},{"n":"中亚菜","v":"中亚菜"},{"n":"糖尿病菜","v":"糖尿病菜"}]},{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
	 "健康养生知识": [{"key": "tid","name": "分类","value": [{"n":"全部","v":""},{"n":"防治高血压","v":"防治高血压"},{"n":"防治高血脂","v":"防治高血脂"},{"n":"防治糖尿病","v":"防治糖尿病"},{"n":"预防脑梗","v":"预防脑梗"},{"n":"预防老年痴呆","v":"预防阿尔茨海默症"},{"n":"健康饮食","v":"中老年人饮食健康"},{"n":"健康操","v":"老年健康操"}]},{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
	 "网络安全防骗": [{"key": "tid","name": "分类","value": [{"n":"全部","v":""},{"n":"玩转手机","v":"教老人用手机"},{"n":"玩转微信","v":"教老人使用微信"},{"n":"骗局揭秘","v":"中老年人骗局揭秘"},{"n":"赌博骗局","v":"赌博骗局"},{"n":"防电信诈骗","v":"防电信诈骗"},{"n":"防拐卖","v":"防拐卖妇女儿童"},{"n":"防性侵","v":"女性防性侵"}]},{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
	 "心理健康": [{"key": "tid","name": "分类","value": [{"n":"全部","v":""},{"n":"正确教育孩子","v":"教育孩子的正确方法"},{"n":"儿童防拐骗","v":"儿童防拐骗"},{"n":"儿童性教育","v":"儿童性教育"},{"n":"儿童心理健康","v":"儿童心理健康"},{"n":"青少年心理健康","v":"青少年心理健康"},{"n":"老年人心理健康","v":"老年人心理健康"},{"n":"小学生心理健康","v":"小学生心理健康"},{"n":"中学生心理健康","v":"中学生心理健康"}]},{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
	 "小灯塔学堂科学实验": [{"key": "tid","name": "分类","value": [{"n":"全部","v":""},{"n":"科学","v":"小灯塔.剑桥数学启蒙课（全）"},{"n":"奇趣科学实验室","v":"小灯塔奇趣科学实验室"},{"n":"剑桥数学启蒙课","v":"小灯塔剑桥数学启蒙课"},{"n":"宇宙探秘之旅","v":"小灯塔十大主题宇宙探秘之旅"},{"n":"跟动物老师学发明","v":"小灯塔跟动物老师学发明"},{"n":"天才发明家","v":"小灯塔天才发明家"},{"n":"剑桥博士讲物理","v":"小灯塔剑桥博士讲物理"},{"n":"STEM奇妙科学课","v":"小灯塔STEM奇妙科学课"},{"n":"出发吧，月球！","v":"小灯塔出发吧，月球！"},{"n":"十大世界未解之谜","v":"小灯塔探秘十大世界未解之谜"},{"n":"神奇的气象魔法","v":"小灯塔神奇的气象魔法"},{"n":"了不起的新科技","v":"小灯塔了不起的新科技"},{"n":"百科","v":"10天玩转世界top10博物馆"},{"n":"世界博物馆","v":"玩转世界博物馆第二季"},{"n":"探秘恐龙世界","v":"【合集】带孩子探秘恐龙世界中文版"},{"n":"奇趣生物大百科","v":"奇趣生物大百科"},{"n":"动物世界","v":"玩转奇妙的动物世界"},{"n":"植物启蒙","v":"【小灯塔】给孩子的植物启蒙课"},{"n":"物种百科","v":"小灯塔给孩子的物种百科"},{"n":"昆虫记","v":"昆虫记"},{"n":"探秘故宫角落","v":"探秘故宫角落"},{"n":"top10名校","v":"10天游遍世界top10名校"},{"n":"top10名画","v":"看懂世界top10名画"},{"n":"地球","v":"【全8集】舌尖上的地球"},{"n":"地理","v":"给孩子的第一堂海洋课【完结】"},{"n":"海底世界","v":"穿越奇妙海底世界"},{"n":"地球生命史","v":"小灯塔地球生命史"},{"n":"探秘地球南北极","v":"小灯塔探秘地球南北极"},{"n":"世界十大名胜","v":"小灯塔探秘世界十大名胜"},{"n":"环球之旅","v":"小灯塔奇妙的环球之旅"},{"n":"华夏地理","v":"小灯塔探秘华夏地理"},{"n":"自然地理","v":"小灯塔自然地理大巡游"},{"n":"出发啦！敦煌","v":"小灯塔出发啦！敦煌"},{"n":"冲出亚马逊","v":"小灯塔冲出亚马逊"},{"n":"走进美国","v":"小灯塔走进美国"},{"n":"非洲大冒险","v":"小灯塔非洲大冒险"},{"n":"国学","v":"神奇的汉字故事全20集"},{"n":"唐诗大世界","v":"穿越唐诗大世界"},{"n":"诗词大会","v":"【小灯塔】诗词大会"},{"n":"三字经","v":"三字经幼儿启蒙(56集超清全)"},{"n":"西游记","v":"30集西游记精选故事给孩子看的经典神话"},{"n":"经典神话","v":"30集西游记精选故事给孩子看的经典神话"},{"n":"成语故事","v":"【100集全】成语故事动画小灯塔成语动画"},{"n":"中华名人故事","v":"【小灯塔】中华名人故事"},{"n":"山海经","v":"20集全【给孩子的山海经】小灯塔趣味动画"},{"n":"三国动画","v":"三国动画故事（24节全）"},{"n":"春节习俗","v":"【小灯塔】春节习俗追根溯源立春节"},{"n":"少儿版三国演义","v":"小灯塔少儿版三国演义"},{"n":"十二生肖","v":"【小灯塔】十二生肖"},{"n":"中华上下五千年","v":"【小灯塔】中华上下五千年"}]},{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
	 "幼儿启蒙": [{"key": "tid","name": "分类","value": [{"n":"全部","v":""},{"n":"儿童早教","v":"儿童早教"},{"n":"启蒙故事","v":"儿童启蒙故事"},{"n":"识字启蒙","v":"儿童识字启蒙"},{"n":"数学启蒙","v":"儿童数学启蒙"},{"n":"拼音启蒙","v":"儿童拼音启蒙"},{"n":"英语启蒙","v":"儿童英语启蒙"},{"n":"儿歌","v":"儿童歌曲"},{"n":"绘画","v":"儿童绘画"},{"n":"睡前故事","v":"睡前故事"},{"n":"动画","v":"儿童动画"},{"n":"儿童音乐","v":"儿童音乐"},{"n":"儿童安全教育","v":"儿童安全教育"},{"n":"贝瓦儿歌","v":"贝瓦儿歌"},{"n":"悟空识字","v":"悟空识字"},{"n":"宝宝巴士","v":"宝宝巴士"},{"n":"儿歌多多","v":"儿歌多多"},{"n":"学而思","v":"学而思"}]},{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
	 "人教版": [{"key": "tid","name": "分类","value": [{"n":"全部","v":""},{"n":"一年级","v":"一年级人教版"},{"n":"二年级","v":"二年级人教版"},{"n":"三年级","v":"三年级人教版"},{"n":"四年级","v":"四年级人教版"},{"n":"五年级","v":"五年级人教版"},{"n":"六年级","v":"六年级人教版"},{"n":"初一年级","v":"初一人教版"},{"n":"初二年级","v":"初二人教版"},{"n":"初三年级","v":"初三人教版"},{"n":"高一年级","v":"高一人教版"},{"n":"高二年级","v":"高二人教版"},{"n":"高三年级","v":"高三人教版"}]},{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
	 "沪教版": [{"key": "tid","name": "分类","value": [{"n":"全部","v":""},{"n":"一年级","v":"一年级沪教版"},{"n":"二年级","v":"二年级沪教版"},{"n":"三年级","v":"三年级沪教版"},{"n":"四年级","v":"四年级沪教版"},{"n":"五年级","v":"五年级沪教版"},{"n":"六年级","v":"六年级沪教版"},{"n":"初一年级","v":"初一沪教版"},{"n":"初二年级","v":"初二沪教版"},{"n":"初三年级","v":"初三沪教版"},{"n":"高一年级","v":"高一沪教版"},{"n":"高二年级","v":"高二沪教版"},{"n":"高三年级","v":"高三沪教版"}]},{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
	 "苏教版": [{"key": "tid","name": "分类","value": [{"n":"全部","v":""},{"n":"一年级","v":"一年级苏教版"},{"n":"二年级","v":"二年级苏教版"},{"n":"三年级","v":"三年级苏教版"},{"n":"四年级","v":"四年级苏教版"},{"n":"五年级","v":"五年级苏教版"},{"n":"六年级","v":"六年级苏教版"},{"n":"初一年级","v":"初一苏教版"},{"n":"初二年级","v":"初二苏教版"},{"n":"初三年级","v":"初三苏教版"},{"n":"高一年级","v":"高一苏教版"},{"n":"高二年级","v":"高二苏教版"},{"n":"高三年级","v":"高三苏教版"}]},{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}],
	 "北师大版": [{"key": "tid","name": "分类","value": [{"n":"全部","v":""},{"n":"一年级","v":"一年级北师大版"},{"n":"二年级","v":"二年级北师大版"},{"n":"三年级","v":"三年级北师大版"},{"n":"四年级","v":"四年级北师大版"},{"n":"五年级","v":"五年级北师大版"},{"n":"六年级","v":"六年级北师大版"},{"n":"初一年级","v":"初一北师大版"},{"n":"初二年级","v":"初二北师大版"},{"n":"初三年级","v":"初三北师大版"},{"n":"高一年级","v":"高一北师大版"},{"n":"高二年级","v":"高二北师大版"},{"n":"高三年级","v":"高三北师大版"}]},{"key": "order","name": "排序","value": [{ "n": "综合排序","v": "0"},{"n": "最多点击","v": "click"},{"n": "最新发布","v": "pubdate"},{"n": "最多弹幕","v": "dm"},{"n": "最多收藏","v": "stow"}]},{"key": "duration","name": "时长","value": [{"n": "全部","v": "0"},{"n": "60分钟以上","v": "4"},{"n": "30~60分钟","v": "3"},{"n": "10~30分钟","v": "2"},{"n": "10分钟以下","v": "1"}]}]
  
	}
}
