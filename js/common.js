$(function() {
	function exCmd(cmd){//简化版execCommand,用于不需要更改属性的功能
	    document.execCommand(cmd, false, null);  
	};
	$('.editControls a').click(function() {//点击a产生效果
		$(this).data('role')=='code' ?//只有在点击了源码按钮才会改变源码区域
		$('#sourceArea').text($('#editor').html()) :
		exCmd($(this).data('role'));//否则只在编辑区进行编辑
		}
	)
});