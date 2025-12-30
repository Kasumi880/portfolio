// 年を自動更新
document.getElementById('year').textContent = new Date().getFullYear();

// ナビ開閉
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if(toggle){
  toggle.addEventListener('click', () => {
    const open = menu.getAttribute('data-open') === 'true';
    menu.setAttribute('data-open', String(!open));
    toggle.setAttribute('aria-expanded', String(!open));
  });
}

// デモ送信メッセージ
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = new FormData(form).get('name');
  document.querySelector('.result').textContent = `Thank you, ${name}!`;
  form.reset();
});