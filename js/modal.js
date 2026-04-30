window.addEventListener("load", function () {
// 모달창 닫기
  const modalWrap = this.document.querySelector(".modal-wrap");
  const modalClose = this.document.querySelector("#close");
  modalClose.addEventListener("click", function () {
    modalWrap.style.display = "none";
  });
});

// 오늘 하루 보지않기
$(function(){
    let chk = $("#check")
    // console.log(check);
    if($.cookie("popup") !== "none"){
        $(".modal-box").fadeIn("fast");
    }  
    $(".close").click(function(){
        if(chk.is(":checked")){
            $.cookie("popup" , "none" , {expires:1 , path:"/"});
        }
        $(".modal-box").fadeOut("fast");
    });
});