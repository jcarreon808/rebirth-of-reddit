
(function(window){
  //namespacing App
  window.App = window.App || {};

  // map 'routes' to 'states'
  class Router {
    constructor(containerId){
      this.container = document.getElementById(containerId);
      console.log('this.container',this.container);
    }
    //takes in a 'route' and renders to the container
    navigate(route){
      let state = null;
      switch(route){
        case 'random':
          state = new App.states.Random();
          break;
        case 'myboard':
          state = new App.states.MyBoards();
          break;
        case 'getapp':
          state = new App.states.GetApp();
          break;
      }
      //wait for state to be rendered
      // then, append the element to the state
      state.rendered((element) => {
      this.container.innerHTML = '';
      this.container.appendChild(element);

      });
    }
  }

  window.App.Router = new Router('container');

}(window));