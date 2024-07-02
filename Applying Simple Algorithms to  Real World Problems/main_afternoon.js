let students = [
  { name: 'Alice', category: 'engineering' },
  { name: 'Bob', category: 'medicine' },
  { name: 'Charlie', category: 'psychology' },
  { name: 'David', category: 'engineering' },
  { name: 'Eve', category: 'psychology' },
  { name: 'Frank', category: 'medicine' },
  { name: 'Grace', category: 'engineering' },
  { name: 'Henry', category: 'psychology' },
  { name: 'Ivy', category: 'engineering' },
  { name: 'Jack', category: 'medicine' },
  { name: 'Karen', category: 'psychology' },
  { name: 'Leo', category: 'engineering' },
  { name: 'Mia', category: 'psychology' },
  { name: 'Noah', category: 'engineering' },
  { name: 'Olivia', category: 'medicine' },
  { name: 'Peter', category: 'psychology' },
  { name: 'Quinn', category: 'engineering' },
  { name: 'Rachel', category: 'medicine' },
  { name: 'Sam', category: 'psychology' },
  { name: 'Tom', category: 'engineering' },
];

const filterStudents = () => {
  const studentCategory = document.getElementById('student-input').value;
  const displayStudents = document.getElementById('display-students');

  const filteredStudents = students
    .filter((student) => student.category === studentCategory)
    .map((student) => student.name)
    .join(', ');

  displayStudents.textContent = `These are the students in the chosen category: ${filteredStudents}`;
};

let products = [
  { id: 1, name: 'Laptop', category: 'Electronics' },
  { id: 2, name: 'Book', category: 'Books' },
  { id: 3, name: 'Headphones', category: 'Electronics' },
  { id: 4, name: 'Chair', category: 'Furniture' },
  { id: 5, name: 'Smartphone', category: 'Electronics' },
  { id: 6, name: 'Tablet', category: 'Electronics' },
  { id: 7, name: 'Desk', category: 'Furniture' },
  { id: 8, name: 'Monitor', category: 'Electronics' },
  { id: 9, name: 'Backpack', category: 'Accessories' },
  { id: 10, name: 'Printer', category: 'Electronics' },
  { id: 11, name: 'Sofa', category: 'Furniture' },
  { id: 12, name: 'Keyboard', category: 'Electronics' },
  { id: 13, name: 'Mouse', category: 'Electronics' },
  { id: 14, name: 'Dining Table', category: 'Furniture' },
  { id: 15, name: 'Camera', category: 'Electronics' },
  { id: 16, name: 'Bed', category: 'Furniture' },
  { id: 17, name: 'Couch', category: 'Furniture' },
  { id: 18, name: 'Watch', category: 'Accessories' },
  { id: 19, name: 'Speaker', category: 'Electronics' },
  { id: 20, name: 'Rug', category: 'Furniture' },
];

// const searchProducts = (name) => {
//     const searchProductByName = {};

//     const searchValue = document.getElementById('search-product').value.toLowerCase();
//     const displayProduct = document.getElementById('result-search');

//     if (searchValue === '') {
//         displayProduct.textContent = '';
//         return;
//     }

//   products.forEach((product) => {
//     searchProductByName[product.name.toLowerCase()] = product;
//   });

//   if (searchProductByName.hasOwnProperty(searchValue)) {
//       const result = searchProductByName[searchValue];
//       displayProduct.textContent = `Found: ${result.name}`;
//     } else {
//         displayProduct.textContent = `Not found.`;
//     }

//   return result;
// };

const searchValue = document
  .getElementById('search-product')
  .value.toLowerCase();
const displayProduct = document.getElementById('result-search');

const searchProducts = (searchValue) => {
  const foundProduct = products.find(
    (product) => product.name.toLowerCase() === searchValue
  );

  if (foundProduct) {
    displayProduct.textContent = `Found: ${foundProduct.name}`;
  } else {
    displayProduct.textContent = `Not found.`;
  }
  return foundProduct;
};

document
  .getElementById('search-button')
  .addEventListener('click', searchProducts);

console.log(searchProducts('Watch'));

function measureExecutionTime(algorithm, input) {
  const start = performance.now();
  algorithm(input);
  const end = performance.now();
  return end - start;
}

function analyzeProductSearch() {
  const searchValue = document.getElementById('search-product').value;
  const displayResult = document.getElementById('result');

  const searchProductsTime = measureExecutionTime(searchProducts, searchValue);
  displayResult.textContent = `Execution Time: ${searchProductsTime} ms`;

  console.log('Search Products:');
  console.log(`Execution Time: ${searchProductsTime} ms`);
}
