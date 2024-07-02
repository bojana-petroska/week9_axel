const inventory = [
  { item: 'Shoes', quantity: 200 },
  { item: 'T-Shirts', quantity: 500 },
  { item: 'Coats', quantity: 150 },
  { item: 'Boots', quantity: 50 },
  { item: 'Socks', quantity: 550 },
];

const products = {
  Shoes: ['Sneakers', 'Boots', 'Sandals'],
  'T-Shirts': ['Shirts', 'Polos', 'Tank Tops'],
  Coats: ['Jackets', 'Blazers', 'Parkas'],
};

inventory.sort((a, b) => {
  if (a.item < b.item) return -1;
  if (a.item > b.item) return 1;

  return 0;
});

const binarySearchInventory = (arr, targetItem) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid].item === targetItem) {
      return arr[mid].quantity;
    } else if (arr[mid].item < targetItem) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return 0;
};

const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid].item.toLowerCase() === target.toLowerCase()) {
      return `The quantity for ${target} is: ${arr[mid].quantity}`;
    } else if (arr[mid].item.toLowerCase() < target.toLowerCase()) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return 'not found';
};

const find = () => {
  const input = document.getElementById('item-input');
  const value = input.value;
  const result = binarySearch(inventory, value);
  document.getElementById('output').innerText = result;
};

const recommendProducts = () => {
  const selectedProduct = document.getElementById('product-input').value;
  const recommended = recommendSimilarProducts(selectedProduct);
  const recommendationsElement = document.getElementById('recommendations');

  if (recommended.length > 0) {
    recommendationsElement.textContent = `Similar products for ${selectedProduct}: ${recommended.join(
      ', '
    )}`;
  } else {
    recommendationsElement.textContent = `No similar products for ${selectedProduct} found.`;
  }
};

const recommendSimilarProducts = (product) => {
  if (products[product]) {
    return products[product];
  }

  return [];
};

// Create a simple furniture search functionality. Given a list of furniture items, allow users to search for specific items and display whether the item exists in the inventory or not.

const furnitureInventory = {
  chair: 5,
  table: 3,
  sofa: 2,
  bed: 4,
  wardrobe: 1,
  bookshelf: 6,
  desk: 2,
  coffee_table: 3,
  dining_table: 1,
  armchair: 4,
};

const searchFurniture = () => {
  const searchFurniture = document
    .getElementById('search-furniture')
    .value.trim()
    .toLowerCase();
  const displayResult = document.getElementById('display-result');

  if (furnitureInventory.hasOwnProperty(searchFurniture)) {
    displayResult.textContent = `Yes, ${searchFurniture} is available`;
  } else {
    displayResult.textContent = `Sorry, ${searchFurniture} is not available`;
  }
};
