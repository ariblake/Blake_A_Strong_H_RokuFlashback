import UserComponent from "./UserComponent.js";

export default {
    template: `
        <section class="container-fluid" id="userSelect">
        <div class="row">
            <div class="col-12">
                <h1 class="user-message">{{ message }}</h1>
                <div class="row" id="userCon">
                    <user v-for="(user, index) in userList" :liveuser="user" :key="index" />
                </div>
            </div>
        </div>
        </section>
    `,

    created: function() {
        // this will fire when the component gets built
        this.fetchAllUsers();
    },

    data() {
        return {
            message: "Who wants to Flashback?",
            userList: []
        }
    },

    
    methods: {
        fetchAllUsers() {
            let url = './admin/admin_getusers.php?allusers=true';

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