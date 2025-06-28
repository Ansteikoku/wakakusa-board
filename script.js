// JSONファイルからデータを読み込む
fetch('posts.json')
  .then(response => response.json())
  .then(posts => {
    displayPosts(posts);
  })
  .catch(error => console.log('データの読み込みに失敗しました', error));

// 投稿を表示する関数
function displayPosts(posts) {
  const postList = document.getElementById('postList');
  postList.innerHTML = ''; // 既存の投稿をクリア

  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <p class="username">${post.username}</p>
      <p class="message">${post.message}</p>
      <p class="timestamp">${post.timestamp}</p>
    `;
    postList.appendChild(postElement);
  });
}

// 投稿フォームの処理
document.getElementById('postBtn').addEventListener('click', () => {
  const username = document.getElementById('username').value;
  const message = document.getElementById('message').value;

  if (username && message) {
    const newPost = {
      username: username,
      message: message,
      timestamp: new Date().toLocaleString()
    };

    // 投稿を手動でJSONファイルに追加（GitHubリポジトリで更新）
    alert('投稿が保存されました。GitHubリポジトリを更新してください。');

    document.getElementById('username').value = '';
    document.getElementById('message').value = '';
  } else {
    alert('名前とメッセージを入力してください。');
  }
});
