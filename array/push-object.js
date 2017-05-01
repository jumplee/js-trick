/**
 * 数组的push只是将指针保存了下来，并不会各自拷贝一份
 * 
 */

var t={
    name:'测试的名字'
}
var ar1=[
    t
]
var ar2=[]
ar2.push(t)
t.name='xiugai'
console.log(ar1)
console.log(ar2)
ar1[0].name="ar1修改"

console.log(ar1)
console.log(ar2)