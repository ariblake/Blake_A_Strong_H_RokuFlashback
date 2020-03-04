// Imports
import LoginComponent from "./components/LoginComponent.js";
import UsersComponent from "./components/UsersComponent.js";
import ContentMenuComponent from "./components/ContentMenuComponent.js";
import PlayerComponent from "./components/PlayerComponent.js";

(() => {
    
    let router = new VueRouter({
        // Routes
        routes: [
            { path: '/', redirect: { name: "login" } },
            { path: '/login', name: "login", component: LoginComponent },
            { path: '/users', name: "users", component: UsersComponent },
            { path: '/home', name: "dashboard", component: ContentMenuComponent },
            { path: '/player', name: "player", component: PlayerComponent },
        ]
    });

    const vm = new Vue({

        data: {
            authenticated: false,
            administrator: false,

            mockAccount: {
                username: "user",
                password: "password"
            },

            movies: [],
            user: [],
        },

        created: function () {
            
        },

        methods: {
            setAuthenticated(status, data) {
                this.authenticated = status;
                // handle implicit type coercion here (bad, part of JS)
                // turn our admin 1 or 0 back into a number
                this.administrator = parseInt(data.isadmin);
                this.user = data;
              },

              logout() {
                // delete local session
        
                // push user back to login page
                this.$router.push({ path: "/login" });
                this.authenticated = false;
                this.administrator = false;
              },

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

  // add some router security here
  // beforeEach runs every time we do a navigation event
//   router.beforeEach((to, from, next) => {
//     console.log('router guard fired');

//     // if the authenticated property is set to false, then push the user back to the login screen (cuz they're not logged in)
//     if(vm.authenticated == false) {
//       next("/login");
//     } else {
//       next();
//     }
//   })
})();