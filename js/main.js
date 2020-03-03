// Imports
import ContentMenuComponent from "./components/ContentMenuComponent.js";
import PlayerComponent from "./components/PlayerComponent.js";

(() => {
    
    let router = new VueRouter({
        // Routes
        routes: [
            { path: '/', name: "dashboard", component: ContentMenuComponent },
            { path: '/player', name: "player", component: PlayerComponent },
        ]
    });

    const vm = new Vue({

        data: {
            movies: []
        },

        created: function () {
            console.log('created lifecycle hook fired, get movie data')
        },

        methods: {
            getMovieData() {
                // do a fetch call here and get the user from the DB
                const url = './includes/index.php?getMovie=1';
          
                fetch(url) // get data from the DB
                .then(res => res.json()) // translate JSON to plain object
                .then(data => { // use the plain data object (the user)
                  console.log(data); // log it to the console (testing)
          
                  // put our DB data into Vue
                  this.movies.settings = data[0];
                })
                .catch((error) => console.error(error))
              },
        },

        router: router
  }).$mount("#app");
})();