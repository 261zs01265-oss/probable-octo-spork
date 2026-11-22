// 現在の年を自動表示
document.getElementById('year').textContent = new Date().getFullYear();

// 作品カードの絞り込み
const filterButtons = document.querySelectorAll('.filter-btn');
const workItems = document.querySelectorAll('.work-item');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    workItems.forEach((item) => {
      const shouldShow = selected === 'all' || item.dataset.category === selected;
      item.classList.toggle('d-none', !shouldShow);
    });
  });
});

// ページ上部へ戻る
document.getElementById('topButton').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
