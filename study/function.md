# 목차
[String](#1.String)

[Array](#2.Array)

[Object](#3.Object)


# 1.String
## Split()
변수명.split('문자열')

 해당 문자열을 기준으로 각각 배열값으로 저장하게 됨.

* 문자열을 배열로 반환하는 것이 가능하다면 배열을 다시 문자열로 반환하는 것도 가능할 것입니다. join() 함수



## trim()
문자열 좌우에서 공백을 제거하는 함수


# 2.Array
## map()
key-value pair로 이뤄진 컬렉션

반복문을 돌며 배열 안의 요소들을 1:1로 짝지어 주는 것.

forEach와 마찬가지로 Array의 각 요소를 순회하며 callback 함수를 실행


map을 실행하는 배열과 결과로 나오는 배열이 다른 객체이다.

기존 배열을 수정하지 않고 새로운 배열을 만들어 냄
```javascript
[].map(callback, thisArg)
 
 
배열.map((요소, 인덱스, 배열) => {
    return 요소
});
 
 
// example0
const arr = [0,1,2,3];
let result = arr.map(function(element, index, array){
    console.log(`${array}의 ${index}번째 인자 : ${element}`);
    return element * element;
});
 
 
// example1
const arr = [1, 2, 3];
let result = arr.map((v) => {
  console.log(v);
  return v;
});
arr; // [1, 2, 3]
result; // [1, 2, 3]
arr=== result; // false
 
 
// example2
const arr = [0,1,2,3];
let result = arr.map(function(element){
    return element * element;
});
// 혹은 arrow 함수 가능
result  = arr.map(element => element * element);
 
console.log(result); // [ 0, 1, 4, 9 ]
* 객체로 사용하고 싶을땐,

 {Object.keys(contents).map((v) => <Menu.Item key={v} onClick={()=>{onClickHistory(v)}}>
```
Object.keys는 배열이므로 위 코드처럼사용하면됨.

### When Use
1. API 요청하여 받아온 데이터를 나열 할때



### 주의사항
for문은 continue나 break로 반복을 제어할 수 있지만

map은 forEach와 마찬가지로 throw(예외)를 발생시키지 않으면 중간에 반복을 종료할 수 없음.



## reduce
## sort
## filter
배열에서 해당 조건값에 해당하는 값 전부를 가져오고 싶을때 사용

const latestSearch = data.filter((item) => {return item.title === "latest";});



* filter / find 차이

find는 조건에 해당하는 원소를 찾다가 true 하나가 걸리면 바로 break 하고 그 하나만 반환.

filter함수는 각각 배열 원소에 대해서 전달받은 함수의 결과가 true를 반환한 원소들로만 배열을 만듬.



## every
성능을 위해 조건을 만족하지 않는 값이 발견되면 순회는 중단된다.

하나를 만족하면 true

## some
성능을 위해 조건을 만족하는 값이 발견되는 그 즉시 순회는 중단된다.

조건을 모두 만족하면 true

## find
배열에서 해당 조건값의 맨처음 검색되는 것을 찾고 싶을때 사용

const latestSearch = data.find((item)=>{return item.title === "latest"})

## findIndex
배열에서 해당 조건값의 인덱스번호를 찾고 싶을때 사용

const latestSearch = data.findIndex((item)=>{return item.title === "latest"})

## includes


## Splice
배열 요소 추가/삭제

함수 인자를 3개받음.
```javascript
//ex 
//추가
splice(index, position, value)

//삭제
splice(index,position)
```

# 3.Object
## 객체 병합(merge)

```javascript
// 객체 간 병합 방법1
obj1 = { a:1, b:2 }
obj2 = { c:1 }
obj3 = { ...obj1, ...obj2 }
 
 
// 방법2
Object.assign(obj1, obj2);
 
 
obj3 = Object.assign({}, obj1, obj2);
3.2. delete
객체에서 해당 값 빼기 (삭제)

// ex1
delete myObject.regex;
// or,
delete myObject['regex'];
// or,
var prop = "regex";
delete myObject[prop];
 
 
// ex2
var myObject = {
    "ircEvent": "PRIVMSG",
    "method": "newURI",
    "regex": "^http://.*"
};
delete myObject.regex;
 
console.log(myObject);
```

## 빈객체 {} 확인
null이 아닌 {} 비어있는 객체인지 확인 방법

```javascript
// ex1
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
 
 
function isEmpty(obj) {
    for(var prop in obj){
         if(obj.hasOwnProperty(prop))
             return false;
    }
 
 
    return true;
}
```

## map
key-value 형태로 key는 중복되지 않는 특징
```javascript
let map = new Map();
map.set('name', 'soobean');
map.set('age', 28);
map.set('age', 29);
console.log(map);

```

## set
중복값을 가지지 않음.

## foreach
Object를 제외한 Array, Map,Set에서 사용가능

배열 요소마다 한번씩 주어진 함수를 실행

callback함수를 등록하여 배열의 인덱스와 값에 접근할 수 있다.
```javascript
arr.forEach(function(item,index.arr2){
 console.log(item,index,arr2[index+1]);
})
```
* foreach와 map차이 : map은 새로운 배열을 반환하고, foreach는 undefined를 반환하지 않음. 


## for in
Array, Object 사용가능

내부적으로 객체의 Enumerable속성이 true로 설정된 속성들만 접근 가능하기 때문임.

객체의 속성을 순회하기 위한 구문

## for of
Object를 제외한 Array, Map,Set에서 사용가능.

Array와 Set은 값을 출력했고 Map의 경우는 key,value값을 출력함.

컬렉션 전용. 객체 기준이라기 보다 symbol.iterator속성이 있는 모든 컬렉션 요소에 대해 반복함.

객체의 속성들을 순회하기 위한 구문


### reduce()
splice-forEach를 통해 만들어진 새로운 배열들을 초기값 으로 받아 사용함.


## callback ?

# Tip
JavaScript에서 자료형 false 반환은 "", null, undefined, 0, NaN
