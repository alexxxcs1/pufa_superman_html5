
var ScreenSize={'Width':750,'Height':1138};  //初始化屏幕尺寸对象，非正确定义

var baseURL = 'http://www.packy.club/newcanvas/'    //预加载域名 本地环境不用

var pre_resource = { //loding界面预加载集合，预留位置
    'img':[
        {'name':'pre_bg','src':'loader.jpg'},
    ]
}

var sprite_resource={   //sprite图形预加载集合，预留位置
    'img':[
        {'name':'cloud','src':'cloud.png'},
        {'name':'superman','src':'superman.png'},
        {'name':'supermandown','src':'supermandown.png'},
        {'name':'supermanfly','src':'supermanfly.png'},
        {'name':'supermansay','src':'supermansay.png'},
        {'name':'supermanstand1','src':'supermanstand1.png'},
        {'name':'supermanstand2','src':'supermanstand2.png'},
        {'name':'majorman','src':'majorman.png'},
        {'name':'supermanschooldown','src':'supermanschooldown.png'},
        {'name':'supermanschoolstand','src':'supermanschoolstand.png'},
        {'name':'supermanschoolhug','src':'supermanschoolhug.png'},
        {'name':'car','src':'car.png'},
        {'name':'studentthink','src':'studentthink.png'},
        {'name':'supermanhitground0','src':'supermanhitground0.png'},
        {'name':'supermanhitground1','src':'supermanhitground1.png'},
        {'name':'supermanendhitground0','src':'supermanendhitground0.png'},
        {'name':'supermanendhitground1','src':'supermanendhitground1.png'},
        {'name':'daxuemen','src':'daxuemen.png'},
        {'name':'majorphone','src':'majorphone.png'},
        {'name':'phone','src':'phone.png'},
        {'name':'supermanhomehug','src':'supermanhomehug.png'},
        {'name':'supermanback','src':'supermanback.png'},
        {'name':'supermanbackhitground','src':'supermanbackhitground.png'},
        {'name':'cat0','src':'cat.png'},
        {'name':'boom','src':'boom.png'},
        {'name':'paimaisay','src':'paimaisay.png'},
        {'name':'maishenpai','src':'maishenpai.png'},
        {'name':'misay','src':'misay.png'},
        {'name':'blink0','src':'blink0.png'},
        {'name':'blink1','src':'blink1.png'},
        {'name':'blink','src':'blink.png'},
        {'name':'renqunmid','src':'renqunmid.png'},
        {'name':'stage','src':'stage.png'},
        {'name':'airplane','src':'airplane.png'},
        {'name':'cat1','src':'scarycat.png'},
        {'name':'cat2','src':'catrun.png'},
        {'name':'huanniu','src':'huanniu.png'},
        {'name':'yellowcar','src':'yellowcar.png'},
        {'name':'breadcar','src':'breadcar.png'},
        {'name':'skygoose','src':'skygoose.png'},
        {'name':'tofriends','src':'tofriends.png'},
        {'name':'tofriendspage','src':'tofriendspage.png'},
        {'name':'savemoney','src':'savemoney.png'},
        {'name':'huodonginfo','src':'huodonginfo.png'},
        {'name':'hand','src':'hand.png'},
        {'name':'goslide','src':'goslide.png'},
        {'name':'scene','src':'scence.jpg'},

    ],
    'group':[
        {'name':'uav','type':'.png','endid':'1','srcname':'uav'},
        {'name':'pufalogoblink','type':'.png','endid':'1','srcname':'pufalogoblink'},
        {'name':'phonescence','type':'.png','endid':'11','srcname':'phonescence'},
        {'name':'appleman','type':'.png','endid':'5','srcname':'appleman'},
        {'name':'lightone','type':'.png','endid':'1','srcname':'lightone'},
        {'name':'lighttwo','type':'.png','endid':'1','srcname':'lighttwo'},
        {'name':'zhuchi','type':'.png','endid':'2','srcname':'zhuchi'},
        {'name':'studentsad','type':'.png','endid':'3','srcname':'studentsad'},
        {'name':'allblink','type':'.png','endid':'1','srcname':'allblink'},
        {'name':'renqunzuo','type':'.png','endid':'1','srcname':'renqunzuo'},
        {'name':'renqunzui','type':'.png','endid':'1','srcname':'renqunzui'},
        {'name':'renqunyou','type':'.png','endid':'1','srcname':'renqunyou'},
        {'name':'renqunyiu','type':'.png','endid':'1','srcname':'renqunyiu'},
        {'name':'huanniuhand','type':'.png','endid':'5','srcname':'huanniuhand'},
        {'name':'huanniufalldown','type':'.png','endid':'1','srcname':'huanniufalldown'},
        {'name':'purperman','type':'.png','endid':'3','srcname':'purperman'},
        {'name':'redhairman','type':'.png','endid':'3','srcname':'redhairman'},
        {'name':'shubaoman','type':'.png','endid':'3','srcname':'shubaoman'},
        {'name':'supermancloakdown','type':'.png','endid':'3','srcname':'supermancloakdown'},
        {'name':'shinetext','type':'.png','endid':'1','srcname':'shinetext'},
    ],
}

//页面准备配置------------------------
var pageLock=true;  //页面模拟滑动解锁，默认解锁

//var ScreenSize={Width:640,Height:1040}   //初始化屏幕尺寸对象，非正确定义

function pageScoll(e)
{
    if(pageLock)
    {
        e.preventDefault(); //阻止页面滑动动作
    }
}
/*var BKscence=new Image();   //本地测试图片
BKscence.src='img/scene.jpg'; //本地测试图片地址*/
var loaderClass;

//----------声音配置
var SoundPoint = [-501,500,1200,2000,2700,3500,4300,4700,5200,5700];
var SoundPlay = -1;
//
function audioAutoPlay(id){
    var audio = document.getElementById(id);
    audio.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
        audio.play();
        console.log('play'+id);
    }, false);
    document.addEventListener('YixinJSBridgeReady', function() {
        audio.play();
        console.log('play'+id);
    }, false);
}

//------------

//-----活动页关闭

function closehuodong()
{
    pageLock=true;
    $('#huodonginfoPage').fadeOut(1000);
}

//-----
$(document).ready(function()        //页面加载完成阶段执行
{


    ScreenSize.Width=window.innerWidth;
    ScreenSize.Height=window.innerHeight;

    $('#loadimg').css('top',(ScreenSize.Height/2)-$('#loadimg').height())
    $('#loadimg').css('left',ScreenSize.Width/2-$('#loadimg').width()/2+'px');

    $('#loadinfo').css('top',(ScreenSize.Height/2)-($('#loadinfo').height()/2))
    $('#loadinfo').css('left',ScreenSize.Width/2-$('#loadinfo').width()/2+'px');

    $('.membrane').css('width',ScreenSize.Width+'px');

    $('.typetitle').css('height',$('.membrane-bg').height()*0.2+'px');
    $('.typeface').css('height',$('.membrane-bg').height()*0.7+'px');

    $('#console').html($(window).height()+' '+window.innerWidth+' '+$(document).height());

    document.body.addEventListener('touchmove',function(e)
    {
        pageScoll(e);
    },false);



    $('#loaderScence').css('width','750px');
    $('#loaderScence').css('height',ScreenSize.Height+'px');
    $('#loaderScence').css('left',ScreenSize.Width/2-$('#loaderScence').width()/2+'px');
    $('#loaderScence').css('margin','0 auto');
    console.log(($('#loaderScence').width()+ScreenSize.Width)/2,$('#loaderScence').width(),ScreenSize.Width);

    //音频	   //初始化音频文件
    audioAutoPlay('sound_0');

    //----------
    loaderClass=new ResLoader(baseURL);

    loaderClass.load(sprite_resource,function(process){
				$("#process").html(process+"%");				//把进度显示在id为process的section上
			},function(){
        Movie.init();
        $("#loaderScence").fadeOut(1000);
    });

    // BKscence.onload = function () {
    //
    //    }

    //--------

});
//-------------------------------------

//动画场景配置--------------------------
var Movie={
        MovieInterval:null,
        MovieFrame:0,
        MovieCanvas:null,
        MovieContext:null,
        spriteCanvas:null,
        spriteContext:null,
        Width:750,
        Height:1138,
        Mpostion:0,
        speed:0,
        sceneHeight:7376,//图片高度，仅用来计算
        tofriendsLock:false,
        huodongLock:false,
        speedratio:1,
        init:function()
        {
            Movie.Height=ScreenSize.Height;
            Movie.MovieCanvas=document.getElementById('m_canvas');
            Movie.MovieContext=Movie.MovieCanvas.getContext('2d');
            $(Movie.MovieCanvas).attr('height',ScreenSize.Height);
            $(Movie.MovieCanvas).attr('width',ScreenSize.Width);

            Movie.spriteCanvas=document.createElement('canvas');
            $(Movie.spriteCanvas).attr('width',Movie.Width);
            $(Movie.spriteCanvas).attr('height',Movie.Height);
            Movie.spriteContext=Movie.spriteCanvas.getContext('2d');

            Movie.play();

            $('#movie').css('width','750px');
            $('#movie').css('height',ScreenSize.Height+'px');
            document.getElementById('movie').addEventListener('touchstart',touch_start,false);
            document.getElementById('movie').addEventListener('touchmove',touch_move,false);
            document.getElementById('movie').addEventListener('touchend',touch_end,false);

        },

        play:function()
        {


            Movie.MovieFrame=0;

            Movie.MovieInterval=setInterval(function()
            {
                Movie.MovieContext.clearRect(0,0,Movie.Width,Movie.Height);
                Movie.MovieContext.drawImage(LoadedRes['scene'],0,Movie.Mpostion,Movie.Width,Movie.Height,0,0,Movie.Width,Movie.Height);
                //Srpite画布
                Movie.spriteContext.clearRect(0,0,Movie.Width,Movie.Height); //sprite canvas初始化


                for(i=0;i<sprite.length;i++)
                {
                    if (sprite[i].surpriseMF()) {
                            var sprite_Postion=sprite[i].spritePostion();
                            sprite_Postion[1]=sprite_Postion[1]-Movie.Mpostion;

                            Movie.spriteContext.drawImage(sprite[i].spritebase,sprite_Postion[0],sprite_Postion[1]);
                    }
                }


                Movie.MovieContext.drawImage(Movie.spriteCanvas,0,0);  //添加到场景
                //------

                Movie.MovieFrame++;

                if(Movie.MovieFrame==24)
                {
                    Movie.MovieFrame=0;
                }

                if (Movie.Mpostion>=1700&Movie.Mpostion<=2600) {
                    Movie.speedratio=0.32;
                }else if (Movie.Mpostion>=5600&Movie.Mpostion<=7000) {
                    Movie.speedratio=0.32;
                }else {
                    Movie.speedratio=0.4;
                }

                if(!touchstart)
                {

                    Movie.speed=parseInt((Movie.speed*0.8)*1000)/1000;
                    Movie.speed.toFixed(4);
                }else
                {
                    Movie.speed = (oldY - newY)*Movie.speedratio;
                    oldY=newY;
                }
                if (Movie.tofriendsLock||Movie.huodongLock) {
                    Movie.Mpostion=Movie.Mpostion+0;
                }else
                {

                    Movie.Mpostion=(parseInt(Movie.Mpostion*1000)/1000)+Movie.speed;
                }

                Movie.Mpostion=Math.max(Movie.Mpostion,0);
                Movie.Mpostion=Math.min(Movie.Mpostion,Movie.sceneHeight-Movie.Height);
                //位置触发声音 预留位


            },50);


        }

}

//声音触发点 集合


//----------------------------

var newY,oldY;

newY = 0;
oldY = 0;

var touchstart=false;

function touch_start(e)
{


    if (e.touches[0].pageY+Movie.Mpostion>6728&&e.touches[0].pageY+Movie.Mpostion<6812&&e.touches[0].pageX>128&&e.touches[0].pageX<352) {
        if (!Movie.huodongLock) {
            Movie.tofriendsLock=true;
        }else
        {
            Movie.huodongLock=false;
        }
    }else if (e.touches[0].pageY+Movie.Mpostion>6740&&e.touches[0].pageY+Movie.Mpostion<6798&&e.touches[0].pageX>427&&e.touches[0].pageX<592) {
        if (!Movie.tofriendsLock&&!Movie.huodongLock) {
            window.location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe9d7e3d98ec68189&redirect_uri=https://weixin.spdbccc.com.cn/spdbcccWeChatPage/yck/index.do&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect';
        }else{
            Movie.tofriendsLock=false;
            Movie.huodongLock=false;
        }
    }else if (e.touches[0].pageY+Movie.Mpostion>7149&&e.touches[0].pageY+Movie.Mpostion<7181&&e.touches[0].pageX>328&&e.touches[0].pageX<436) {
        if (!Movie.tofriendsLock) {
            pageLock=false;
            $('#huodonginfoPage').show();
        }else {
            Movie.tofriendsLock=false;
        }
    }else{
        Movie.tofriendsLock=false;
    }

    if (e.touches.length==1) {
        touchstart=true;
        oldY=e.touches[0].pageY;
        newY=oldY;
    }

    if (Movie.speed>0){
        for(i=0;i<SoundPoint.length;i++){
            if (Math.abs(Movie.Mpostion-SoundPoint[i])<400 && Movie.Mpostion>SoundPoint[i]){
                if (SoundPlay == i)return;
                SoundPlay = i;
                audioAutoPlay('sound_'+i);
                console.log('play'+i);
                break;

            }

        }
    }
}

function touch_move(e)
{
    if (!touchstart) return;
    newY=e.touches[0].pageY;
}
function touch_end(e)
{
    if (!touchstart) return;
    touchstart=false;
}

//sprite 类

var sprite=[
  {
      img:'uav',
      spritebase:null,
      surpriseMF:function()
      {
          if (Movie.Mpostion>300&&Movie.Mpostion<2400) {
              var spritebase=new Image();
              var groupid=this.transfrom();
              // spritebase.src=this.imgurl+groupid+'.png';
              this.spritebase=LoadedRes[this.img+groupid];
              return true;
          }else
          {
              return false;
          }
      },
      spritePostion:function()
      {

          if (this.surpriseMF()) {
            if (Movie.Mpostion>300&&Movie.Mpostion<600) {
              x=750-(Movie.Mpostion-300)*1.73+(Math.random()*10)
              y=971+(Movie.Mpostion-300)+(Math.random()*10);
            }else {
              x=229;
              y=1270;
            }

          }
          return [x,y];
      },
      transfrom:function()
      {
          if (Movie.MovieFrame%2==0) {
              return 0;
          }else {
              return 1;
          }
      }
  },
    {
        img:'phone',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>4760&&Movie.Mpostion<5500) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                if (Movie.Mpostion>4760&&Movie.Mpostion<5095) {
                    x=165+(Movie.Mpostion-4760)*0.059;
                    y=5215+(Movie.Mpostion-4760);
                }else {
                    x=185;
                    y=5550;
                }
            }
            return [x,y];
        },
        transfrom:function()
        {
            return '';
        }
    },
    {
        img:'airplane',
        spritebase:null,
        played:false,
        mid:false,
        time:0,
        surpriseMF:function()
        {
            if (Movie.Mpostion>=0&&Movie.Mpostion<500) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                if (Movie.speed>0) {
                    this.played=true;
                }
                return true;
            }else
            {
                this.played=false;
                this.time=0;
                return false;
            }
        },
        spritePostion:function()
        {

            if (this.surpriseMF()) {

                if (!this.played) {
                    if(this.time*20-(this.spritebase.width/2)<375)
                    {
                        x=750-this.time*20;
                        y=170;
                        this.mid=true;
                        this.time++;

                    }else {
                        x=750-this.time*20;
                        y=170;
                    }
                }else if (this.played&&this.mid) {
                    x=750-this.time*20;
                    y=170;
                    this.time++;
                }
                // if ((750-this.time*20)<(-this.spritebase.width)) {
                //     this.played=true;
                //     this.time=0;
                // }
                //
                // if (!this.played) {
                //     x=750-this.time*20;
                //     y=170;
                // }else {
                //     x=-this.spritebase.width;
                //     y=170;
                // }

            }
            return [x,y];
        },
        transfrom:function()
        {
            return '';
        }
    },

    {
        img : 'appleman0',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>300&&Movie.Mpostion<2000) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                if (Movie.Mpostion>450&&Movie.Mpostion<650) {
                    x=603-(Movie.Mpostion-450);
                    y=1777;
                }else {
                    x=403;
                    y=1777;
                }
            }
            return [x,y];
        },
        transfrom:function()
        {
            return '';
        }
    },
    {
        img : 'appleman1',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>300&&Movie.Mpostion<2000) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                if (Movie.Mpostion>450&&Movie.Mpostion<750) {
                    x=747-(Movie.Mpostion-450);
                    y=1788;
                }else {
                    x=447;
                    y=1788;
                }
            }
            return [x,y];
        },
        transfrom:function()
        {
            return '';
        }
    },
    {
        img : 'appleman2',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>300&&Movie.Mpostion<2000) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                if (Movie.Mpostion>450&&Movie.Mpostion<850) {
                    x=884-(Movie.Mpostion-450);
                    y=1796;
                }else {
                    x=484;
                    y=1796;
                }
            }
            return [x,y];
        },
        transfrom:function()
        {
            return '';
        }
    },
    {
        img : 'appleman3',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>300&&Movie.Mpostion<2000) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                if (Movie.Mpostion>450&&Movie.Mpostion<1050) {
                    x=-112+(Movie.Mpostion-450);
                    y=2423-(Movie.Mpostion-450);
                }else {
                    x=512;
                    y=1823;
                }
            }
            return [x,y];
        },
        transfrom:function()
        {
            return '';
        }
    },
    {
        img : 'appleman4',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>300&&Movie.Mpostion<2000) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                if (Movie.Mpostion>450&&Movie.Mpostion<1150) {
                    x=1248-(Movie.Mpostion-450);
                    y=1863;
                }else {
                    x=548;
                    y=1863;
                }
            }
            return [x,y];
        },
        transfrom:function()
        {
            return '';
        }
    },
    {
        img : 'appleman5',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>300&&Movie.Mpostion<2000) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                if (Movie.Mpostion>450&&Movie.Mpostion<1250) {
                    x=-199+(Movie.Mpostion-450);
                    y=3487-(Movie.Mpostion-450)*2;
                }else {
                    x=601;
                    y=1887;
                }

            }
            return [x,y];
        },
        transfrom:function()
        {
            return '';
        }
    },
    {
        img : 'stage',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>500&&Movie.Mpostion<3200) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                x=94;
                y=2189;
            }
            return [x,y];
        },
        transfrom:function()
        {
            return ''
        }
    },
    {
        img : 'skygoose',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>300&&Movie.Mpostion<2000) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                if (Movie.MovieFrame<12) {
                    x=141+Movie.MovieFrame;
                    y=1977;
                }else {
                    x=153-(Movie.MovieFrame-12);
                    y=1977;
                }

            }
            return [x,y];
        },
        transfrom:function()
        {
            return '';
        }
    },
    {
        img : 'zhuchi',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>500&&Movie.Mpostion<4200) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                x=510;
                y=2410;
            }
            return [x,y];
        },
        transfrom:function()
        {
            if (Movie.Mpostion<2070) {
                return Math.floor(Movie.MovieFrame/12);
            }else
            {
                return 2;
            }

        }
    },
        {
            img : 'majorman',
            spritebase:null,
            surpriseMF:function()
            {
                if (Movie.Mpostion>1000&&Movie.Mpostion<2070) {
                    var spritebase=new Image();
                    var groupid=this.transfrom();
                    // spritebase.src=this.imgurl+groupid+'.png';
                    this.spritebase=LoadedRes[this.img+groupid];
                    return true;
                }else
                {
                    return false;
                }
            },
            spritePostion:function()
            {
                if (this.surpriseMF()) {
                    x=270;
                    y=2421;
                }
                return [x,y];
            },
            transfrom:function()
            {
                return '';
            }
        },
        {
            img : 'maishenpai',
            spritebase:null,
            surpriseMF:function()
            {
                if (Movie.Mpostion>2070&&Movie.Mpostion<3000) {
                    var spritebase=new Image();
                    var groupid=this.transfrom();
                    // spritebase.src=this.imgurl+groupid+'.png';
                    this.spritebase=LoadedRes[this.img+groupid];
                    return true;
                }else
                {
                    return false;
                }
            },
            spritePostion:function()
            {
                if (this.surpriseMF()) {
                    if (Movie.Mpostion>2070&&Movie.Mpostion<2070) {
                        x=270;
                        y=2507+(Movie.Mpostion-2070);
                    }else
                    {
                        x=270;
                        y=2707;
                    }

                }
                return [x,y];
            },
            transfrom:function()
            {
                return '';
            }
        },
    {
        img : 'allblink',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>1500&&Movie.Mpostion<4200) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                x=95;
                y=2189;
            }
            return [x,y];
        },
        transfrom:function()
        {
            if (Movie.MovieFrame<4&&Movie.MovieFrame>0||Movie.MovieFrame<12&&Movie.MovieFrame>6) {
                return 0
            }else {
                return 1
            }
        }
    },
    {
        img : 'renqunyou',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>500&&Movie.Mpostion<4200) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                x=503;
                y=2857;
            }
            return [x,y];
        },
        transfrom:function()
        {
            if (Movie.MovieFrame<6&&Movie.MovieFrame>0) {
                return 1
            }else {
                return 0
            }
        }
    },
    {
        img : 'renqunyiu',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>500&&Movie.Mpostion<4200) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                x=434;
                y=2883;
            }
            return [x,y];
        },
        transfrom:function()
        {
            if (Movie.MovieFrame<13&&Movie.MovieFrame>3) {
                return 1
            }else {
                return 0
            }
        }
    },
    {
        img : 'renqunzui',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>500&&Movie.Mpostion<4200) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                x=239;
                y=2888;
            }
            return [x,y];
        },
        transfrom:function()
        {
            if (Movie.MovieFrame<10&&Movie.MovieFrame>2) {
                return 1
            }else {
                return 0
            }
        }
    },
    {
        img : 'renqunmid',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>500&&Movie.Mpostion<4200) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                x=360;
                y=2886;
            }
            return [x,y];
        },
        transfrom:function()
        {
            return ''
        }
    },
    {
        img : 'renqunzuo',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>500&&Movie.Mpostion<4200) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                x=90.8;
                y=2827;
            }
            return [x,y];
        },
        transfrom:function()
        {
            if (Movie.MovieFrame<17&&Movie.MovieFrame>10) {
                return 1
            }else {
                return 0
            }
        }
    },

    {
        img : 'blink',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>1500&&Movie.Mpostion<4200) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                x=180;
                y=2357;
            }
            return [x,y];
        },
        transfrom:function()
        {
                if (Movie.MovieFrame>16) {
                    return 0
                }else {
                    return ''
                }
        }
    },
    {
        img : 'blink',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>1500&&Movie.Mpostion<4200) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                x=445;
                y=2199;
            }
            return [x,y];
        },
        transfrom:function()
        {
                if (Movie.MovieFrame>12) {
                    return 1
                }else {
                    return ''
                }
        }
    },
    {
        img:'boom',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>5800) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                x=441;
                y=7098;
            }
            return [x,y];
        },
        transfrom:function()
        {
            return '';
        }
    },
    {
        img:'lightone',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>3400&&Movie.Mpostion<4760) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                x=522;
                y=4798;
            }
            return [x,y];
        },
        transfrom:function()
        {
            var randomnum=Math.random();
            if (randomnum>=0.2) {
                return 0;
            }else {
              return 1;
            }
        }

    },
    {
        img:'lighttwo',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>3400&&Movie.Mpostion<5200) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                x=367;
                y=5113;
            }
            return [x,y];
        },
        transfrom:function()
        {
            var randomnum=Math.random();
            if (randomnum>=0.3) {
                return 0;
            }else {
              return 1;
            }
        }

    },


        {
            img:'redhairman',
            spritebase:null,
            surpriseMF:function()
            {
                if (Movie.Mpostion>5400&&Movie.Mpostion<7000) {
                    var spritebase=new Image();
                    var groupid=this.transfrom();
                    // spritebase.src=this.imgurl+groupid+'.png';
                    this.spritebase=LoadedRes[this.img+groupid];
                    return true;
                }else
                {
                    return false;
                }
            },
            spritePostion:function()
            {
                if (this.surpriseMF()) {
                    x=205;
                    y=6870
                }
                return [x,y];
            },
            transfrom:function()
            {

                if (Movie.MovieFrame>0&&Movie.MovieFrame<=6) {
                    return 0;
                }else if (Movie.MovieFrame>6&&Movie.MovieFrame<=12) {
                    return 1;
                }else if (Movie.MovieFrame>12&&Movie.MovieFrame<=18) {
                    return 2;
                }else if (Movie.MovieFrame>18&&Movie.MovieFrame<=24) {
                    return 3;
                }else {
                    return 0;
                }

            }
        },
        {
            img:'shubaoman',
            spritebase:null,
            surpriseMF:function()
            {
                if (Movie.Mpostion>5400&&Movie.Mpostion<7000) {
                    var spritebase=new Image();
                    var groupid=this.transfrom();
                    // spritebase.src=this.imgurl+groupid+'.png';
                    this.spritebase=LoadedRes[this.img+groupid];
                    return true;
                }else
                {
                    return false;
                }
            },
            spritePostion:function()
            {
                if (this.surpriseMF()) {
                    x=330;
                    y=6870
                }
                return [x,y];
            },
            transfrom:function()
            {

                if (Movie.MovieFrame>0&&Movie.MovieFrame<=6) {
                    return 0;
                }else if (Movie.MovieFrame>6&&Movie.MovieFrame<=12) {
                    return 1;
                }else if (Movie.MovieFrame>12&&Movie.MovieFrame<=18) {
                    return 2;
                }else if (Movie.MovieFrame>18&&Movie.MovieFrame<=24) {
                    return 3;
                }else {
                    return 0;
                }

            }
        },
        {
            img:'purperman',
            spritebase:null,
            surpriseMF:function()
            {
                if (Movie.Mpostion>5400&&Movie.Mpostion<7000) {
                    var spritebase=new Image();
                    var groupid=this.transfrom();
                    // spritebase.src=this.imgurl+groupid+'.png';
                    this.spritebase=LoadedRes[this.img+groupid];
                    return true;
                }else
                {
                    return false;
                }
            },
            spritePostion:function()
            {
                if (this.surpriseMF()) {
                    x=435;
                    y=6870
                }
                return [x,y];
            },
            transfrom:function()
            {

                if (Movie.MovieFrame>0&&Movie.MovieFrame<=6) {
                    return 0;
                }else if (Movie.MovieFrame>6&&Movie.MovieFrame<=12) {
                    return 1;
                }else if (Movie.MovieFrame>12&&Movie.MovieFrame<=18) {
                    return 2;
                }else if (Movie.MovieFrame>18&&Movie.MovieFrame<=24) {
                    return 3;
                }else {
                    return 0;
                }

            }
        },
        {
            img:'tofriends',
            spritebase:null,
            surpriseMF:function()
            {
                if (Movie.Mpostion>5000&&Movie.Mpostion<7000) {
                    var spritebase=new Image();
                    var groupid=this.transfrom();
                    // spritebase.src=this.imgurl+groupid+'.png';
                    this.spritebase=LoadedRes[this.img+groupid];
                    return true;
                }else
                {
                    return false;
                }
            },
            spritePostion:function()
            {
                if (this.surpriseMF()) {
                    x=128;
                    y=6728;
                }
                return [x,y];
            },
            transfrom:function()
            {
                return ''
            }
        },
        {
            img:'savemoney',
            spritebase:null,
            surpriseMF:function()
            {
                if (Movie.Mpostion>5000&&Movie.Mpostion<7000) {
                    var spritebase=new Image();
                    var groupid=this.transfrom();
                    // spritebase.src=this.imgurl+groupid+'.png';
                    this.spritebase=LoadedRes[this.img+groupid];
                    return true;
                }else
                {
                    return false;
                }
            },
            spritePostion:function()
            {
                if (this.surpriseMF()) {
                    x=397;
                    y=6728;
                }
                return [x,y];
            },
            transfrom:function()
            {
                return ''
            }
        },
        {
            img:'supermancloakdown',
            spritebase:null,
            surpriseMF:function()
            {
                if (Movie.Mpostion>5930&&Movie.Mpostion<7000) {
                    var spritebase=new Image();
                    var groupid=this.transfrom();
                    // spritebase.src=this.imgurl+groupid+'.png';
                    this.spritebase=LoadedRes[this.img+groupid];
                    return true;
                }else
                {
                    return false;
                }
            },
            spritePostion:function()
            {
                if (this.surpriseMF()) {
                    x=490;
                    y=6983;
                }
                return [x,y];
            },
            transfrom:function()
            {

                if (Movie.Mpostion>5930&&Movie.Mpostion<5947.5)
                {
                    return 0;
                }else if (Movie.Mpostion>5947.5&&Movie.Mpostion<=5965) {
                    return 1;
                }else if (Movie.Mpostion>5965&&Movie.Mpostion<=5982.5) {
                    return 2;
                }else {
                    return 2;
                }

            }
        },
        {
            img:'pufalogoblink',
            spritebase:null,
            surpriseMF:function()
            {
                if (Movie.Mpostion>5930&&Movie.Mpostion<7000) {
                    var spritebase=new Image();
                    var groupid=this.transfrom();
                    // spritebase.src=this.imgurl+groupid+'.png';
                    this.spritebase=LoadedRes[this.img+groupid];
                    return true;
                }else
                {
                    return false;
                }
            },
            spritePostion:function()
            {
                if (this.surpriseMF()) {
                    x=599;
                    y=7075;
                }
                return [x,y];
            },
            transfrom:function()
            {
                if (Movie.MovieFrame>0&&Movie.MovieFrame<=12)
                {
                    return 0;
                }else{
                    return 1;
                }
            }
        },
        {
            img:'majorphone',
            spritebase:null,
            surpriseMF:function()
            {
                if (Movie.Mpostion>3754&&Movie.Mpostion<4760) {
                    var spritebase=new Image();
                    var groupid=this.transfrom();
                    // spritebase.src=this.imgurl+groupid+'.png';
                    this.spritebase=LoadedRes[this.img+groupid];
                    return true;
                }else
                {
                    return false;
                }
            },
            spritePostion:function()
            {
                if (this.surpriseMF()) {
                    x=7.2;
                    y=5096;
                }
                return [x,y];
            },
            transfrom:function()
            {
                return '';
            }
        },
        {
            img:'phonescence',
            spritebase:null,
            surpriseMF:function()
            {
                if (Movie.Mpostion>4170&&Movie.Mpostion<4840) {
                    var spritebase=new Image();
                    var groupid=this.transfrom();
                    // spritebase.src=this.imgurl+groupid+'.png';
                    this.spritebase=LoadedRes[this.img+groupid];
                    return true;
                }else
                {
                    return false;
                }
            },
            spritePostion:function()
            {
                if (this.surpriseMF()) {

                        x=0;
                        y=4753;
                }
                return [x,y];
            },
            transfrom:function()
            {
                if (Movie.Mpostion>3600&&Movie.Mpostion<4178) {
                    return 0;
                }else if (Movie.Mpostion>4178&&Movie.Mpostion<=4184) {
                    return 1;
                }else if (Movie.Mpostion>4184&&Movie.Mpostion<=4190) {
                    return 2;
                }else if (Movie.Mpostion>4190&&Movie.Mpostion<=4196) {
                    return 3;
                }else if (Movie.Mpostion>4196&&Movie.Mpostion<=4202) {
                    return 4;
                }else if (Movie.Mpostion>4202&&Movie.Mpostion<=4208) {
                    return 5;
                }else if (Movie.Mpostion>4208&&Movie.Mpostion<=4214) {
                    return 6;
                }else if (Movie.Mpostion>4214&&Movie.Mpostion<=4219) {
                    return 7;
                }else if (Movie.Mpostion>4219&&Movie.Mpostion<=4225) {
                    return 8;
                }else if (Movie.Mpostion>4225&&Movie.Mpostion<=4231) {
                    return 9;
                }else if (Movie.Mpostion>4231&&Movie.Mpostion<=4237) {
                    return 10;
                }else if (Movie.Mpostion>4237&&Movie.Mpostion<=4243) {
                    return 11;
                }else if (Movie.Mpostion>4243&&Movie.Mpostion<=4248) {
                    return 11;
                }
                else if (Movie.Mpostion>4248&&Movie.Mpostion<=4960) {
                    return 11;
                }else if (Movie.Mpostion>4960&&Movie.Mpostion<=4966) {
                    return 10;
                }else if (Movie.Mpostion>4966&&Movie.Mpostion<=4973) {
                    return 9;
                }else if (Movie.Mpostion>4973&&Movie.Mpostion<=4980) {
                    return 8;
                }else if (Movie.Mpostion>4980&&Movie.Mpostion<=4987) {
                    return 7;
                }else if (Movie.Mpostion>4987&&Movie.Mpostion<=4993) {
                    return 6;
                }else if (Movie.Mpostion>4993&&Movie.Mpostion<=5000) {
                    return 5;
                }else if (Movie.Mpostion>5000&&Movie.Mpostion<=5007) {
                    return 4;
                }else if (Movie.Mpostion>5007&&Movie.Mpostion<=5013) {
                    return 3;
                }else if (Movie.Mpostion>5013&&Movie.Mpostion<=5020) {
                    return 2;
                }else if (Movie.Mpostion>5020&&Movie.Mpostion<=5026) {
                    return 1;
                }else if (Movie.Mpostion>5026&&Movie.Mpostion<=5033) {
                    return 0;
                }else if (Movie.Mpostion>5033&&Movie.Mpostion<=5040) {
                    return 0;
                }else {
                    return 0;
                }
            }
        },
    {
        img:'superman',
        spritebase:null,
        point:[
            //[0]为判断左右（1右，0左,2不变）,[1]为触发点坐标，[2]x开始坐标，[3]为x偏移量 [4]为x速度比率 [5]判断上下(1下,0上) [6]y开始坐标 [7]y偏移量 ，[8]速度比率
            //触发坐标为前一个的[1]+前一个的[3]，
            //1的时候[2]+[3]为下一个[2]的坐标
          //0的时候[2]-[3]为下一个[2]的坐标
            //[4]=[3]/(下一个[1]-[1])
            [1,0,0,2000,2,0,800,2000,1,''],
            [1,1270,0,300,1,1,1000,300,1,'down'],
            [2,1570,0,100,0,0,1300,100,1,'stand1'],
            [2,1670,0,100,0,0,1200,100,1,'stand2'],
            [2,1770,-40,100,0,0,1100,300,1,'say'],
            [1,2070,550,900,1,0,800,900,2,'fly'],
            [2,2872.5,405,0,0,1,0,1090,4,'schooldown'],
            [2,3145,405,0,0,0,1040,100,1,'hitground0'],
            [2,3245,405,0,0,0,940,200,1,'schoolstand'],
            [0,3445,705,405,1,0,740,1090,2,'schoolhug'],
            [0,4400,1300,500,3,0,1800,500,3,'back'],
            [2,4560,220,0,0,0,1100,200,1,'backhitground'],
            [1,4760,550,1000,2,0,800,1000,3,'homehug'],
            [2,5500,490,0,0,1,0,1450,5,'schooldown'],
            [2,5790,490,0,0,0,1440,130,1,'endhitground1'],
            [2,5920,490,0,0,0,1310,10,1,'endhitground0'],
        ],
        state:0,
        lor:2,
        uod:2,
        surpriseMF:function()
        {
            if (Movie.Mpostion>0) {
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {

            if (this.surpriseMF()) {
                var realXP;
                var beginx;
                var ratiox;

                var realYP;
                var beginy;
                var ratioy;

                for (var i = 0; i < this.point.length; i++) {                                                 // 循环动作点数组
                    if(Math.abs((Movie.Mpostion-this.point[i][1])*Math.max(this.point[i][4],this.point[i][8]))<Math.max(this.point[i][3],this.point[i][7])&&Movie.Mpostion>=this.point[i][1])//如果当前场景坐标减去数组[i]的第二个值得绝对值小于640，且当前场景坐标大于动作点
                    {
                        var groupid=this.transfrom();
                        this.spritebase=LoadedRes[this.img+groupid+this.point[i][9]]
                                                                          //如果当前场景坐标的值在动作点到动作点加640之间，执行
                        this.state=this.point[i][1];                      //当前的位于的场景state为
                        this.lor=this.point[i][0];
                        this.uod=this.point[i][5];

                        beginx=this.point[i][2];
                        ratiox=this.point[i][4];

                        beginy=this.point[i][6];
                        ratioy=this.point[i][8];

                        realXP=Math.min(Movie.Mpostion*ratiox-this.state*ratiox,this.point[i][3]);
                        realYP=Math.min(Movie.Mpostion*ratioy-this.state*ratioy,this.point[i][7]);
                        $('#console').html(this.lor+'  '+this.state+'</br>'+'bot:'+(Movie.Mpostion+Movie.Height)+'top:'+Movie.Mpostion);
                        break;
                    }else{
                        this.state=0;
                        this.lor=2;
                        this.uod=2;
                        $('#console').html(this.lor+'(fake)  '+this.state+'</br>'+'bot:'+(Movie.Mpostion+Movie.Height)+'top:'+Movie.Mpostion);


                    }

                }

                if(this.lor==1)
                {
                    x=realXP-this.spritebase.width+beginx;  //从屏幕外，左往右      （实际偏移量↑+（-sprite宽度）+开始基数X）

                }else if(this.lor==0)
                {
                    x=beginx-this.spritebase.width-realXP;    //从屏幕外，右往左   （固定屏幕宽度-实际偏移量↑） 改为 开始基数X-实际偏移量

                }else if(this.lor==2){
                    x=beginx;

                }


                if (this.uod==1) {
                    y=Movie.Mpostion-this.spritebase.height+beginy+realYP;


                }else if (this.uod==0) {
                    y=Movie.Mpostion+beginy-this.spritebase.height-realYP;

                }else if (this.uod==2) {
                    y=Movie.Mpostion+beginy;
                }
                // y=Movie.Mpostion+(Movie.Height-this.spritebase.height)/2-Math.random()*(20-10);
            }
            return [x,y];
        },
        transfrom:function()
        {

            return '';
        }
    },
    {
        img:'cat',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>3600&&Movie.Mpostion<5600) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                if (Movie.Mpostion>4560&&Movie.Mpostion<4760)
                {
                    x=245;
                    y=5671;
                }else if(Movie.Mpostion>4760)
                {
                    x=245+(Movie.Mpostion-4760)*0.8;
                    y=5671-(Movie.Mpostion-4760)*0.2;
                }
                else {
                  x=245;
                  y=5671;
                }

            }
            return [x,y];
        },
        transfrom:function()
        {
            if (Movie.Mpostion>4560&&Movie.Mpostion<4760) {
                return 1;
            }else if(Movie.Mpostion<4560){
                return 0;
            }else if(Movie.Mpostion>4760)
            {
                return 2;
            }

        }
    },
    {
        img:'misay',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>1770&&Movie.Mpostion<2070) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                x=285;
                y=2413;
            }
            return [x,y];
        },
        transfrom:function()
        {
            return '';
        }
    },
    {
        img:'paimaisay',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>1270&&Movie.Mpostion<2070) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                x=9;
                y=2672;
            }
            return [x,y];
        },
        transfrom:function()
        {
            return '';
        }
    },
    {
        img : 'studentsad',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>2300&&Movie.Mpostion<3445) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                if (Math.abs(Movie.Mpostion-2930)<180&&Movie.Mpostion>2930) {
                    x=562-(Movie.Mpostion-2930);
                    y=3738+(Movie.Mpostion-2930)*0.6;
                }else if (Movie.Mpostion>3110) {
                    x=382;
                    y=3857
                }else if (Movie.Mpostion<2930) {
                    x=562;
                    y=3738;
                }
            }
            return [x,y];
        },
        transfrom:function()
        {
          if (Movie.Mpostion<2930||Movie.Mpostion>3110) {
              return 0;
          }else
          {
            if (Movie.speed>1||Movie.speed<-1) {
                return Math.floor(Movie.MovieFrame/6);
            }else
            {
                return 0;
            }
          }


        }
    },
    {
        img : 'studentthink',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>3110&&Movie.Mpostion<3445) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                x=128;
                y=3662;
            }
            return [x,y];
        },
        transfrom:function()
        {
                return '';
        }
    },
    {
        img : 'yellowcar',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>3000&&Movie.Mpostion<4500) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
              if (Movie.Mpostion<3390) {
                x=807-(Movie.Mpostion-3000);
                y=4250+(Movie.Mpostion-3000)*0.525;
              }else {
                x=807-(Movie.Mpostion-3000);
                y=4455;
              }

            }
            return [x,y];
        },
        transfrom:function()
        {
                return ''
        }
    },
    {
        img : 'breadcar',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>3000&&Movie.Mpostion<4500) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
              x=62+(Movie.Mpostion-3000)*0.5;
              y=4457+(Movie.Mpostion-3000)*0.034;
              //
              // x=661
              // y=4498
            }
            return [x,y];
        },
        transfrom:function()
        {
                return ''
        }
    },
    {
        img:'daxuemen',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>2500) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                x=0;
                y=4088;
            }
            return [x,y];
        },
        transfrom:function()
        {
            return '';
        }
    },


    {
        img:'huanniufalldown',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>3550&&Movie.Mpostion<4500  ) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                if (Movie.Mpostion>3500&&Movie.Mpostion<3600) {
                    x=70;
                    y=4074;
                }else if (Movie.Mpostion>3600&&Movie.Mpostion<3750) {
                    x=70;
                    y=4074+Movie.Mpostion-3600;
                }else
                {
                    x=70;
                    y=4224;
                }

            }
            return [x,y];
        },
        transfrom:function()
        {
            if (Movie.Mpostion>4905&&Movie.Mpostion<5005) {
                return 0;
            }else {
                return 1;
            }
        }
    },

    {
        img:'huanniu',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>2500&&Movie.Mpostion<3550) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                x=139;
                y=3874;
            }
            return [x,y];
        },
        transfrom:function()
        {
            return '';
        }
    },
    {
        img:'huanniuhand',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>2500&&Movie.Mpostion<3550) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                x=219;
                y=3830;
            }
            return [x,y];
        },
        transfrom:function()
        {
          if (Movie.MovieFrame>=0&&Movie.MovieFrame<4) {
              return  0;
          }else if (Movie.MovieFrame>=4&&Movie.MovieFrame<8) {
              return 1;
          }else if (Movie.MovieFrame>=8&&Movie.MovieFrame<12) {
              return 2;
          }else if (Movie.MovieFrame>=12&&Movie.MovieFrame<16) {
              return 3;
          }else if (Movie.MovieFrame>=16&&Movie.MovieFrame<20) {
              return 4;
          }else if (Movie.MovieFrame>=20&&Movie.MovieFrame<24) {
              return 5;
          }

        }
    },

    {
        img:'goslide',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion<=1) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                x=(Movie.Width/2)-(this.spritebase.width/2);
                y=Movie.Height-this.spritebase.height;
            }
            return [x,y];
        },
        transfrom:function()
        {
            return '';
        }
    },
    {
        img:'hand',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion<=1) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                x=(Movie.Width/2)-(this.spritebase.width/2)+8;
                y=(Movie.Height+this.spritebase.height-100)-Movie.MovieFrame*3;
            }
            return [x,y];
        },
        transfrom:function()
        {
            return '';
        }
    },

    {
        img:'shinetext',
        spritebase:null,
        surpriseMF:function()
        {
            if (Movie.Mpostion>5053&&Movie.Mpostion<6500) {
                var spritebase=new Image();
                var groupid=this.transfrom();
                // spritebase.src=this.imgurl+groupid+'.png';
                this.spritebase=LoadedRes[this.img+groupid];
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                if (this.transfrom()) {

                    x=193;
                    y=6181;
                }else {
                    x=175;
                    y=6176;
                }

            }
            return [x,y];
        },
        transfrom:function()
        {
            if (Movie.MovieFrame>=0&&Movie.MovieFrame<=12) {
                return 0;
            }else {
                return 1;
            }
        }
    },
    {
        img:'tofriendspage',
        spritebase:null,
        surpriseMF:function()
        {
            var spritebase=new Image();
            var groupid=this.transfrom();
            // spritebase.src=this.imgurl+groupid+'.png';
            this.spritebase=LoadedRes[this.img+groupid];
            if (Movie.tofriendsLock) {
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                x=0;
                y=Movie.Mpostion;
            }
            return [x,y];
        },
        transfrom:function()
        {
            return ''
        }
    },
    {
        img:'huodonginfo',
        spritebase:null,
        surpriseMF:function()
        {
            var spritebase=new Image();
            var groupid=this.transfrom();
            // spritebase.src=this.imgurl+groupid+'.png';
            this.spritebase=LoadedRes[this.img+groupid];
            if (Movie.huodongLock) {
                return true;
            }else
            {
                return false;
            }
        },
        spritePostion:function()
        {
            if (this.surpriseMF()) {
                x=0;
                y=Movie.Mpostion;
            }
            return [x,y];
        },
        transfrom:function()
        {
            return ''
        }
    },

]
