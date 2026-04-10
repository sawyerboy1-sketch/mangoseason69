function addPost(){
  const box = document.getElementById('postText');
  const feed = document.getElementById('feed');
  const value = box.value.trim();
  if(!value) return;
  const card = document.createElement('article');
  card.className = 'post-card';
  card.innerHTML = `
    <div class="post-top">
      <div><strong>You</strong><div class="muted">Community Post</div></div>
      <span class="pill">New</span>
    </div>
    <p>${value}</p>
    <div class="post-actions">
      <button onclick="likePost(this)">❤ Like</button>
      <button onclick="commentPost(this)">💬 Comment</button>
    </div>
  `;
  feed.prepend(card);
  box.value = '';
}
function likePost(btn){ btn.textContent = '❤ Liked'; }
function commentPost(){ alert('This demo is ready to be connected to a real comment system later.'); }
