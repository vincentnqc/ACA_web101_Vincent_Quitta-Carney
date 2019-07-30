const projectList = [
  {
    name: 'project1',
    desc: 'a lil description',
    url: 'https://picsum.photos/200?random=1',
    tags: '#css, #html, #bootstrap',

  },

{
name: 'project1',
  desc: 'a lil description',
  url: 'https://picsum.photos/200?random=1',
  tags: '#css, #html, #bootstrap',

},
{
name: 'project1',
  desc: 'a lil description',
    url: 'https://picsum.photos/200?random=1',
      tags: '#css, #html, #bootstrap',

},
{
name: 'project1',
  desc: 'a lil description',
    url: 'https://picsum.photos/200?random=1',
      tags: '#css, #html, #bootstrap',

},
{
name: 'project1',
  desc: 'a lil description',
    url: 'https://picsum.photos/200?random=1',
      tags: '#css, #html, #bootstrap',

},
{
name: 'project1',
  desc: 'a lil description',
    url: 'https://picsum.photos/200?random=1',
      tags: '#css, #html, #bootstrap',

},
]

let rowDiv = document.querySelector('.row')
console.log('rowDiv', rowDiv)

projectList.forEach(element => {
  // console.log('element, element')
  let cardTemplate = `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${ project.url }" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">$ {project.name }</h5>
        <p class="card-text">$ {project.desc }</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
</div > `
  row.Div.insertAdjacetHTML('beforeend', cardTemplate)
});