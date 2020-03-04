export default {
    props: ['liveuser'],

    template: `
        <div class="col-sm-3">
            <router-link to="/home">
                <img :src="'images/' + liveuser.avatar">
                <h3>{{ liveuser.uname }}</h3>
            </router-link>
        </div>
    `
}