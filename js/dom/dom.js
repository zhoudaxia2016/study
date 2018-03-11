/* dom创建 */
document.createElement('div')
document.createTextNode('Hello World!')

/* dom查询 */
document.querySelector('#id')
document.querySelectorAll('#id')
document.getElementById('id')
document.getElementsByClass('class')
document.getElementsByTagName('tag')

// parent
ele.parentElement
ele.parentNode
ele.offsetParent

// children
ele.children
ele.childNodes

ele.firstChild
ele.lastChild
ele.firstElementChild
ele.lastElementChild

// sibling
ele.nextSibling
ele.previousSibling
ele.nextElementSibling
ele.previousElementSibling

/* dom 更改 */
ele.appendChild(el)
ele.removeChild(el)
ele.replaceChild(el1, el2)
ele.insertBefore(newEle,referEle)
ele.cloneNode(true)

/* 属性操作 */
ele.attributes
ele.getAttribute('class')
ele.setAttribute('class', 'abc')
ele.hasAttribute('class')
ele.removeAttribute('class')

/* 获取内容 */
innerHTML outerHTML
innerText outerText
