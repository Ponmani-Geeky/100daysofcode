const endpoint='https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const search=document.querySelector('.search');
const suggestion=document.querySelector('.suggestions');

const cities=[];

fetch(endpoint).
     then(response=>response.json())
     .then(data=>cities.push(...data));

function findMatched(word,cities){
    return cities.filter(places=>{
        const regex=new RegExp(word,'ig');
        if(word.length===0){
            return '';
        }
        else{
        return places.city.match(regex) || places.state.match(regex);
    }
    })
}
function displayMatch(){
     const result= findMatched(this.value,cities);
    const html= result.map(place=>{
        return `
        <li>
         <span class="name">${place.city} ,${place.state}</span>
         <span class="pop">${place.population}</span>
         </li>
         `
     }).join('');
     suggestion.innerHTML=html;
}

search.addEventListener('change',displayMatch);
search.addEventListener('keyup',displayMatch);
