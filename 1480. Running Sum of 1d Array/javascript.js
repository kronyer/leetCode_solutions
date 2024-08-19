var runningSum = function (nums) {
  let runningSum = [];
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    runningSum.push(currentSum);
  }
  console.log(runningSum);
  return runningSum;
};
