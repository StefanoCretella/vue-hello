new Vue({
    el: '#app',
    data: {
      message: 'Ciao, questo è un messaggio di VueJs!',
      imageUrl: 'img/logo.png' 
    },
    template: `
      <div>
        <h1>{{ message }}</h1>
        <img :src="imageUrl" alt="Logo">
      </div>
    `
  });
