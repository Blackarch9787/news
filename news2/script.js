


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('uploadForm');
    const topNewsSection = document.getElementById('top-news');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const subject = document.getElementById('subject').value;
        const content = document.getElementById('content').value;
        const imageFile = document.getElementById('image').files[0];

        const reader = new FileReader();

        reader.onload = function (e) {
            const newArticle = document.createElement('article');

            const imageUrl = e.target.result;
            newArticle.innerHTML = `
                <h3>${title}</h3>
                <h4>${subject}</h4>
                <img src="${imageUrl}" alt="${title}">
                <p>${content}</p>
            `;

            topNewsSection.appendChild(newArticle);

            // Clear the form
            form.reset();
        };

        reader.readAsDataURL(imageFile);
    });
});


