const container = document.createElement('div');
const title = document.createElement('h1');
const input = document.createElement('input');

let titleText = 'Hello World!';

title.textContent = titleText;
input.value = titleText;

// 事件處理
input.addEventListener('input', (e) => titleTextChange(e.target.value));

// 狀態更新
function titleTextChange(newTitleText) {
    title.textContent = newTitleText;
    input.value = newTitleText;
}

container.append(title, input);
document.querySelector('#app').appendChild(container);