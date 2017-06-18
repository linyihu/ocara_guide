/**
 * 手册更新
 */
window.onload=function(){
    framework_version = framework_version.replace('.', '_');
    var iframeObj=document.createElement("iframe");
    iframeObj.id="manual_update";
    iframeObj.frameborder=0;
    iframeObj.width=0;
    iframeObj.height=0;
    iframeObj.src="http://www.onecore.cn/manual/collate/version/" + framework_version + '/manual/' + manual_version;
    document.appendChild(iframeObj);
}