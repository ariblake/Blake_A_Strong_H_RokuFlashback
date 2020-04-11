export default {
    template: `
        <div class="container-fluid" id="loginSection">
            <div class="col-12">
                <p>Welcome to Flashback by Roku - your all-in-one streaming platform for the decades.</p>
                <h1>Login</h1>
                <form>
                    <div class="form-group">
                        <label class="sr-only" for="inlineFormInputName">Username</label>
                        <input v-model="input.username" type="text" class="form-control-lg" id="inlineFormInputName" placeholder="username" required>
                    </div>

                    <div class="form-group">
                        <label class="sr-only" for="inlineFormPassword">Password</label>
                        <input v-model="input.password" type="password" class="form-control-lg" id="inlineFormPassword" placeholder="password" required>
                    </div>

                    <button v-on:click.prevent="login()" type="submit" class="btn btn-outline-primary">Sign In</button>
                </form>            
            </div>
        </div>
     `,

    data() {
        return {
            input: {
                username: "",
                password: ""
            },

        }
    },

    methods: {
        login() {
            //console.log(this.$parent.mockAccount.username);
            //debugger;
            if (this.input.username !="" && this.input.password !="") {
                // use the FormData object to collect and send out params
                let formData = new FormData();
                
                // this is appending these to the url so we can do something with them
                formData.append("username", this.input.username);
                formData.append("password", this.input.password);

                // hit this url and pass those paramaters through
                let url = `./admin/admin_login.php`;

                fetch(url, {
                    method: "POST",
                    body: formData
                })
                .then(res => res.json())
                .then(data => {
                    if (typeof data != "object") {
                        console.warn(data);
                        alert("authentication failed, please try again"); //change this to something else
                    } else {
                        // tell the app that we have a successful login
                        // and store the user object that we retrieved

                        // true below means that authentication worked
                        // data is the user we retrieved from the DB
                        this.$emit("authenticated", true, data);

                        // push the user to the users page
                        // this is like a redirect
                        this.$router.replace({ name: "users" });
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            } else {
                console.error("Please enter a username and password");
            }
        }
    }
}