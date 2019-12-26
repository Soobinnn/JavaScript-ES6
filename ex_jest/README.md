# jest Example

0. yarn init -y

1. yarn add --dev jest

\*\* VS Code를 사용한다면, @types/jest를 설치하면 VS Code에서 인텔리센스 지원을 받을 수 있다.

2. yarn add --dev @types/jest

3. test케이스 작성

4. package.json에 scripts 추가 "scripts": { "test": "jest --watchAll --verbose" }

# 테스트 작성하기

1. src/sum.js 생성

```javascript
function sum(a, b) {
  return a + b;
}

module.exports = sum;
```

2. test/sum.test.js 생성

```javascript
const sum = require('../src/sum');

test('1+2=3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

test라는 함수는 새로운 테스트 케이스를 만드는 함수

expect는 특정 값이 ~~일 것이다 라고 사전에 정의를 하고 통과를 하면 테스트를 성공시키고 통과를 하지 않으면 실패시킴.

toBe는 matchers라고 부르는 함수. 특정 값이 어떤 조건을 만족하는지, 또는 어떤 함수가 실행이 됬는지, 에러가 났는지 등을 확인 할 수 있게 해줌.

3. jest 실행 package.json에 scripts 추가 후 실행 (위 참조)

```
yarn test
```

## test 대신 it

it이라는 키워드를 사용 할 수도 잇다. 작동방식은 완전히 똑같다.

테스트 케이스 설명은 한국어로 적어도 상관없다.

```javascript
const sum = require('../src/sum');

it('calcaulates 1+2', () => {
  expect(sum(1, 2)).toBe(3);
});
```

## describe를 사용해서 여러 테스트 케이스 묶기

```javscript
// src/sum.js
function sum(a, b) {
  return a + b;
}

function sumOf(numbers) {
     let result = 0;
    numbers.forEach(n => {
    result += n;
  });

  return result;
}

exports.sum = sum;
exports.sumOf = sumOf;

// test/sum.test.js
describe('sum', () => {
  it('calculates 1+2', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('calculates all numbers', () => {
    const array = [1, 2, 3, 4, 5];
    expect(sumOf(array)).toBe(15);
  });
});
```

## 리팩토링

테스트 코드를 작성 했을 때 얻을 수 있는 이점은, 리팩토링 이후 코드가 제대로 작동하고 있는 것을 검증하기 매우 간편하다.

```javascript
// src/sum.js
function sum(a, b) {
  return a + b;
}

function sumOf(numbers) {
  return numbers.reduce((acc, current) => acc + current, 0);
}

exports.sum = sum;
exports.sumOf = sumOf;
```

\*\* describe 내부에서 또 describe를 쓸 수 있다. (단, it 내부에 또다른 it나 describe를 쓸 수는 없다.)

toEqual는 객체 또는 배열을 비교해야하는 상황에서 사용함.
