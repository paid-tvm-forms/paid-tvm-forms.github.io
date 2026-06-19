const searchInput = document.getElementById('site-search');

searchInput.addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase();
  
  // Replace '.list-item' with your actual HTML class for list elements
  document.querySelectorAll('.list-item').forEach(item => {
    const text = item.textContent.toLowerCase();
    
    if (text.includes(value)) {
      item.style.display = ''; // Shows the item
    } else {
      item.style.display = 'none'; // Hides the item
    }
  });
});
