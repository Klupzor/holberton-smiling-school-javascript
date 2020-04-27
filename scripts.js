function carosuel() {
  var itemsMainDiv = ('.MultiCarousel');
  var itemsDiv = ('.MultiCarousel-inner');
  var itemWidth = "";

  $('.leftLst, .rightLst').click(function () {
      var condition = $(this).hasClass("leftLst");
      if (condition)
          click(0, this);
      else
          click(1, this)
  });

  ResCarouselSize();




  $(window).resize(function () {
      ResCarouselSize();
  });

  //this function define the size of the items
  function ResCarouselSize() {
      var incno = 0;
      var dataItems = ("data-items");
      var itemClass = ('.item');
      var id = 0;
      var btnParentSb = '';
      var itemsSplit = '';
      var sampwidth = $(itemsMainDiv).width();
      var bodyWidth = $('body').width();
      $(itemsDiv).each(function () {
          id = id + 1;
          var itemNumbers = $(this).find(itemClass).length;
          btnParentSb = $(this).parent().attr(dataItems);
          itemsSplit = btnParentSb.split(',');
          $(this).parent().attr("id", "MultiCarousel" + id);


          if (bodyWidth >= 1200) {
              incno = itemsSplit[3];
              itemWidth = sampwidth / incno;
          }
          else if (bodyWidth >= 992) {
              incno = itemsSplit[2];
              itemWidth = sampwidth / incno;
          }
          else if (bodyWidth >= 768) {
              incno = itemsSplit[1];
              itemWidth = sampwidth / incno;
          }
          else {
              incno = itemsSplit[0];
              itemWidth = sampwidth / incno;
          }
          $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
          $(this).find(itemClass).each(function () {
              $(this).outerWidth(itemWidth);
          });

          $(".leftLst").addClass("over");
          $(".rightLst").removeClass("over");

      });
     
  }


  //this function used to move the items
  function ResCarousel(e, el, s) {
      var leftBtn = ('.leftLst');
      var rightBtn = ('.rightLst');
      var translateXval = '';
      var divStyle = $(el + ' ' + itemsDiv).css('transform');
      var values = divStyle.match(/-?[\d\.]+/g);
      var xds = Math.abs(values[4]);
      if (e == 0) {
          translateXval = parseInt(xds) - parseInt(itemWidth * s);
          $(el + ' ' + rightBtn).removeClass("over");

          if (translateXval <= itemWidth / 2) {
              translateXval = 0;
              $(el + ' ' + leftBtn).addClass("over");
          }
      }
      else if (e == 1) {
          var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
          translateXval = parseInt(xds) + parseInt(itemWidth * s);
          $(el + ' ' + leftBtn).removeClass("over");

          if (translateXval >= itemsCondition - itemWidth / 2) {
              translateXval = itemsCondition;
              $(el + ' ' + rightBtn).addClass("over");
          }
      }
      $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
  }

  //It is used to get some elements from btn
  function click(ell, ee) {
      var Parent = "#" + $(ee).parent().attr("id");
      var slide = $(Parent).attr("data-slide");
      ResCarousel(ell, Parent, slide);
  }
  return {ResCarouselSize: ResCarouselSize}
};

// --------------------Carrousel Quotes------------------
function addQuote(data) {
    $(".carousel-quotes .carousel-inner").append(
        `<div class="carousel-item">
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-sm-4 d-flex">
                    <img src="${data.pic_url}" class="card-img rounded-circle" alt=${data.name}>
                    </div>
                    <div class="col-sm-8">
                    <div class="card-body">
                        <p class="card-text">${data.text}</p>
                        <h5 class="card-title">${data.name}</h5>
                        <p class="card-text">${data.title}</p>
                    </div>
                    </div>
                </div>
            </div>
      </div>`
    )
}

function carouselQuotes() {
    var url = "https://smileschool-api.hbtn.info/quotes"; 

    $.get(url, function (data, status) {
        if (status === "success") {
            $(".carousel-quotes .loader").remove();
            for (let index = 0; index < data.length; index++) {
                addQuote(data[index]) ;
            }
            $(".carousel-quotes .carousel-inner .carousel-item").first().addClass( "active" );
            $(".carousel-quotes").append(
                `<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>`
            );
            
        } else {
            alert("Server Error")
        }
    })
}

function starts(num){
  var html = "";
  for (let cont=0 ; cont < 5; cont++) {
    if (cont < num)
    {
      html += `<i class="star-on"><img src="./images/star_on.png" alt="star-on"></i>`
    }else{
      html += '<i class="star-off"><img src="./images/star_off.png" alt="star-off"></i>'
    }
    
  }
  return html;
}

function addPopularVideoCard(data) {
    $(".popular-tutorials .MultiCarousel-inner").append(
        `<div class="item">
        <div class="card mb-3">
          <img src=${data.thumb_url} class="card-img-top" alt="...">
          <i class="icon-play"></i>
          <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <p class="card-text text-muted">${data["sub-title"]}</p>
            <div class="card-text"><div class="author-rating">
              <div class="author">
                <img src=${data.author_pic_url} alt="profile1" class="rounded-circle">
                <h6 class="author-name">${data.author}</h6>
              </div>
              <div class="rating">
                <div class="stars">
                 ${starts(data.star)}
                </div>
                <span>${data.duration}</span>
              </div>
            </div></div>
          </div>
        </div>
      </div>`
    )
}

function popularVideos() {
    var url = "https://smileschool-api.hbtn.info/popular-tutorials"; 
    var test = carosuel();

    $.get(url, function (data, status) {
        if (status === "success") {
            $(".popular-tutorials .loader").remove();
            for (let index = 0; index < data.length; index++) {
                addPopularVideoCard(data[index]) ;
            }
            test.ResCarouselSize();
            
        } else {
            alert("Server Error")
        }
    })
}

function addLatestVideoCard(data) {
    $(".latest-videos .MultiCarousel-inner").append(
        `<div class="item">
        <div class="card mb-3">
          <img src=${data.thumb_url} class="card-img-top" alt="...">
          <i class="icon-play"></i>
          <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <p class="card-text text-muted">${data["sub-title"]}</p>
            <div class="card-text"><div class="author-rating">
              <div class="author">
                <img src=${data.author_pic_url} alt="profile1" class="rounded-circle">
                <h6 class="author-name">${data.author}</h6>
              </div>
              <div class="rating">
                <div class="stars">
                 ${starts(data.star)}
                </div>
                <span>${data.duration}</span>
              </div>
            </div></div>
          </div>
        </div>
      </div>`
    )
}

function latestVideos() {
    var url = "https://smileschool-api.hbtn.info/latest-videos"; 
    var test = carosuel();

    $.get(url, function (data, status) {
        if (status === "success") {
            $(".latest-videos .loader").remove();
            for (let index = 0; index < data.length; index++) {
                addLatestVideoCard(data[index]) ;
            }
            test.ResCarouselSize();
            
        } else {
            alert("Server Error")
        }
    })
}


$( document ).ready(function() {
    carouselQuotes();
    popularVideos();
    latestVideos();
    carosuel();
});