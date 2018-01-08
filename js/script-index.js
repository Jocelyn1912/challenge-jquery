$(document).ready( function(){

  //quitando el botón back
  $('.js-back').remove();

  //Mostrando nuevas recetas
  printNews();

  //La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
  renderHighlightedRecipes(recipesArray);

});

//Función que muestra el texto "nuevas recetas" en la lista de noticias
function printNews () {
  $('#titleNews').append('Nuevas recetas');
}


/*
* Función que se encarga de pintar TODAS las recetas que tengan
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
  //Recorriendo el arreglo
  for (var i = 0; i< recipesArray.length; i++) {
    //comprobando condición
    if (recipesArray[i].highlighted == true) {
      //Pasando datos que cumplieron con la condición
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

    $('.list-recipes').append('<a class="item-recipe" href="#">'+'<span class="attribution">'+'<span class="title-recipe"> Título de la receta: ' + recipe.title + '</span>'+'<span class="metadata-recipe">'+'<span class="author-recipe"> Autor: ' + recipe.source.name + '</span>'+'<span class="bookmarks-recipe">'+'<span class="icon-bookmark">'+'</span>'+'</span>'+'</span>'+'</span>'+'<img src="img/recipes/320x350/' + recipe.name + '.jpg" />'+'</a>');
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


