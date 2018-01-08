$(document).ready( function(){

  //Escondiendo el botón back
  $('.js-back').hide();

  //Mostrando el texto en la lista de noticias
  function printNews () {
    $('#titleNews').append('nuevas recetas');
  }

  printNews();

  //La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
  renderHighlightedRecipes(recipesArray);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
  //Recorriendo el arreglo
  for (var i = 0; i< recipesArray.length; i++) {
    //comprobando condición
    if (recipesArray[i].highlighted == true) {
      renderRecipe(recipesArray[i]);
    }

  }

}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
  console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
  console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {

}


