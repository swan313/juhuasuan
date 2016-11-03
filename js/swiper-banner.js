/**
 * Created by Administrator on 2016/7/19.
 */
var swiper = new Swiper('.swiper2', {
    pagination: '.swiper-pagination',   //分页器容器的css选择器或HTML标签
    nextButton: '.swiper-button-next',      //前进按钮的css选择器或HTML元素
    prevButton: '.swiper-button-prev',      //后退按钮的css选择器或HTML元素
    paginationClickable: true,      //为true时，点击分页器的指示点分页器会控制Swiper切换
    //spaceBetween: 30,     //slide之间的距离（单位px）
    centeredSlides: true,   //设定为true时，活动块会居中，而不是默认状态下的居左
    autoplay: 2500,     //可选选项，自动切换的时间间隔
    speed: 300,         //滑动速度
    loop : true,        //无限循环切换
    autoplayDisableOnInteraction: false     //用户操作swiper之后，是否禁止autoplay
});