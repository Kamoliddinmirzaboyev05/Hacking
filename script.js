// Savollar va javoblar bazasi
const questionsAndAnswers = {
  "Tarqatma materialda 1, 2, 3, 4, 5, 6, 7, 8, 9 raqamlari yozilgan. Tavakkaliga 4 ta kartochka olinib, ularni qator qilib terilganda juft son bo‘lish ehtimolini toping.":
    "4/9",
  "Tarqatma materialda 1, 2, 3, 4, 5, 6, 7, 8, 9 raqamlari yozilgan. Tavakkaliga 4 ta kartochka olinib, ularni qator qilib terilganda toq son hosil bo‘lish ehtimolini toping.":
    "5/9",
  "Qutida 12 ta oq va 8 ta qora shar bor. Undan tavakkaliga 2 ta shar olinganda sharlar turli rangda bo‘lish ehtimolini toping.":
    "48/95",
  "Qutida 12 ta oq, 8 ta qora va 9 ta qizil shar bor. Undan tavakkaliga 3 ta shar olinganda sharlar turli rangda bo‘lish ehtimolini toping.":
    "54/203",
  "Qutida 6 ta bir xil raqamlangan kubik bor. Tavakkaliga bitta-bittadan barcha kubiklar olinganda kubiklarning raqamlari o’sib borish tartibida chiqishi ehtimolligini toping.":
    "1/720",
  "Qutida 5 ta bir xil raqamlangan kubik bor. Tavakkaliga bitta-bittadan barcha kubiklar olinganda kubiklarning raqamlari o’sib borish tartibida chiqishi ehtimolligini toping.":
    "1/120",
  "Qutida 7 ta bir xil raqamlangan kubik bor. Tavakkaliga bitta-bittadan barcha kubiklar olinganda kubiklarning raqamlari o’sib borish tartibida chiqishi ehtimolligini toping.":
    "1/5040",
  "Qutida 5 ta bir xil buyum bo‘lib, ularning 3 tasi bo’yalgan. Tavakkaliga 2 ta buyum olinganda ular orasida 1 ta bo’yalgan bo‘lishi ehtimolligini toping.":
    "6/10",
  "Qutida 5 ta bir xil buyum bo‘lib, ularning 3 tasi bo’yalgan. Tavakkaliga 2 ta buyum olinganda ular orasida 2 ta bo’yalgan bo‘lishi ehtimolligini toping.":
    "3/10",
  "Qutida 5 ta bir xil buyum bo‘lib, ularning 3 tasi bo’yalgan. Tavakkaliga 2 ta buyum olinganda ular orasida xech bo’lmaganda 1 ta bo’yalgan bo‘lishi ehtimolligini toping.":
    "9/10",
  "Qutida 100 ta bir xil buyum bo‘lib, ularning 10 tasi bo’yalgan. Tavakkaliga 4 ta buyum olinganda ular orasida bo’yalganlari yo’q bo‘lishi ehtimolligini toping.":
    "15486/23765",
  "Qutida 90 ta bir xil buyum bo‘lib, ularning 10 tasi bo’yalgan. Tavakkaliga 4 ta buyum olinganda ular orasida bo’yalganlari yo’q bo‘lishi ehtimolligini toping.":
    "14378/23229",
  "Tankka qarshi minalar to’g‘ri chiziq bo’ylab har 18 metrga joylashtirilgan. Eni 3 metr bo’lgan tank bu to’g‘ri chiziqqa perpendikulyar yo’nalishda kelmoqda. Tankning minaga duch kelish ehtimolligini toping.":
    "1/6",
  "Tankka qarshi minalar to’g‘ri chiziq bo’ylab har 15 metrga joylashtirilgan. Eni 3 metr bo’lgan tank bu to’g‘ri chiziqqa perpendikulyar yo’nalishda kelmoqda. Tankning minaga duch kelish ehtimolligini toping.":
    "1/5",
  "Tankka qarshi minalar to’g‘ri chiziq bo’ylab har 21 metrga joylashtirilgan. Eni 3 metr bo’lgan tank bu to’g‘ri chiziqqa perpendikulyar yo’nalishda kelmoqda. Tankning minaga duch kelish ehtimolligini toping.":
    "1/7",
  "Barcha yoqlari bo’yalgan kub 1000 ta teng kubiklarga arralangan. Tavakkaliga olingan kubikning ikkita yog‘i bo’yalgan bo‘lish ehtimolligini toping.":
    "0,096",
  "Barcha yoqlari bo’yalgan kub 1000 ta teng kubiklarga arralangan. Tavakkaliga olingan kubikning bitta yog‘i bo’yalgan bo‘lish ehtimolligini toping.":
    "0,384",
  "Barcha yoqlari bo’yalgan kub 1000 ta teng kubiklarga arralangan. Tavakkaliga olingan kubikning uchta yog‘i bo’yalgan bo‘lish ehtimolligini toping.":
    "0,008",
  "Ikkita ovchi bir paytda bir-biriga bog‘liq bo’lmagan holda tulkiga qarata o’q uzishdi. Ovchilardan hech bo’lmaganda biri o’qni tulkiga tekkazsa, tulki otib olingan bo’ladi. Ochilarning nishonga urish ehtimolligi mos ravishda 0,8 va 0,75 ga teng bo’lsa, tulkini otib olish ehtimolligini toping.":
    "0,95",
};

// 🔧 Faqat qo‘shilgan funksiya – matndan belgilarni tozalaydi
function cleanText(text) {
  return text
    .toLowerCase()
    .replace(/[^a-zа-яё0-9ғқҳўӣ\s]/gi, "")
    .trim();
}

// So'zlar orasidagi o'xshashlikni hisoblash (Jaccard index)
function jaccardSimilarity(query, question) {
  const queryWords = cleanText(query).split(" ");
  const questionWords = cleanText(question).split(" ");
  const intersection = queryWords.filter((word) =>
    questionWords.includes(word)
  );
  const union = new Set([...queryWords, ...questionWords]);
  return intersection.length / union.size;
}

// Eng yaqin savolni qidirish
function findBestMatch(query) {
  let maxSimilarity = 0;
  let bestMatch = "";
  for (let question in questionsAndAnswers) {
    const similarity = jaccardSimilarity(query, question);
    if (similarity > maxSimilarity) {
      maxSimilarity = similarity;
      bestMatch = question;
    }
  }
  return bestMatch;
}

// Input oynasini yaratish
const inputContainer = document.createElement("div");
inputContainer.style.position = "fixed";
inputContainer.style.bottom = "20px";
inputContainer.style.left = "50%";
inputContainer.style.transform = "translateX(-50%)";
inputContainer.style.width = "calc(100% - 40px)";
inputContainer.style.maxWidth = "500px";
inputContainer.style.display = "flex";
inputContainer.style.flexDirection = "column";
inputContainer.style.alignItems = "center";
inputContainer.style.zIndex = "1000";

// Input maydoni
const input = document.createElement("input");
input.type = "text";
input.placeholder = "..";
input.style.padding = "12px 20px";
input.style.width = "100%";
input.style.border = "2px solid #fafafa";
input.style.borderRadius = "30px";
input.style.backgroundColor = "transparent";
input.style.opacity = "0.1";
input.style.fontSize = "16px";
input.style.outline = "none";

// Fokus bo'lganida uslub o'zgarishi
input.addEventListener("focus", () => {
  input.style.borderColor = "transparent";
});

// Fokusdan chiqqanda uslubni tiklash
input.addEventListener("blur", () => {
  input.style.borderColor = "#fff";
});

// Natija uchun element
const result = document.createElement("div");
result.style.marginTop = "15px";
result.style.padding = "10px";
result.style.fontSize = "18px";
result.style.color = "#d4d4d4";
result.style.borderRadius = "8px";
result.style.width = "100%";
result.style.maxWidth = "500px";
result.style.wordWrap = "break-word";

// Inputdagi o'zgarishlarni tinglash
input.addEventListener("input", (e) => {
  const query = e.target.value.trim();
  console.clear();
  console.log("Kiritilgan savol:", query);

  if (query) {
    const bestMatch = findBestMatch(query);
    console.log("Eng yaqin savol:", bestMatch);
    result.textContent = `Javob: ${
      questionsAndAnswers[bestMatch] || "Mos savol topilmadi"
    }`;
  } else {
    result.textContent = "";
  }
});

// Tugma: inputni tozalash
const clearButton = document.createElement("button");
clearButton.textContent = "Clean";
clearButton.style.padding = "8px 16px";
clearButton.style.marginTop = "10px";
clearButton.style.fontSize = "16px";
clearButton.style.borderRadius = "30px";
clearButton.style.border = "none";
clearButton.style.backgroundColor = "transparent";
clearButton.style.color = "rgba(0, 0, 0, 0.01)";
clearButton.style.cursor = "pointer";

// Tugmani bosish natijasida inputni tozalash
clearButton.addEventListener("click", () => {
  input.value = "";
  result.textContent = "";
  console.clear();
});

// Tanlangan matnni olish
document.addEventListener("mouseup", () => {
  const selectedText = window.getSelection().toString().trim();
  if (selectedText) {
    input.value = selectedText;
    const bestMatch = findBestMatch(selectedText);
    result.textContent = `Javob: ${
      questionsAndAnswers[bestMatch] || "Mos savol topilmadi"
    }`;
  }
});

if (!document.styleSheets.length) {
  const style = document.createElement("style");
  document.head.appendChild(style);
}
document.styleSheets[0].insertRule(
  "::selection { background-color: transparent; color: inherit; }",
  0
);

// Scroll hodisasi: input va natijani tozalash
window.addEventListener("scroll", () => {
  input.value = "";
  result.textContent = "";
});

// Natijani input tagiga joylash
inputContainer.appendChild(input);
inputContainer.appendChild(result);
inputContainer.appendChild(clearButton);
document.body.appendChild(inputContainer);
