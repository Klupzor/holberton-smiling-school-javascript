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



$( document ).ready(function() {
    carouselQuotes();
});