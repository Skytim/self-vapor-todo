const container = document.createElement('div');
const title = document.createElement('h1');
const input = document.createElement('input');

let titleText = 'Hello World!';
input.addEventListener('input', (e) => titleTextChange(e.target.value));

function titleTextChange(newTitleText) {
    titleText = newTitleText;
    render();  // 重新渲染畫面
}

function render() {
    title.textContent = titleText;
    input.value = titleText;
}

render();  // 初始化渲染
container.append(title, input);
document.querySelector('#app').appendChild(container);