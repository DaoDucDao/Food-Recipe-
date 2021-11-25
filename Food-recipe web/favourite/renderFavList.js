let htmlFav = '';
favListItems = document.getElementById('meal-fav-items');
getRep = document.getElementById('get-rep');
favNum = document.getElementById('favNumbers')

let favRecipe = localStorage.getItem('favRecipe');  
favRecipe = JSON.parse(favRecipe);
console.log(favRecipe);

favNum.innerHTML= favRecipe.length;

for (let i = 0; i < favRecipe.length; i++) {     // push the element in the array into Favourite html
    htmlFav += `
        <div class = "meal-item" id = "${favRecipe[i].idMeal}" >
            <div class = "meal-img">
                <img src = "${favRecipe[i].strMealThumb}" alt = "food">
            </div>
            <div class = "meal-name">
                <h3>${favRecipe[i].strMeal}</h3>
                <button onclick="mealRecipeModal()"  class = "recipe-btn" id="get-rep">Get Recipe</button>
                <button type="button" class ="remove-fav-btn" id = "${favRecipe[i].idMeal}">Remove from favourite</button>
            </div>
        </div>
    `;
}

function mealRecipeModal(meal){
    console.log(meal);
    meal = meal[0];
    let html = `
        <h2 class = "recipe-title">${meal.strMeal}</h2>
        <p class = "recipe-category">${meal.strCategory}</p>
        <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class = "recipe-meal-img">
            <img src = "${meal.strMealThumb}" alt = "">
        </div>
        <div class = "recipe-link">
            <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
        </div>
    `;
    mealDetailsContent.innerHTML = html;
}



favListItems.innerHTML = htmlFav;


// Remove button
if (favRecipe){     // remove the recipe from the list if there is any list
    removeEventforRemoveBtn();
}
function removeEventforRemoveBtn() {
    const removeFav = document.querySelectorAll('.remove-fav-btn');   //select all the button

    removeFav.forEach(removeFavBtn => {
        removeFavBtn.addEventListener('click', removeFromFavList);    // set event for the remove button
    });
}

function removeFromFavList(e) {
    console.log(e);
    const node = document.getElementById(e.target.id);          //create the node for the target
    favListItems.removeChild(node);                             //remove the the recipe from the UI
    const idx = favRecipe.findIndex(recipe => recipe.idMeal === e.target.id);  //find the index of the recipe in the array
    favRecipe.splice(idx, 1);                                   // remove the recipe from the array
    localStorage.setItem("favRecipe", JSON.stringify(favRecipe));   // set the curent array into the local storage
}
