export default {
    props: ['livemusic'],

    template: `
        <div class="col-xs-6 col-lg-4 mediaInfo">
            <div @click="navToAudioPlayer()">
                <img :src="'images/' + livemusic.cover">
                <h2 id="musicInfoTitle">{{ livemusic.itle }}</h2>
                <h3>{{ livemusic.year}}</h3>
                <p>{{ livemusic.artist }}</p>
                <p>{{ livemusic.runtime}}</p>
            </div>
        </div>
    `,

    methods: {
        navToAudioPlayer() {
            // debugger;
    
            //set user into local storage
            // localStorage.setItem("cachedUser", JSON.stringify(this.liveuser));
    
            // send this user to its home page, and pass the user object to the home page
            this.$router.push({ name: "audioplayer", params: { currentuser: this.liveuser, media: this.livemusic}})
        }
    }
}