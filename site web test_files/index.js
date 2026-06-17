const regions = [ "Mondstadt", "Liyue"

]

const liste = document.getElementById('regions');
regions.map((region) =>{
const reg = document.createElement('div')
reg.textContent(region)
    liste.appendChild(reg)
})