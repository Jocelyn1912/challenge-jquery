$(document).ready( function(){

  //quitando el botón back
  $('.js-back').remove();

  //Mostrando nuevas recetas
  printNews();

  //La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
  renderHighlightedRecipes(recipesArray);

  //Llamando función renderActivities y pasandole como parametro la variable activitiesArray.
  renderActivities(activitiesArray);

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
  console.log('Recipes: ', recipesArray);
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
  //Creando HTML y mostrando estructura con contenido en el div class=list-recipes
  $('.list-recipes').append('<a class="item-recipe" href="#">'+'<span class="attribution">'+'<span class="title-recipe"> Título de la receta: ' + recipe.title + '</span>'+'<span class="metadata-recipe">'+'<span class="author-recipe"> Autor: ' + recipe.source.name + '</span>'+'<span class="bookmarks-recipe">'+'<span class="icon-bookmark">'+'</span>'+'</span>'+'</span>'+'</span>'+'<img src="img/recipes/320x350/' + recipe.name + '.jpg" />'+'</a>');
}

/*
* Función que se encarga de pintar todas las actividades
*/


function renderActivities(activitiesArray) {
  console.log('Activities: ', activitiesArray);
  //Recorriendo el array activities
  for(var i = 0; i < activitiesArray.length; i++) {
    //Pasando la función el objeto
    renderActivity(activitiesArray[i]);
    // Si el arreglo tiene más de cero objetos debe ocultar el div class="wrapper-message"
  } if (activitiesArray.length > 0){
    $('.wrapper-message').hide();
  }
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {

}


