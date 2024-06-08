const restaurants = [
    {
      id: "1",
      name: "Green Curry",
      location: "Mexico",
      rating: "3.5",
      eta: "25",
      tags: "American",
      image:
        "https://raw.githubusercontent.com/ankitsaxena21/Food-Ordering-App/master/assets/media/images/restaurant-1.webp",
      favourite: "false",
    },
    {
      id: "2",
      name: "Bangalore Spices",
      location: "Bangalore",
      rating: "4",
      eta: "20",
      tags: "French",
      image:
        "https://raw.githubusercontent.com/ankitsaxena21/Food-Ordering-App/master/assets/media/images/restaurant-2.webp",
      favourite: "false",
    },
    {
      id: "3",
      name: "Paterro’s Kitchen",
      location: "Paris",
      rating: "3",
      eta: "30",
      tags:  "Italian",
      image:
        "https://raw.githubusercontent.com/ankitsaxena21/Food-Ordering-App/master/assets/media/images/restaurant-3.webp",
      favourite: "false",
    },
    {
      id: "4",
      name: "Grassfed Grill",
      location: "Delhi",
      rating: "3.5",
      eta: "22",
      tags:  "American",
      image:
        "https://raw.githubusercontent.com/ankitsaxena21/Food-Ordering-App/master/assets/media/images/restaurant-4.webp",
      favourite: "false",
    },
    {
      id: "5",
      name: "Hunger Killers",
      location: "Delhi",
      rating: "4.5",
      eta: "18",
      tags:   "Indian",
      image:
        "https://raw.githubusercontent.com/ankitsaxena21/Food-Ordering-App/master/assets/media/images/restaurant-5.webp",
      favourite: "false",
    },
    {
      id: "6",
      name: "Indian Tadka",
      location: "New York",
      rating: "3.8",
      eta: "25",
      tags:  "French",
      image:
        "https://raw.githubusercontent.com/ankitsaxena21/Food-Ordering-App/master/assets/media/images/restaurant-6.webp",
      favourite: "false",
    },
    {
      id: "7",
      name: "Street Deli",
      location: "Delhi",
      rating: "3.4",
      eta: "33",
      tags: "Indian",
      image:
        "https://raw.githubusercontent.com/ankitsaxena21/Food-Ordering-App/master/assets/media/images/restaurant-7.webp",
      favourite: "false",
    },
    {
      id: "8",
      name: "Spicella Spanish Kitchen",
      location: "Madrid",
      rating: "2.8",
      eta: "35",
      tags: "American",    
      image:
        "https://raw.githubusercontent.com/ankitsaxena21/Food-Ordering-App/master/assets/media/images/restaurant-8.webp",
      favourite: "false",
    },
    {
      id: "9",
      name: "Sweet Escape",
      location: "Delhi",
      rating: "4.1",
      eta: "20",
      tags:   "Chinese", 
      image:
        "https://raw.githubusercontent.com/ankitsaxena21/Food-Ordering-App/master/assets/media/images/restaurant-9.webp",
      favourite: "false",
    },
    {
      id: "10",
      name: "Veganic Corner",
      location: "Delhi",
      rating: "3.7",
      eta: "25",
      tags:   "Chinese", 
      image:
        "https://raw.githubusercontent.com/ankitsaxena21/Food-Ordering-App/master/assets/media/images/restaurant-10.webp",
      favourite: "false",
    },
    {
      id: "11",
      name: "Island Grill",
      location: "Delhi",
      rating: "3.5",
      eta: "34",
      tags:  "French",
      image:
        "https://raw.githubusercontent.com/ankitsaxena21/Food-Ordering-App/master/assets/media/images/restaurant-11.webp",
      favourite: "false",
    },
    {
      id: "12",
      name: "Flavoroso",
      location: "Mumbai",
      rating: "3.5",
      eta: "30",
      tags:   "Chinese",  
      image:
        "https://raw.githubusercontent.com/ankitsaxena21/Food-Ordering-App/master/assets/media/images/restaurant-12.webp",
      favourite: "false",
    },
    {
      id: "13",
      name: "El Pirata",
      location: "Firenze",
      rating: "4.7",
      eta: "30",
      tags:   "Italian",  
      image:
        "https://raw.githubusercontent.com/ankitsaxena21/Food-Ordering-App/master/assets/media/images/restaurant-3.webp",
      favourite: "false",
    },
    {
      id: "14",
      name: "El Pirata Porch",
      location: "hawaii",
      rating: "3",
      eta: "35",
      tags: "American", 
      image:
        "https://raw.githubusercontent.com/ankitsaxena21/Food-Ordering-App/master/assets/media/images/restaurant-14.webp",
      favourite: "false",
    },
    {
      id: "15",
      name: "Sea Hunger",
      location: "Goa",
      rating: "4",
      eta: "40",
      tags:   "Italian",
      image:
        "https://raw.githubusercontent.com/ankitsaxena21/Food-Ordering-App/master/assets/media/images/restaurant-15.webp",
      favourite: "false",
    },
  ];




const searchbar=document.getElementById('search');
const allitems=document.getElementById('all');
const categoriesSection=document.getElementById('categories-section');


 

function displayitems(allrestaurants){

    const items=document.getElementById("items");
    items.innerHTML="";

    allrestaurants.forEach((restaurant)=>{

        const div=document.createElement("div");

        div.innerHTML=`
        <div class="items-details" id=${restaurant.id}>

            <div class="item-image"  >
                <img src=${restaurant.image} alt=${restaurant.image}/>
            </div>
            
            <h2 >${restaurant.name}</h2>
            <p class="location"> <span><i class="fa-solid fa-location-dot"></i></span>${restaurant.location}</p>
            <div class="time-location">
                <p class="rating"> <span><i class="fa-solid fa-star"></i></span>${restaurant.rating}</p>
                <p>${restaurant.eta} min</p>
            </div>
            <p class="tags">${restaurant.tags}</p>

        
       
        </div>

        `
        items.appendChild(div);
    })

}

let selectedCategory="all";
function searchAndfilter(){

    const searchQuery=searchbar.value.toLowerCase();
     
     

    let filteredRestaurants=restaurants.filter((restaurant)=>{
        const matchquery=selectedCategory==='all' ||  restaurant.tags.toLowerCase() === selectedCategory;
        const searcheditems=restaurant.name.toLowerCase().includes(searchQuery);
        return matchquery && searcheditems
    })

  

    displayitems(filteredRestaurants);
}

categoriesSection.addEventListener('click',(event)=>{
  if(event.target.tagName==='P'){
    selectedCategory=event.target.id;
    console.log(event.target.tagName);
    searchAndfilter();
  }
})

searchbar.addEventListener("input",searchAndfilter);
 

(()=>{
    displayitems(restaurants);
})();