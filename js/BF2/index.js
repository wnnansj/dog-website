const glide = new Glide(".glide");

/* 获取标题的实例  */
const captionsEL = document.querySelectorall(".slide-caption");

/* glide提供了几个监听事件：当动画轮播/加载的时候  */
/* on是加载后，after是轮播后  */

/*  传递两个数组 mount.after,run.after   */
glide.on(["mount.after","run.after"],() => {
	/* 处理函数：获取当前显示的轮播  */
	const caption = captionsEL[glide.index];
	anime({
	/* 对谁实行动画，对caption下面的每一个元素：h1，h3等  */
	targets:caption.children,
	/* 透明度，从0到1，设置一个数组  */
	opacity:[0,1],
	/* 动画执行时间400毫秒  */
	duration:400,
	/* 动画执行函数，线性  */
	easing:"linear",
	/* 延迟函数，让每个元素分别延迟400，第二个参数h1出现前等300  */
	delay:anime.stagger(400,{start:300}),
	/* 过渡效果/相对于Y轴的偏离：从下方移动到上方，第一个参数是一开始的位置，0是回到
	原来的位置，第一个参数40是第一个元素h1向下移动的距离，10是最后一个元素
	button向下移动的距离，h3移动的距离在中间*/
	translateY:[anime.stagger([40,10]),0]
	});
});
	/* 轮播之前需要把透明度再还原回去，监听一个
	run.before函数  */
glide.on("run.before",()=> {
	/* 处理函数：先把caption下面所有元素选中，foreach：对于每
	个元素设置 隐藏为0  */
	document.querySelectorall(".slide-caption > *").forEach(el => {
	el.style.opacity = 0;
	});
});


glide.mount();


