window.onload = function () {

  var timer;
  //获取img-list
  var imgList = document.getElementById('imgList');
  //获取页面中所有的img标签
  var imgArr = imgList.getElementsByTagName('img');
  //设置imgList的宽度
  imgList.style.width = 1226 * imgArr.length + 'px';

  function autoChange() {
    //开启一个定时器，用来定时去切换图片
    timer = setInterval(function () {
      //执行动画，切换图片
      move(true);
    
    }, 3000);
  }

  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  next.onclick = function () {
    setA();
    move(true);
    clearInterval(timer);
  };
  prev.onclick = function () {
    setA();
    move();
    clearInterval(timer);
  };
 
  autoChange();

  //默认显示图片的索引
  var index=0;
 function move(status){
   if(status){
     index++
     if(index>=imgArr.length){
       index=0;
     }
   }else{
     index--;
     if(index<0){
       index=4;
     }
   }
   imgList.style.left=-1226*index+'px'
   setA();
 }
 var pointer = document.getElementById('pointer');
 var allA=pointer.getElementsByTagName('a');
   /*
         点击超链接切换到指定的图片
             点击第一个超链接，显示第一个图片
             点击第二个超链接，显示第二个图片
     * */
    setA();
  // 为所有的超链接都绑定单击响应函数
  for(let i=0;i<=allA.length;i++){
    //为每一个超链接都添加一个num属性
    allA[i].num= i;
    allA[i].onclick=function(){
    clearInterval(timer);
    index=this.num
    imgList.style.left=-1226*index+'px'
    setA();
    autoChange();    
  }
  }
 function setA(){
    //判断当前索引是否是最后一张图片
    if (index>=imgArr.length) {
      //则将index设置为0
      index = 0;
      //此时显示的最后一张图片，而最后一张图片和第一张是一摸一样
      //通过CSS将最后一张切换成第一张
      imgList.style.left = 0;
    }
  for(var i=0;i<allA.length;i++){
    allA[i].style.backgroundColor=''
  }
  allA[index].style.backgroundColor='black'
  }
  var banbaner = document.getElementById('banbaner');
  banbaner.onmouseenter = function () {
    clearInterval(timer);
  };

  banbaner.onmouseleave = function () {
    autoChange();
  };


}

