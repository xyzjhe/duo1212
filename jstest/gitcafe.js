var rule = {
    title:'小纸条',
    host:'https://gitcafe.net',
    url:'/fyclass-fypage&vmid=$vmid',
    detailUrl:'/pgc/view/web/season?season_id=fyid',
    filter_url:'fl={{fl}}',
    searchUrl:'/x/web-interface/search/type?keyword=**&page=fypage&search_type=',
    searchable:1,
    filterable:1,
    quickSearch:0,
    timeout:5000,
    class_name:'华语电视&日韩电视&欧美电视&其他电视&华语电影&日韩电影&欧美电影&其他电影&华语动漫&日韩动漫&欧美动漫&纪录片&综艺片&华语音乐&日韩音乐&欧美音乐&其他音乐',
    class_url:'hyds&rhds&omds&qtds&hydy&rhdy&omdy&qtdy&hydm&rhdm&omdm&jlp&zyp&hyyy&rhyy&omyy&qtyy',
    play_parse:true,
    lazy:`js:
    input = alistPlay(input)
    `,
    limit:5,
    推荐:`js:
        let url = "https://gitcafe.net/alipaper/home.json";
        let html = request(url);
        let jRoot = JSON.parse(html);
        var vodList = jRoot.info.new;
        let data = jRoot.data;

        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                let obj = data[key];
                let name = obj["name"];
                if (name.includes("电影") ||  name.includes("电视") ||  name.includes("动漫") ||  name.includes("纪录") ||  name.includes("综艺") ||  name.includes("音乐")) {
                    let catdata = obj["catdata"];
                    vodList.push(...catdata);
                }
            }
          }

        let videos=[];
        vodList.forEach(function(vod){
            let aid=("https://www.aliyundrive.com/s/"+vod["alikey"]+"").trim();
            let title = (vod["title"] || "").trim();
            let img="https://www.lgstatic.com/i/image2/M01/15/7E/CgoB5lysLXCADg6ZAABapAHUnQM321.jpg";
            let remark=vod["date"];
            videos.push({vod_id:aid,vod_name:title,vod_pic:img,vod_remarks:remark})
        })
        VODS=videos
    `,
    一级:`js:
        var gitcafecookie = ""
        function get_result(){
            let videos=[];
            let url="https://gitcafe.net/tool/alipaper/";
            let html = request(url, {data:{"action":"viewcat","cat":MY_CATE,"num":MY_PAGE,"token":gitcafecookie}, method:'POST'}, true);
            let jRoot = JSON.parse(html);
            let vodList=jRoot.data;
            vodList.forEach(function(vod){
            let aid=("https://www.aliyundrive.com/s/"+vod["alikey"]+"").trim();
            let title=vod["title"].trim();
            let img="https://www.lgstatic.com/i/image2/M01/15/7E/CgoB5lysLXCADg6ZAABapAHUnQM321.jpg";
            let remark=vod["date"];
            videos.push({vod_id:aid,vod_name:title,vod_pic:img,vod_remarks:remark})
        })
            return videos
        }
        function getToken(){
            let url="https://gitcafe.net/tool/alipaper/";
            let html = request(url,{data:{"action":"get_token"},'method':'POST'});
            let jo=JSON.parse(html);
            gitcafecookie = jo["data"]
        }
        if (!gitcafecookie.length) {
            getToken()
        }
        VODS=get_result();
    `,
     二级:`js:
        let id=input;
        let title="";
        let pic="";
        let typeName="";
        let dec=id;
        let remark="";
        let vod={vod_id:id,vod_name:title,vod_pic:pic,type_name:typeName,vod_remarks:remark,vod_content:dec};
        
        initAlistShare();
        let alistVod = alistDetailContent(vod ,[input]);
        TABS = alistVod.tabs
        LISTS = alistVod.lists
        vod["vod_play_from"]=alistVod.tabs.join("$$$");

        for (var i in LISTS) {
            if (LISTS.hasOwnProperty(i)) {
              // print(i);
              try {
                LISTS[i] = LISTS[i].map(function (it) {
                  return it.split('$').slice(0, 2).join('$');
                });
              } catch (e) {
                print('格式化LISTS发生错误:' + e.message);
              }
            }
        }
        vod_play_url = LISTS.map(function (it) {
            return it.join('#');
        }).join("$$$");
        vod["vod_play_url"]=vod_play_url;
        VOD=vod;
     `,
    搜索:`js:
        var gitcafecookie = ""
        function get_result(){
            let videos=[];
            let url="https://gitcafe.net/tool/alipaper/";
            let html = request(url, {data:{"action":"search","keyword":KEY,"from":"web","token":gitcafecookie}, method:'POST'}, true);
            let jRoot = JSON.parse(html);
            let vodList=jRoot.data;
            vodList.forEach(function(vod){
            let aid=("https://www.aliyundrive.com/s/"+vod["alikey"]+"").trim();
            let title=vod["title"].trim();
            let img="https://www.lgstatic.com/i/image2/M01/15/7E/CgoB5lysLXCADg6ZAABapAHUnQM321.jpg";
            let remark=vod["date"];
            videos.push({vod_id:aid,vod_name:title,vod_pic:img,vod_remarks:remark})
        })
            return videos
        }
        function getToken(){
            let url="https://gitcafe.net/tool/alipaper/";
            let html = request(url,{data:{"action":"get_token"},'method':'POST'});
            let jo=JSON.parse(html);
            gitcafecookie = jo["data"]
        }
        if (!gitcafecookie.length) {
            getToken()
        }
        VODS=get_result();
    `,
}