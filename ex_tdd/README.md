# TDD 연습하기

배열이 주어졌을 때 최댓값, 최솟값, 평균, 중앙값, 최빈값을 구하는 함수들을 구현

1. src/stats.js 파일을 만든다.
2. test/stats.test.js 파일을 만든다.

## 최댓값 구하기

먼저 최댓값을 구하는 테스트케이스를 작성한다.

```javascript
// test/stats.test.js
const stats = require('../src/stats');

describe('stats', () => {
  it('gets maximun value', () => {
    expect(stats.max([1, 2, 3, 4])).toBe(4);
  });
});
```

테스트 케이스에 대한 성공 케이스를 구현한다.

```javascript
// stats.js
exports.max = numbers => {
  let result = numbers[0];
  numbers.forEach(n => {
    if (n > result) {
      result = n;
    }
  });
  return result;
};
```

리팩토링을 고민한다.

```javascript
// stats.js
exports.max = numbers => Math.max(...numbers);
```

이런 절차로 다음 테스트 케이스를 진행한다.

\*\* describe 내부에서 또 describe를 쓸 수 있다. (단, it 내부에 또다른 it나 describe를 쓸 수는 없다.)

toEqual는 객체 또는 배열을 비교해야하는 상황에서 사용함.
