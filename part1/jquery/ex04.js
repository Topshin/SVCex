while (true) {
    var input = prompt("원하시는 웹페이지 스타일을 써주세요 / '파랑 , 노랑, 초록'")

    if (input === "파랑") {
        $("body").css('background-color', 'blue')
        $('img').attr('src', 'http://a57.foxnews.com/images.foxnews.com/content/fox-news/science/2016/07/20/how-scientists-discovered-brilliant-new-blue-pigment/_jcr_content/par/featured-media/media-0.img.jpg/876/493/1469037473242.jpg?ve=1&tl=1')
        $("#header").html('이것은 해더입니다.')
        $("#header").css('font-size', '30px')
        $("#header").css('color', 'white')
        $("#content").html('파랑 페이지에 오신것을 환영합니다.')
        $("#content").css('font-size', '30px')
        alert("파랑 페이지 입니다.")
    } else if (input === "노랑") {
        $("body").css('background-color', 'yellow')
        $('img').attr('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Cornwall_Daffodils.jpg/486px-Cornwall_Daffodils.jpg')
        $("#header").html('이것은 해더입니다.')
        $("#header").css('font-size', '30px')
        $("#header").css('color', 'red')
        $("#content").html('노랑 페이지에 오신것을 환영합니다.')
        $("#content").css('font-size', '30px')
        alert("노랑 페이지 입니다.")
    } else {
        $("body").css('background-color', 'green')
        $('img').attr('src', 'https://pbs.twimg.com/media/CwHWSrfVIAAdhWO.jpg')
        $("#header").html('이것은 해더입니다.')
        $("#header").css('font-size', '30px')
        $("#header").css('color', 'red')
        $("#content").html('초록 페이지에 오신것을 환영합니다.')
        $("#content").css('font-size', '30px')
        alert("초록 페이지 입니다.")
    }
    break;
}
