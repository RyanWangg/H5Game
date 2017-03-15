$(function() {
	//创造全局对象app，属性有status,count
	app = {};
	// 获取时间的span
	app.timeSpan = $('#time');
	// 获取显示按钮a
	app.btn = $('#btn');
	//游戏状态
	app.status = "init";
	//游戏时间为5秒
	app.time = 5000;
	//戳了多少下，初始值为0
	app.count = 0;

	//绑定按钮事件，触摸和点击
	app.btn.on('touchstart click', function() {
		switch(app.status) {
			case 'init' :
				start();
				break;
			case 'ing' :
				//显示次数在中间中间
				app.btn.html(++app.count);
				break;
		}
	});
});

function start() {
	app.status = 'ing';
	var counter = setInterval(timer, 7);

	function timer() {
		app.time -= 7;
		if(app.time <= 0) {
			app.time = 0;	//时间到
			clearInterval(counter);
		}

		app.curTime = (app.time / 1000).toFixed(3);   //保留三位小数
		if (app.curTime == '0.000') {
			app.timeSpan.html("时间到");
			alert("时间到！恭喜你，你的成绩是" + app.count + "次！");
		} else {
			app.timeSpan.html(app.curTime + 's');	//倒计时刷新
		}
	}
}

//重新开始，刷新页面
$('#again').on('touchstart click', function() {
	location.reload();
})