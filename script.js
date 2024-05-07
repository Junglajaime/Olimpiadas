
$(function () {      
    $("#card1").on("click", function() {
        changeThumbnails("assets/pekin1.jpg", "assets/pekin2.jpg", "assets/pekin3.jpg", "assets/pekin4.jpg");
    });

    $("#card2").on("click", function() {
        changeThumbnails("assets/uk1.jpg", "assets/uk2.jpg", "assets/uk3.jpg", "assets/uk4.jpg");
    });

    $("#card3").on("click", function() {
        changeThumbnails("assets/brazil1.jpg", "assets/brazil2.jpg", "assets/brazil3.jpg", "assets/brazil4.jpg");
    });

    $("#card4").on("click", function() {
        changeThumbnails("assets/tokio1.jpg", "assets/tokio2.jpg", "assets/tokio3.jpg", "assets/tokio4.jpg");
    });

    function changeThumbnails(img1, img2, img3, img4) {
        $(".thumbnails img").eq(0).attr("src", img1);
        $(".thumbnails img").eq(1).attr("src", img2);
        $(".thumbnails img").eq(2).attr("src", img3);
        $(".thumbnails img").eq(3).attr("src", img4);
    }
});  

$(document).ready(function() {
    $(".thumbnails img").on("click", function() {
        var newSrc = $(this).attr("src");
        if (!$("#video").prop("paused")) {
            $("#video").get(0).pause();
            $("#video").hide();
            $("#image").attr("src", newSrc).show();
        } else {
            $("#image").attr("src", newSrc);
        }
    });
});


