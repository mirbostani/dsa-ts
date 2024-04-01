# DSA-TypeScript

Data Structures and Algorithms in TypeScript.

- Data Structures
  - [Stack](./src/stack/)
- Searching
  - [Linear Search](./src/searching/linear_search/)
  - [Binary Search](./src/searching/binary_search/)
- Sorting
  - [Bubble Sort](./src/sorting/bubble_sort/)
  - [Insertion Sort](./src/sorting/insertion_sort/)
  - [Selection Sort](./src/sorting/selection_sort/)
  - [Merge Sort](./src/sorting/merge_sort/)
  - [QuickSort](./src/sorting/quick_sort/)

## Install Dependencies

```bash
$ npm install
```

## Run Tests

```bash
$ npm test # Run all the tests using NPM
$ npm test -- --runInBand # Run all the tests in a single process using NPM
$ npx jest # Run all the tests
$ npx jest --runInBand # Run all the tests in a single process
$ npx jest ./src/example.test.ts # Run the specified test
```

## Run `*.ts` Files

```bash
$ npm install -g ts-node
$ ts-node --esm ./src/sorting/bubble_sort/bubbleSort.ts
```