var menuItemdd = document.querySelectorAll('.item-menu-dd')

function selectLink(){
    menuItemdd.forEach((item)=>
        item.classList.remove('ativo')
    )
}

menuItemdd.forEach((item)=>
    item.addEventListener('click', selectLink)
)

var btnExpdd = document.querySelector('#btn-exp-dd')
var menuSidedd = document.querySelector('.menu-lateral-dd')

btnExpdd.addEventListener('click', function(){
    menuSidedd.classList.toggle('expandir-dd')
})