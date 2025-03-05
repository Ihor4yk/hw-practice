// const STORAGE_KEY = "feedback-form-state";
// const form = document.querySelector(".feedback-form");
// const email = form.elements.email;
// const message = form.elements.message;

// // 1️⃣ Функція для збереження в localStorage при введенні
// form.addEventListener("input", () => {
//   const data = {
//     email: email.value.trim(),
//     message: message.value.trim(),
//   };
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
// });

// // 2️⃣ Завантаження даних при перезавантаженні сторінки
// function pageRefresh() {
//   const json = localStorage.getItem(STORAGE_KEY);
//   if (!json) return; // Якщо в localStorage нічого немає — виходимо

//   try {
//     const data = JSON.parse(json);
//     if (data?.email) email.value = data.email;
//     if (data?.message) message.value = data.message;
//   } catch (error) {
//     console.log("Помилка при читанні localStorage:", error);
//   }
// }
// pageRefresh();

// // 3️⃣ Обробник відправки форми
// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const emailValue = email.value.trim();
//   const messageValue = message.value.trim();

//   if (!emailValue || !messageValue) {
//     console.log("Будь ласка, заповніть всі поля");
//     return;
//   }

//   console.log({ email: emailValue, message: messageValue });

//   localStorage.removeItem(STORAGE_KEY);
//   form.reset();
// });

/*
  Цей код зберігає дані форми в localStorage, відновлює їх при 
  перезавантаженні сторінки та видаляє після відправки форми.
*/

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const email = form.elements.email;
const message = form.elements.message;

// 1️⃣ Збереження в localStorage при введенні
form.addEventListener("input", () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    email: email.value.trim(),
    message: message.value.trim()
  }));
});

// 2️⃣ Завантаження даних при перезавантаженні сторінки
function pageRefresh() {
  const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  if (storageData.email) email.value = storageData.email;
  if (storageData.message) message.value = storageData.message;
}
pageRefresh();

// 3️⃣ Обробник відправки форми
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };

  if (!formData.email || !formData.message) {
    console.log("Будь ласка, заповніть всі поля");
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});