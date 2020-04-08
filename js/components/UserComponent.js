export default {
    props: ['liveuser'],

    template: `
        <div class="col-sm-3 mx-auto">
            <div @click="navToUserHome()">
                <img :src="'images/user/' + liveuser.avatar">
                <h3>{{ liveuser.username }}</h3>
            </div>
        </div>
    `,

    created: function() {
        if (this.liveuser.avatar === null || this.liveuser.avater === "null") {
            this.liveuser.avatar = "temp_avatar";
        }
    },

    methods: {
        navToUserHome() {
            // debugger;

            //set user into local storage
            // localStorage.setItem("cachedUser", JSON.stringify(this.liveuser));

            // send this user to its home page, and pass the user object to the home page
            this.$router.push({ name: "home", params: { currentuser: this.liveuser }})
        }
    }
}