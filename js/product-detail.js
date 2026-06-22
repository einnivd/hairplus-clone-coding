// 구매 영역
// 요소 선택
const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const quantity = document.querySelector(".quantity");
const totalPrice = document.querySelector(".total h3");

// 판매가 가져오기
const unitPrice = Number(
  document
    .querySelector(".unit-price")
    .textContent.replace(/[^0-9]/g, "")
);

// 기본 수량
let count = 1;

// 총 금액 업데이트
function updatePrice() {
  totalPrice.textContent =
    (unitPrice * count).toLocaleString() + "원";
}

// 플러스 버튼
plusBtn.addEventListener("click", () => {
  count++;
  quantity.textContent = count;
  updatePrice();
});

// 마이너스 버튼
minusBtn.addEventListener("click", () => {
  if (count > 1) {
    count--;
    quantity.textContent = count;
    updatePrice();
  }
});

// 페이지 로드 시 초기 금액 표시
updatePrice();


// 자가진단 체크리스트
const checkboxes = document.querySelectorAll(".custom-checkbox");
const resultText = document.querySelector(".check-result p");

function updateChecklistResult() {
  const checkedCount = document.querySelectorAll(
    ".custom-checkbox:checked"
  ).length;

  if (checkedCount >= 3) {
    resultText.innerHTML = `
      ${checkedCount}개 체크하셨네요!<br>
      현재 모발 손상이 진행 중일 가능성이 높습니다.<br>
      단백질 케어를 시작해보세요.
    `;
  } else {
    resultText.innerHTML = `
      3가지 이상 체크하셨나요?<br>
      푸석함이 탄력으로 바뀌는 순간,<br>
      당신의 모발이 기다려온 진짜 영양을 처방합니다.
    `;
  }
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateChecklistResult);
});

// FAQ
console.log("faq.js 연결됨");
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const icon = item.querySelector(".faq-icon");

  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");

    faqItems.forEach((faq) => {
      faq.classList.remove("active");
      faq.querySelector(".faq-answer").style.display = "none";
      faq.querySelector(".faq-icon").textContent = "+";
    });

    if (!isOpen) {
      item.classList.add("active");
      answer.style.display = "block";
      icon.textContent = "−";
    }
  });
});