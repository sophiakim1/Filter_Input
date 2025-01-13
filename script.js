const filterInput = document.getElementById("filterInput");

filterInput.oninput = (e) => {
setTimeout(() => {
    const value = e.target.value;
    const articles = document.querySelectorAll("#articles li");

    articles.forEach((article) => {
        const words = article.innerText;

    if (!value) {
        return;
    }

    if (words.includes(value)) {
        elem.classList.add("highlight");
    } else {
    }
    });
}, 500);
};
