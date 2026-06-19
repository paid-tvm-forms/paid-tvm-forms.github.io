const searchInput = document.getElementById('site-search');

function normalize(text) {
    return (text || "")
        .toLowerCase()
        .replace(/[_-]/g, ' ');
}

searchInput.addEventListener('input', (e) => {
    const value = normalize(e.target.value);

    document.querySelectorAll('.sections section').forEach(section => {
        let hasVisibleCard = false;

        section.querySelectorAll('.card').forEach(card => {

            const cardText = normalize(card.textContent);

            const links = [...card.querySelectorAll('a')]
                .map(a => normalize(a.href))
                .join(' ');

            const keywords = normalize(card.dataset.keywords);

            const searchable = `${cardText} ${links} ${keywords}`;

            if (searchable.includes(value)) {
                card.style.display = '';
                hasVisibleCard = true;
            } else {
                card.style.display = 'none';
            }
        });

        section.style.display = hasVisibleCard ? '' : 'none';
    });
});


const btn = document.getElementById("lang-toggle");

let current = "ml";

function updateLang() {
    document.querySelectorAll(".lang").forEach(el => {
        el.classList.remove("active");
    });

    document.querySelectorAll("." + current).forEach(el => {
        el.classList.add("active");
    });
}

btn.addEventListener("click", () => {
    current = current === "en" ? "ml" : "en";
    btn.textContent = current.toUpperCase()
    updateLang();
});

updateLang();