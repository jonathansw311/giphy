const apiKey= '4KeY8H3VxyVN9uCRuXaQMw7rQvPiM3jz'
const funny = document.querySelector('#sButton')
const funnys = document.querySelector('#inputI')
const fClick = document.querySelector('.flexContainer')
const cClick = document.querySelector('#cButton')


cClick.addEventListener('click', function(){
rems = document.querySelectorAll('.imgContainer');
for(rem of rems){
  rem.remove()
}

})



fClick.addEventListener('click', function(e){
  e.target.parentElement.remove();
 
})
funny.addEventListener('click', function(e){
    e.preventDefault();
    const funnys = inputI.value;
getGiphy(apiKey, funnys);
inputI.value = "";
})

async function getGiphy(apiKey, query){
    const res=  await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=5&offset=0&rating=g&lang=en`)
  const gPic = res.data.data[0].images.original.url;
  createPic(gPic);
  }



function createPic(gPic){
  const newLi = document.createElement('div'); 
  newLi.classList.add('imgContainer')
const newImg = document.createElement('IMG');
newImg.src = gPic;
newLi.append(newImg);
console.log(newLi);
insert(newLi);
}

function insert(newLi){
    const flex = document.querySelector('.flexContainer')

    flex.append(newLi);
    

}

