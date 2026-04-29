window.addEventListener("load", function () {
  // 모달창 닫기
  const modalWrap = this.document.querySelector(".modal-wrap");
  const modalClose = this.document.querySelector("#close");
  modalClose.addEventListener("click", function () {
    modalWrap.style.display = "none";
  });
});
