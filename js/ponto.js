var menuItempp = document.querySelectorAll('.item-menu-pp')

function selectLink(){
    menuItempp.forEach((item)=>
        item.classList.remove('ativo')
    )
}

menuItempp.forEach((item)=>
    item.addEventListener('click', selectLink)
)

var btnExppp = document.querySelector('#btn-exp-pp')
var menuSidepp = document.querySelector('.menu-lateral-pp')

btnExppp.addEventListener('click', function(){
    menuSidepp.classList.toggle('expandir-pp')
})