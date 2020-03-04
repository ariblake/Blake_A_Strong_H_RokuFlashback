import UserComponent from "./UserComponent.js";

export default {
    template: `
        <div class="row">
            <div class="col-12">
                <h1 class="user-message">{{ message }}</h1>
                <div class="row">
                    <user v-for="user in userList" :liveuser="user"></user>
                </div>
            </div>
        </div>
    `,

    data() {
        return {
            message: "Who wants to Flashback?",
            userList: []
        }
    },

    created: function() {
        // this will fire when the component gets built
        this.fetchAllUsers();
    },

    methods: {
        fetchAllUsers() {
            let url = `./includes/index.php?getUsers=true`;

            fetch(url)
            .then(res => res.json())
            .then(data => (this.userList = data))
            .catch((err) => {console.error(err)})
        }
    },

    components: {
        user: UserComponent,
    }
}