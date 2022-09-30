$(window).on('load', function () {
  var sct = $(window).scrollTop()

  // 첫페이지
  $('.art1').addClass('on')
  $('#header').css({ transform: 'translateY(0)' })

  if (sct >= sct2) {
    $('.ham').addClass('on')
  } else {
    $('.ham').removeClass('on')
  }
})

// 슬릭슬라이드
$('.slide-group').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  prevArrow: '<button class="arrleft"><i class="fas fa-angle-left"></i></button>',
  nextArrow: '<button class="arrright"><i class="fas fa-angle-right"></i></button>'
})
// 슬릭슬라이드


// 마우스휠시 자동 페이지이동
$('article').on('mousewheel', function (e, delta) {
  if (delta > 0) {
    var prevTop = $(this).prev().offset().top
    $('html, body').stop().animate({
      scrollTop: prevTop + 'px'
    }, 500)
  } else if (delta < 0) {
    var nextTop = $(this).next().offset().top
    $('html, body').stop().animate({
      scrollTop: nextTop + 'px'
    }, 500)
  }
  return false
})

var sct1 = $('.art1').offset().top
var sct2 = $('.art2').offset().top
var sct3 = $('.art3').offset().top
var sct4 = $('.art4').offset().top

$(window).on('scroll', function () {
  var sct = $(window).scrollTop()

  if (sct >= sct1 && sct < sct2) {
    $('.art1').addClass('on')
    $('#header').css({ transform: 'translateY(0)' })
  } else {
    $('.art1').removeClass('on')
    $('#header').css({ transform: 'translateY(-100%)' })
  }

  if (sct >= sct2) {
    $('.ham').addClass('on')
  } else {
    $('.ham').removeClass('on')
  }

  if (sct >= sct3 && sct < sct4) {
    function graph(jumsoo, cname) {
      var i = 0;
      var stop = setInterval(function () {
        i++
        if (i <= jumsoo) {
          $(cname).css({ width: i + '%' })
          $(cname).siblings('.run').css({ left: (i + 2) + '%', opacity: '1' })
          $(cname).find('.count').css({ opacity: '1' }).text(i + '%')
          $('.pass').addClass('on')
        } else {
          clearInterval(stop)
          bgchange($('.effort'))
        }
        return false

        function bgchange() {
          var boxwd = $('.art3 ul li').width()
          var pass = $('.art3 .passion').siblings('.run')
          if (i >= 95) {
            $('.art3 .board').addClass('on')
          } else {
            $('.art3 .board').removeClass('on')
          }
        }
      }, 30)
    }
    graph(90, '.html')
    graph(90, '.css')
    graph(60, '.js')
    graph(60, '.jq')
    graph(100, '.passion')

  }

  // .art2 페인트 롤러 효과
  if (sct >= sct2 && sct < sct3) {
    $('.art2').addClass('on')
  } else {
    $('.art2').removeClass('on')
  }
})

$('.art5 .send').on('click', function () {
  $('.art5').addClass('on')
  if ($('.art5').hasClass('on')) {
    $('.post').addClass('on')
    $('.art5 .thank').addClass('on')
  } else {
    $('.post').removeClass('on')
  }
  // return false
})

$('.menubarcv').on('click', function () {
  $('.menubar').css({ opacity: '0' })
  $(this).css({ zIndex: '9' })
  $('.ham.on .submenu').addClass('on')
  $('.ham.on .innermenubar').addClass('on')

})

$('body').on('click', '.innermenubar.on, article', function () {
  $('.menubar').css({ opacity: '1', transitionDelay: '1s' })
  $('.menubarcv').css({  zIndex:'9999999' })
  $('.ham.on .submenu.on').removeClass('on')
  $('.ham.on .innermenubar.on').removeClass('on')
})


$('.submenu a, #header .nav ul li').on('click', function(){
  var num = $(this).index()+1
  var sectdist = $('article').eq(num).offset().top

  // $('.submenu').addClass('on')
  $('html, body').animate({
      scrollTop:sectdist
  }, 600, function(){
      // $('.submenu').removeClass('on')
      // $('.innermenubar').removeClass('on')
      $('.menubarcv').css({zIndex:'9999999'})
  })
  return false; 
})

$('.art3 .reload').on('click',function(){
  location.reload()
})