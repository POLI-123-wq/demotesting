const itemsContainer = document.getElementById('items');
const categoryFilter = document.getElementById('category');

const items = [
    { name: '白色衬衫', category: 'shirt', image: 'assets/shirt1.jpg', description: '简约白色衬衫' },
    { name: '蓝色牛仔裤', category: 'pants', image: 'jeans1.jpg', description: '经典蓝色牛仔裤' },
    { name: '黑色夹克', category: 'jacket', image: 'jacket1.jpg', description: '时尚黑色夹克' },
    { name: '格子衬衫', category: 'shirt', image: 'shirt2.jpg', description: '复古格子衬衫' },
    { name: '休闲裤', category: 'pants', image: 'pants1.jpg', description: '舒适休闲裤' },
    { name: '风衣', category: 'jacket', image: 'jacket2.jpg', description: '防风风衣' },
];

function displayItems(category = 'all') {
    itemsContainer.innerHTML = '';
    const filteredItems = category === 'all' ? items : items.filter(item => item.category === category);

    filteredItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');

        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `;

        itemsContainer.appendChild(itemElement);
    });
}

categoryFilter.addEventListener('change', (e) => {
    displayItems(e.target.value);
});

// 初始加载所有商品
displayItems();