console.log(123)
let str = `
010-123-5678
dthefateful@gmail.com.
https://www.google.com
httpdwdw
The Lorem Ipsum the the the the The fox fox.
aabbcccdddd
hxyp
가나 다라 마바 사사사사사
d`

// const regexp = new RegExp('the', 'gi')
// const regex = /the/gi
// console.log(str.match(regexp))

// const regexp = /the/gi
// console.log(regexp.test(str))

// str = str.replace(regexp, 'ychu')
// console.log(str)

// console.log(str.match(/./gi))
// console.log(str.match(/\./gi))
// console.log(str.match(/\.$/gim))
// console.log(
//   str.match(/d$/gm)
// )
// console.log(
//   str.match(/^t/gmi)  
// )
// console.log(
//   str.match(/h..p/g)  
// )
// console.log(
//   str.match(/http/g)  
// )
// console.log(
//   str.match(/https?/g)  
// )
// console.log(
//   str.match(/fate|lorem/gi)  
// )
// console.log(
//   str.match(/\b\w{2,3}\b/gi)  
// )
console.log(
  str.match(/[0-9]{1,}/g)
)
console.log(
  str.match(/[가-힣]{1,}/g)
)
console.log(
  str.match(/\bf\w{1,}\b/g)
) //fox
console.log(
  str.match(/\b\d{1,}\b/g)
) //fox

const h = `  the hello waold  !  `
console.log(
  h.replace(/\b\s{1,}\b/g, '')
) //모든 공백문자 삭제

console.log(
  str.match(/.{1,}(?=@)/g)
) //@ 앞의 문자를 연속해서 일치하는데 1자리 이상 
console.log(
  str.match(/(?=@).{1,}/g)
)  //@ 뒤의 문자


