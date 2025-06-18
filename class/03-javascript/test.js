function generateCombinations(digits) {
  const results = new Set();

  function backtrack(path, used) {
    if (path.length > 0) {
      results.add(path.join("")); // 현재 경로를 문자열로 저장
    }

    if (path.length === digits.length) return;

    for (let i = 0; i < digits.length; i++) {
      if (used[i]) continue; // 이미 사용한 숫자면 스킵

      used[i] = true;
      path.push(digits[i]);

      backtrack(path, used);

      path.pop();
      used[i] = false;
    }
  }

  backtrack([], Array(digits.length).fill(false));
  return [...results];
}

const digits = ["1", "2", "3"];
const allCombinations = generateCombinations(digits);
console.log(allCombinations.sort());
