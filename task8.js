// Danh sách từ tiếng Anh và tiếng Việt
const englishWords = ["hello", "world", "apple", "banana"];
const vietnameseWords = ["xin chào", "thế giới", "quả táo", "quả chuối"];

const form = document.getElementById("dictionaryForm");
const searchInput = document.getElementById("searchInput");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const searchWord = searchInput.value.toLowerCase();
    const index = englishWords.indexOf(searchWord);
    if (index !== -1) {
        const vietnameseWord = vietnameseWords[index];
        resultDiv.textContent = `Từ "${searchWord}" có nghĩa là "${vietnameseWord}".`;
    } else {
        resultDiv.textContent = `Không tìm thấy từ "${searchWord}".`;
    }
});
