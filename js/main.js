// Imports
import LoginComponent from "./components/LoginComponent.js";
import UsersComponent from "./components/UsersComponent.js";
import UserHomeComponent from "./components/UserHomeComponent.js";
import MediaPlayerComponent from "./components/MediaPlayerComponent.js";

(() => {
    
    let router = new VueRouter({
        // Routes
        routes: [
            { path: '/', redirect: { name: "login" } },
            { path: '/login', name: "login", component: LoginComponent },
            { path: '/users', name: "users", component: UsersComponent },
            { path: '/userhome', name: "home", component: UserHomeComponent, props: true },
            { path: '/mediaplayer', name: "mediaplayer", component: MediaPlayerComponent, props: true },
        ]
    });

    const vm = new Vue({
        data: {
            authenticated: false,
            administrator: false,
            user: [],
        },

        methods: {
            setAuthenticated(status, data) {
                this.authenticated = status;
                // handle implicit type coercion here (bad, part of JS)
                // turn our admin 1 or 0 back into a number
                this.administrator = parseInt(data.isadmin);
                this.user = data;
            },

            switchUser() {
              this.$router.push({ name: "users",})
            },

            logout() {
              // delete local session
        
              // push user back to login page
              this.$router.push({ name: "login" });
              this.authenticated = false;
              this.administrator = false;
                
              if (localStorage.getItem("cachedUser")) {
                localStorage.removeItem("cachedUser");
              }
        
              if (localStorage.getItem("cachedVideo")) {
                localStorage.removeItem("cachedVideo");
              }
            }
        },

        created: function () {
          if (localStorage.getItem("cachedUser")) {
            let user = JSON.parse(localStorage.getItem("cachedUser"));
    
            this.authenticated = true;
    
            this.$router.push({ name: "home", params: { currentuser: user }});
          } else {
            this.$router.push({ name: "login" });
          }
        },

        router: router
  }).$mount("#app");

  // add some router security here
  // beforeEach runs every time we do a navigation event
    router.beforeEach((to, from, next) => {
      // console.log('router guard fired');

      // if the authenticated property is set to false, then push the user back to the login screen (cuz they're not logged in)
      if(vm.authenticated == false) {
        next("/login");
      } else {
        next();
      }
    });
})();