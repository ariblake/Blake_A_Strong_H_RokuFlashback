export default {
    props: ['livemovie'],

    template: `
        <div class="col-xs-6 col-lg-4 mediaInfo">
            <div @click="navToMediaPlayer()">
                <img :src="'images/' + livemovie.cover">
                <h2 id="movieInfoTitle">{{ livemovie.title }}</h2>
                <h3>{{ livemovie.year}}</h3>
                <p>{{ livemovie.description }}</p>
                <p>{{ livemovie.runtime}}</p>
            </div>
        </div>
    `,

    methods: {
        navToMediaPlayer() {
            // debugger;
    
            //set user into local storage
            // localStorage.setItem("cachedUser", JSON.stringify(this.liveuser));
    
            // send this user to its home page, and pass the user object to the home page
            this.$router.push({ name: "mediaplayer", params: { currentuser: this.liveuser, media: this.livemovie}})
        }
    }
}