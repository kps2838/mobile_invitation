// document.ready() - html이 loading이 된 후 함수가 실행
$(function(){
    $('.img-list > li > a').on('click', function(e){
    // e.preventDefault();
    var src = $(this).children().attr('src');

    $('.main-photo > img').attr('src',src)
    })
})

// loading 준비 완료 이벤트
window.onload = function(){
    setTimeout(function(){
        console.log(`3초가 경과함`)
        $('.splash-screen').removeClass('on');
    },3000)
    console.log(`문서 로딩 완료!`)
}