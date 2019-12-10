## 객체의 성능, 초기화 성능

성능을 생각하지 않고 작성하는 코드에 객체 선언과 초기화 구문이 있다.

### Array 형식의 객체와 Object형식의 객체를 생성 및 초기화하는 방법의 성능 비교

> 성능측정은 jsMatch

---

#### Array

- 객체 생성

  생성자 vs 리터럴

  ```javascript
  // 생성자를 사용한 배열 생성
  const arr = new Array();

  // 리터럴 형식으로 배열 생성
  const arr = [];
  ```

  **결과 : 큰 차이는 없으나 <span style="color:skyblue">리터럴 형식</span>을 사용할 경우 여러 브라우저에서 <span style="color:skyblue">좀더 좋은 성능</span>을 보임.**
  <br><br>

- 객체 초기화

  접근자 vs Push

  ```javascript
  // 접근자를 사용한 데이터 할당
  const arr = [];

  for (let i = 0; i < 1000; i++) {
    arr[i] = i;
  }

  // push()메소드를 사용한 데이터 핥당
  const arr = [];

  for (let i = 0; i < 1000; i++) {
    arr.push(i);
  }
  ```

  **결과 : <span style="color:lightcoral">크롬을 제외한</span> 대부분이 push법보다 <span style="color:skyblue">접근자</span>가 데이터를 할당하는 성능이 <span style="color:skyblue">2배 정도 더 빠르다.</span> (크롬은 push가 아주 미세하게 더 빠름)**

#### Object

- 객체 생성

  생성자 vs 리터럴

  ```javascript
  // 리터럴을 사용한 오브젝트 객체 생성
  const obj = {};

  //생성자를 사용한 오브젝트 객체 생성
  const obj = new Object();
  ```

  **결과 : 리터럴, 생성자 성능차이가 별로 없음.<br>
  이와 같이 성능 차이가 거의 없는 경우, 성능보다는 개발,유지보수,가독성까지 고려해서 코드 작성방법을 선택하는 것이 올바른 최적화 방법이다.**

- 객체 초기화

  연산자 vs []연산자

```javascript
// 연산자를 이용한 데이터 삽입
const obj = {};
obj.a =1;
obj.b =2;
...
obj.j=10;

// []연산자를 이용한 데이터 삽입
const obj = {};
obj["a"] = 1;
obj["b"] = 2;
obj["c"] = 3;
...
obj["j"] = 10;
```

**결과 : 객체의 초기화도 생성과 마찬가지로 한 가지 방식이 더 좋다고 판단할 수 없음.**

## 스코프 체인 탐색과 성능

> 스코프 체인이란?
>
> JavaScript는 인터프리터 언어로 JIT(Just-In-Time)컴파일러 도입 등 실행을 최적화하기 위한 여러 가지 방법을 도입하고 있지만 개발자가 작성한 코드 자체의 성능이 런타임 성능에도 많은 영향을 줌.
