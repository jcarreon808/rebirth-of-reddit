(function (window){

  window.App = window.App || {};

   class Random {
    constructor (){
      this.ready = null;

      App.utils.Get('https://www.reddit.com/r/memes.json',(data)=>{
        const randomData = JSON.parse(data);

        this.randomAuthor1 = randomData.data.children[1].data.author;
          this.randomTitle1 = randomData.data.children[1].data.title;
            this.randomPic1 = randomData.data.children[0].data.thumbnail;
        this.randomAuthor2 = randomData.data.children[2].data.author;
          this.randomTitle2 = randomData.data.children[2].data.title;
            this.randomPic2 = randomData.data.children[1].data.thumbnail;
        this.randomAuthor3 = randomData.data.children[3].data.author;
          this.randomTitle3 = randomData.data.children[3].data.title;
           this.randomPic3 = randomData.data.children[2].data.thumbnail;
        this.randomAuthor4 = randomData.data.children[4].data.author;
          this.randomTitle4 = randomData.data.children[4].data.title;
            this.randomPic4 = randomData.data.children[3].data.thumbnail;

        this.render(this.ready);
      });

    }
    rendered(callback){
      this.ready = callback;
    }
    render(readyFunc){
      const view = document.createElement('div');
      const list = document.createElement('ul');

      let first = document.querySelector('#first');
      first.innerHTML = this.randomAuthor1;
      let firstTitle = document.createElement('div');
      firstTitle.innerHTML = this.randomTitle1;
      first.appendChild(firstTitle);
      let firstPic = document.createElement('IMG');
      firstPic.src = this.randomPic1;
      first.appendChild(firstPic);

      let second = document.querySelector('#second');
      second.innerHTML = this.randomAutor2;
      let secondTitle = document.createElement('div');
      secondTitle.innerHTML = this.randomTitle2;
      second.appendChild(secondTitle);
        let secondPic = document.createElement('IMG');
      secondPic.src = this.randomPic2;
      second.appendChild(secondPic);

      let third = document.querySelector('#third');
      third.innerHTML = this.randomAuthor3;
      let thirdTitle = document.createElement('div');
      thirdTitle.innerHTML = this.randomTitle3;
      third.appendChild(thirdTitle);
        let thirdPic = document.createElement('IMG');
      thirdPic.src = this.randomPic3;
      third.appendChild(thirdPic);

      let fourth = document.querySelector('#fourth');
      fourth.innerHTML = this.randomAuthor4;
      let fourthTitle = document.createElement('div');
      fourthTitle.innerHTML = this.randomTitle4;
      fourth.appendChild(fourthTitle);
        let fourthPic = document.createElement('IMG');
      fourthPic.src = this.randomPic4;
      fourth.appendChild(fourthPic);

      view.appendChild(list);
      readyFunc(view);
    }
   }

window.App.states = {
   Random
  };




}(window));