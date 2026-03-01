// Загружаем посты при запуске страницы
document.addEventListener('DOMContentLoaded', loadPosts);

function addPost() {
    const input = document.getElementById('postInput');
    const text = input.value;

    if (text.trim() === "") {
        alert("Пост не может быть пустым!");
        return;
    }

    const post = {
        text: text,
        date: new Date().toLocaleString()
    };

    // Сохраняем в LocalStorage (память браузера)
    savePostToStorage(post);

    // Добавляем на экран
    renderPost(post);

    // Очищаем поле
    input.value = "";
}

function savePostToStorage(post) {
    let posts = JSON.parse(localStorage.getItem('cometaPosts')) || [];
    posts.unshift(post); // Добавляем в начало массива
    localStorage.setItem('cometaPosts', JSON.stringify(posts));
}

function loadPosts() {
    let posts = JSON.parse(localStorage.getItem('cometaPosts')) || [];
    posts.forEach(post => renderPost(post));
}

function renderPost(post) {
    const feed = document.getElementById('feed');
    
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    
    postElement.innerHTML = `
        <div class="post-date">${post.date}</div>
        <div class="post-content">${post.text}</div>
    `;

    feed.prepend(postElement); // Добавляем пост в начало ленты
}
