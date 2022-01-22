import './x.js'
import png from './assets/11.png'//png的路径

console.log('hi');
const div=document.getElementById('app');
div.innerHTML=`
<img src='${png}'>
`
console.log(div)
console.log(png);//png的路径

const button=document.createElement('button')
button.innerText='懒加载'
div.appendChild(button)
button.onclick=()=>{
  const promise=import('./lazy.js')//使用import()函数读取文件会得到一个promise对象
console.log(promise);
  promise.then((module)=>{
   const fn=module.default//导出来的默认值是一个函数
    fn();
  },()=>{})
}