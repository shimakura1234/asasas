document.addEventListener('DOMContentLoaded', function() {
  const element = document.querySelector('.animation-container');

  // 要素の初期設定
  element.style.opacity = 0;
  element.style.transform = 'scale(0.5)';

  // アニメーションの実行
  setTimeout(function() {
    element.style.opacity = 1;
    element.style.transform = 'scale(1)';
    element.style.transition = 'opacity 1s ease, transform 1s ease';
  }, 500); // 0.5秒後にアニメーションを開始
});
