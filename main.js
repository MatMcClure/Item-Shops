fetch('https://fortnite-api.com/shop/br')
  .then(response => response.json())
  .then(data => {
    const items = data.data.daily.items; // Assuming 'daily' contains the current item shop items
    const itemShopElement = document.getElementById('item-shop');

    items.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('item');
      itemElement.innerHTML = `
        <img src="${item.item.images.icon}" alt="${item.item.name}">
        <div class="item-details">
          <h3>${item.item.name}</h3>
          <p>${item.store.cost}</p>
        </div>
      `;
      itemShopElement.appendChild(itemElement);
    });
  })
  .catch(error => {
    console.error('Error fetching item shop:', error);
  });
