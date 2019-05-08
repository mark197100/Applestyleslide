var allLis = $(".menu > ul > li")
var images = $(".images")
var n = 0
var timer = setInterval(function(){
    $(images).css({
        transform:'translateX('+ n%4* -920 +'px)'
    })
    allLis.eq(n%4).addClass('active').siblings('.active').removeClass('active')
    n++
},2000)
for(let i=0;i<allLis.length;i++){
    $(allLis[i]).on('click',function(e){
        let _this = e.currentTarget
        let index = $(_this).index()
        $(images).css({
            transform:'translateX('+index* -920 +'px)'
        })
        $(_this).addClass('active').siblings('.active').removeClass('active') 
        n = index
    })
}
$('#window').on('mouseenter',function(){
    window.clearInterval(timer)
})
$('#window').on('mouseleave',function(){
    timer = setInterval(function(){
        $(images).css({
            transform:'translateX('+ n%4* -920 +'px)'
        })
        allLis.eq(n%4).addClass('active').siblings('.active').removeClass('active')
        n++
    },2000)
})
