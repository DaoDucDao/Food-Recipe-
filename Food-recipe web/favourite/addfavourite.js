let favRecipe = localStorage.getItem('favRecipe');    //get the favRecipe array from the local storage
favRecipe = JSON.parse(favRecipe);         // turn it into the array because it's still a string type

const getFavlistItems = favListItems;
function addEventForAddToFavBtn() {      //create an event for the add favourite button
    const Favlist = document.getElementById('action_add_favourite');
    const getFav = document.querySelectorAll('#add-to-Fav')

    getFav.forEach(addFavBtn => {     //for each recipe, we created a add to favourite button
        addFavBtn.addEventListener('click', addtoFavList);      
    });

    function addtoFavList(e) {
        e.preventDefault();
            let mealItem = e.target.parentElement.parentElement;    
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)        //get the data mealItem API
                .then(response => response.json())
                .then(data => {
                    console.log(data.meals); // check what is the data meal
                    const arrId = favRecipe.map(recipe => recipe.idMeal);    //find the index of the id in the array
                    if (data.meals.length > 0 && !arrId.includes(data.meals[0].id)) {  //check the condition if there's any data or the data include the id
                        favRecipe.push(data.meals[0]);
                        localStorage.setItem("favRecipe", JSON.stringify(favRecipe));     //put the array into local storage
                        console.log(favRecipe); //check the array 
                    }
                });
    }
}



