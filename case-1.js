function calculate_diagonal_sum(grid_size) {
  let spiralArray = new Array(grid_size)
    .fill(0)
    .map(() => new Array(grid_size).fill(0));
  let value = 1;
  let x = Math.floor(grid_size / 2);
  let y = Math.floor(grid_size / 2);
  let step = 1;
  let count_diagonal = 1 + grid_size * grid_size;

  spiralArray[x][y] = value++;

  while (step < grid_size) {
    for (let i = 0; i < step; i++) {
      y++;
      spiralArray[x][y] = value++;

      if (x == y || x + y == grid_size - 1) {
        count_diagonal += spiralArray[x][y];
      }
    }

    for (let i = 0; i < step; i++) {
      x++;
      spiralArray[x][y] = value++;

      if (x == y || x + y == grid_size - 1) {
        count_diagonal += spiralArray[x][y];
      }
    }
    step++;

    for (let i = 0; i < step; i++) {
      y--;
      spiralArray[x][y] = value++;

      if (x == y || x + y == grid_size - 1) {
        count_diagonal += spiralArray[x][y];
      }
    }

    for (let i = 0; i < step; i++) {
      x--;
      spiralArray[x][y] = value++;

      if (x == y || x + y == grid_size - 1) {
        count_diagonal += spiralArray[x][y];
      }
    }
    step++;
  }

  for (let i = 1; i < grid_size; i++) {
    spiralArray[x][y + i] = value++;
  }

  console.log(count_diagonal);
}

const arg = process.argv.slice(2);
if (arg[0] !== '') {
  const numb = Number(arg[0]);
  if (!numb) {
    console.log('===> Insert the value after the script name');
  } else {
    if (numb % 2 == 0) {
      console.log('===> Insert only odd number');
    } else {
      calculate_diagonal_sum(numb);
    }
  }
} else {
  console.log('===> Insert the value after the script name');
}
