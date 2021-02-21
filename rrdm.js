function selectFrom(minValue,maxValue){
    var num = maxValue - minValue + 1;
    return Math.floor(Math.random()*num + minValue);
}
var flower= ["提示：每个来源的播放列表更新进度都不一样，注意切换！","提示：手机推荐用UC浏览器观看，电脑用谷歌浏览器观看！","提示：本站域名 www.rrdm.cc ，记得收藏推荐给朋友们哦！","提示：观看卡顿？想看的动漫没有？去留言让管理员处理！"];
$(".tips").text(flower[selectFrom(0,flower.length-1)]);
