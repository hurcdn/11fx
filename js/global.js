
//$.ajaxSettings.async = false;
//常用正则规则
var rule_phone = /^((1[0-9]{10})|(029[0-9]{8}))$/;
var rule_qq = /^[0-9]{5,10}$/;
var rule_email = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[a-z]{2,3}$/;
var rule_zh = /^[\u4e00-\u9fa5]+$/;

function $F(fn){
	return $("#"+fn).val(); 
}
function $fo(fn,ft){
	var fv="";
	if (ft==1) //多选
	{
		$('input[name="'+fn+'"]:checked').each(function(){     
			fv+=$(this).val()+',';       
		 })
		fv=fv.substring(0,fv.length-1);
	} 
	else{
		fv=$('input[name="'+fn+'"]:checked').val();
	}
	return fv;
}
/* ====================== jq全局操作函数 ====================== */
//全选操作
function pe_checkall(_this, inputname) {
	var checkname = $(_this).attr("name");
	if ($(_this).is(":checked")) {
		$("input[name='"+inputname+"[]']").add("input[name='"+checkname+"']").attr("checked","checked");
	}
	else {
		$("input[name='"+inputname+"[]']").add("input[name='"+checkname+"']").removeAttr("checked");
	}
} 
//带提醒批量操作
function pe_cfall(_this, inputname, formid, show) {
	if ($("input[name='"+inputname+"[]']").filter(":checked").length == 0) {
		layer.msg('请先勾选需要'+show+'的信息!');
		return false;
	}
	layer.confirm('确认'+show+'吗?', {shade: false}, function(){
		$("#"+formid).attr("action", $(_this).attr("href")).submit();
	});
	/*else if (confirm('您确认'+show+'吗?')) {
		$("#"+formid).attr("action", $(_this).attr("href")).submit();
	}*/
	return false;
}
//带提醒单个操作
function pe_cfone(_this, show) {
	layer.confirm('确认'+show+'吗?', {
		shade: true,shade:0.5,shadeClose: true
	}, function(index){
		if ($(_this).is("a")) {
			return true;
		}
		else {
			if ($(_this).attr("target") == "_blank") {
				window.open($(_this).attr("href"));
				return false;
			}
			if (document.all) {  
				var referer_url = document.createElement('a');  
				referer_url.href = $(_this).attr("href");  
				document.body.appendChild(referer_url);  
				referer_url.click();  
			}
			else {
				window.location.href = $(_this).attr("href");
			}
		}
	}, function(){
	});
	return false;
};
function pe_editor(eid) {
    var editor = KindEditor.create('textarea[id="' + eid + '"]', {
        allowFileManager: true,
        //autoHeightMode: false,		
		filterMode: false,
		newlineTag :'br',
		pasteType : 1,
		width : "100%",
		allowImageUpload : true,
		items : ['source',
						'undo', 'redo','preview','fontsize','textcolor','bold', 'italic', 'underline',
					    'subscript','superscript','hr', 'image', 'multiimage','fullscreen'],
        afterCreate: function() {
            //this.loadPlugin('autoheight');
        },
        afterChange: function() {
            this.sync();
        },
        afterBlur: function() {
            this.sync();
        }
    });
    return editor;
}
//批量操作
function pe_doall(_this, formid) {
	$("#"+formid).attr("action", $(_this).attr("href")).submit();
}
//dialog函
function pe_open(_this, title, width, height,sha,issc,ismx) {
	if(width==0) width=$(window).width()-20;
	if(height==0) height=$(window).height()-20;
	var href=typeof(_this)=='object'?$(_this).attr("href"):_this;
	if(sha==undefined) sha=0.5;
	if(issc==undefined) issc=true;
	if(ismx==undefined) ismx=false;
	layer.open({
		type: 2,
		maxmin: ismx,
		title: title,
		shadeClose: issc,
		shade:sha,
		area: [width+'px', height+'px'],
		content: href,
		scrollbar: false
	});
	return false;
}

function pe_yzm(_this) {
	var yzm_url = $(_this).attr("src");
	var yzm_time = new Date().getTime();
	if (yzm_url.indexOf("time") >= 0) {
		yzm_url = yzm_url.replace(/time=\d+/, 'time=' + yzm_time);
	}
	else {
		yzm_url += (yzm_url.indexOf("?") >= 0 ? '&' : '?') + 'time=' + yzm_time;
	}
	$(_this).attr("src", yzm_url);
}

function pe_len(str) {
    return str.replace(/[^\x00-\xff]/g,"aaa").length;
}

function pe_href(_this){
	return window.location.href = $(_this).attr("href");
}