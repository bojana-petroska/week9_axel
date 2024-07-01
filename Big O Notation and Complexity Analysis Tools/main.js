const bubbleSort = (arr) => {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

const merge = (left, right) => {
    const result = [];
    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i).concat(right.slice(j)));
}

//console.log(mergeSort([2, 5, 9, 1, 3, 10, 12, 5]));
//console.log(bubbleSort([2, 5, 9, 1, 3, 10, 12, 5]));

const largeArray = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000));

const measureExecutionTime = (algorithm, arr) => {
    const start = performance.now();
    algorithm(arr);
    const end = performance.now();
    return end - start;
}

// const bubbleSortTime = measureExecutionTime(bubbleSort, largeArray);
// const mergeSortTime = measureExecutionTime(mergeSort, largeArray);
// console.log(`Bubble sort time: `, bubbleSortTime);
// console.log(`Merge sort time: `, mergeSortTime);

bubbleSort(largeArray);
mergeSort(largeArray);


const quickSort = () => {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length-1];
    
}

// let arr1 = [5, 6,7 , 8, 19];
// console.log(arr1[arr1.length - 1])
