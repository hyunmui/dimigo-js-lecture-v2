/**
 * 브라우저의 window 와 같은 전역 객체
 * 모든 파일에서 접근할 수 있다
 * 기본적으로 import 하지 않았는데 쓸 수 있는 객체/함수들은 모두 이 global 객체에 내장되어 있다
 */
console.log(global);
console.log(global.console); // 자주쓰던 console 객체도 global 에 있다
global.console.log("abcd");

/**
 * 타이머
 * 타이머를 설정하는 함수와 해제하는 함수로 나뉘어저 있음
 */

// 일회성 타이머
const timeout = setTimeout(() => {
  console.log("1.5초 후 실행");
}, 1500); // milliseconds (1/1000 초) 단위

// 반복 타이머
const interval = setInterval(() => {
  console.log("1초마다 실행");
}, 1000);

const timeout2 = setTimeout(() => {
  console.log("실행되지 않음");
}, 3000);

setTimeout(() => {
  // 타이머를 해제함
  clearTimeout(timeout2); // 실행되기전에 취소하였음
  clearInterval(interval); // 반복되던 내용 취소함
}, 2500);
