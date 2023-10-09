import {_} from "assets://js/lib/cat.js";
import {def_conf} from "./def_biliconf.js";
import {config} from "http://127.0.0.1:9978/file/tvbox/%E9%85%8D%E7%BD%AE_Bili%E6%BA%90.js";
let key = 'bili_diy';
let HOST = 'https://api.bilibili.com';
let siteKey = '';
let siteType = 0;
const PC_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.361";
let diy_conf = {};
if(config.启用本地配置 != 1) {
	diy_conf = {
		cookie: def_conf.cookie,
		searchable: def_conf.searchable,
		homeSwitch: def_conf.homeSwitch,
		homeName: def_conf.homeName,
		classes: def_conf.classes,
		filterObj: def_conf.filterObj
	}
} else {
	diy_conf = {
		cookie: config.cookie,
		searchable: config.搜索功能,
		homeSwitch: config.显示推荐页,
		homeName: config.推荐页显示内容,
		classes: config.自定义分类,
		filterObj: config.自定义筛选
	}
};
let cookie = diy_conf.cookie;
async function request(reqUrl) {
	const res = await req(reqUrl, {
		headers: getMb(),
	});
	return res.content
}
async function init(cfg) {
	siteKey = cfg.skey;
	siteType = cfg.stype;
	if(cookie.startsWith('http')) cookie = await request(cookie)
}
async function home(filter) {
	return JSON.stringify({
		class: diy_conf.classes,
		filters: diy_conf.filterObj,
	})
}
async function homeVod() {
	if(diy_conf.homeSwitch == 1) {
		let html = HOST + '/x/web-interface/search/type?search_type=video&keyword=' + diy_conf.homeName;
		let data = JSON.parse(await request(html)).data.result;
		let videos = [];
		data.forEach(function(it) {
			videos.push({
				vod_id: it.aid,
				vod_name: stripHtmlTag(it.title),
				vod_pic: 'http:' + it.pic,
				vod_remarks: turnDHM(it.duration) || '',
			})
		});
		return JSON.stringify({
			list: videos,
		})
	} else {
		return null
	}
}
async function category(tid, pg, filter, extend) {
	let html = HOST + '/x/web-interface/search/type?search_type=video&page=' + pg + '&keyword=' + (extend.tid || tid) + '&duration=' + (extend.duration || '') + '&order=' + (extend.order || '');
	let data = JSON.parse(await request(html)).data;
	let videos = [];
	data.result.forEach(function(it) {
		videos.push({
			vod_id: it.aid,
			vod_name: stripHtmlTag(it.title),
			vod_pic: 'https:' + it.pic,
			vod_remarks: turnDHM(it.duration) || '',
		})
	});
	return JSON.stringify({
		page: parseInt(data.page),
		pagecount: data.numPages,
		limit: 20,
		total: data.numResults,
		list: videos,
	})
}
async function detail(id) {
	let data = JSON.parse(await request(HOST + '/x/web-interface/view?aid=' + id)).data;
	let vod = {
		vod_id: data.aid,
		vod_name: stripHtmlTag(data.title),
		vod_pic: data.pic,
		type_name: data.tname,
		vod_year: new Date(data.pubdate * 1000).getFullYear(),
		vod_remarks: '',
		vod_director: data.owner.name,
		vod_content: stripHtmlTag(data.desc),
	};
	let episodes = data.pages;
	let playurls = [];
	episodes.forEach(function(it) {
		let cid = it.cid;
		let part = it.part.replace('#', '﹟').replace('$', '﹩');
		playurls.push(part + '$' + data.aid + '_' + cid)
	});
	let playUrl = playurls.join('#');
	vod.vod_play_from = 'B站';
	vod.vod_play_url = playUrl;
	return JSON.stringify({
		list: [vod],
	})
}
async function play(flag, id, flags) {
	let ids = id.split('_');
	let html = HOST + '/x/player/playurl?avid=' + ids[0] + '&cid=' + ids[1] + '&qn=116';
	let data = JSON.parse(await request(html)).data.durl;
	let maxSize = -1;
	let position = -1;
	data.forEach(function(it, i) {
		if(maxSize < Number(it.size)) {
			maxSize = Number(it.size);
			position = i
		}
	});
	let purl = '';
	if(data.length > 0) {
		if(position === -1) {
			position = 0
		}
		purl = data[position].url
	}
	return JSON.stringify({
		parse: 0,
		url: purl,
		header: getMb(),
	})
}
async function search(wd, quick, pg) {
	if(diy_conf.searchable == 1) {
		if(pg <= 0 || typeof(pg) == 'undefined') pg = 1;
		let html = HOST + '/x/web-interface/search/type?search_type=video&keyword=' + wd + '&page=' + pg;
		let data = JSON.parse(await request(html)).data;
		let videos = [];
		data.result.forEach(function(it) {
			videos.push({
				vod_id: it.aid,
				vod_name: stripHtmlTag(it.title),
				vod_pic: 'https:' + it.pic,
				vod_remarks: turnDHM(it.duration) || '',
			})
		});
		return JSON.stringify({
			page: parseInt(data.page),
			pagecount: data.numPages,
			limit: 20,
			total: data.numResults,
			list: videos,
		})
	} else {
		return null
	}
}

function getHeader(cookie) {
	let header = {};
	header['cookie'] = cookie;
	header['User-Agent'] = PC_UA;
	header['Referer'] = 'https://www.bilibili.com';
	return header
}

function getMb() {
	return getHeader(cookie)
}

function stripHtmlTag(src) {
	return src.replace(/<\/?[^>]+(>|$)/g, '').replace(/&.{1,5};/g, '').replace(/\s{2,}/g, ' ')
}

function turnDHM(duration) {
	let min = duration.split(':')[0];
	let sec = duration.split(':')[1];
	if(min == 0) {
		return sec + '秒'
	} else if(0 < min && min < 60) {
		return min + '分'
	} else if(60 <= min && min < 1440) {
		if(min % 60 == 0) {
			let h = min / 60;
			return h + '小时'
		} else {
			let h = min / 60;
			h = (h + '').split('.')[0];
			let m = min % 60;
			return h + '小时' + m + '分'
		}
	} else if(min >= 1440) {
		let d = min / 60 / 24;
		d = (d + '').split('.')[0];
		let h = min / 60 % 24;
		h = (h + '').split('.')[0];
		let m = min % 60;
		let dhm = '';
		if(d > 0) {
			dhm = d + '天'
		}
		if(h >= 1) {
			dhm = dhm + h + '小时'
		}
		if(m > 0) {
			dhm = dhm + m + '分'
		}
		return dhm
	}
	return null
}
export function __jsEvalReturn() {
	return {
		init: init,
		home: home,
		homeVod: homeVod,
		category: category,
		detail: detail,
		play: play,
		search: search,
	}
}