const ids=document.querySelectorAll('#idUnico')

ids.forEach(div=>{
    div.addEventListener('click',function(){
        this.style.backgroundColor='black'
    })
})
