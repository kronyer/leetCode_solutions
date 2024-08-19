function runningSum(nums: number[]): number[] {
  let runningSum: number[] = [];
  let currentSum: number = 0;

  for (let i: number = 0; i < nums.length; i++) {
    currentSum += nums[i];
    runningSum.push(currentSum);
  }
  return runningSum;
}
