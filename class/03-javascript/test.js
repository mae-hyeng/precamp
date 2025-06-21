function solution(genres, plays) {
  let gp = genres.map((g, i) => [g, plays[i]]);
  let maxs = {};
  let sum = {};
  genres.forEach((g, i) => {
    sum[g] = (sum[g] || 0) + plays[i];
    maxs[g] = (maxs[g] || 0) < plays[i] ? plays[i] : plays[i];
  });

  let 순서 = Object.entries(sum)
    .sort((a, b) => b[1] - a[1])
    .map((s) => s[0]);
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8]));
console.log(solution([2, 2, 2, 2], [1, 1, 1, 1]));
console.log(solution([1, 3, 9, 9], [2, 2, 8, 10]));
