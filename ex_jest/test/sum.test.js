const { sum, sumOf } = require('../src/sum');
//const sum = require('../src/sum');

// test라는 함수는 새로운 테스트 케이스를 만드는 함수
// expect는 특정 값이 ~~일 것이다 라고 사전에 정의를 하고 통과를 하면 테스트를 성공시키고 통과를 하지 않으면 실패시킴.
// toBe는 matchers라고 부르는 함수. 특정 값이 어떤 조건을 만족하는지, 또는 어떤 함수가 실행이 됬는지, 에러가 났는지 등을 확인 할 수 있게 해줌.

test('1+2=3', () => {
  expect(sum(1, 2)).toBe(3);
});

// it이라는 키워드를 사용 할 수도 잇다. 작동방식은 완전히 똑같다.
it('calcaulates 1+2', () => {
  expect(sum(1, 2)).toBe(3);
});

// 테스트 케이스 설명은 한국어로 적어도 상관없다.

// describe을 사용해서 여러 테스트 케이스를 묶기
describe('sum', () => {
  it('calculates 1+2', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('calculates all numbers', () => {
    const array = [1, 2, 3, 4, 5];
    expect(sumOf(array)).toBe(15);
  });
});
