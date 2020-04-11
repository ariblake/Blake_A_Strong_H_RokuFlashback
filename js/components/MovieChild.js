export default {
    props: ['livemovie'],

    template: `
        <div>
            <div @click="navToMediaPlayer()">
                <div class="mediaImage col-xs-6">
                    <img :src="'images/' + livemovie.cover" class="mediaThumb">
                    <img src="images/play.svg" class="playImg">
                </div>
                <div class="col-xs-6">
                <h3 id="movieInfoTitle">{{ livemovie.title }}</h3>
                <h3 class="year">{{ livemovie.year }}</h3>
                <p>{{ livemovie.description }}</p>
                <p class="runtime">{{ livemovie.runtime }}</p>
                </div>
            </div>
        </div>
    `,

    methods: {
        navToMediaPlayer() {
            // debugger;
    
            //set user into local storage
            // localStorage.setItem("cachedUser", JSON.stringify(this.liveuser));
    
            // send this user to its home page, and pass the user object to the home page
            this.$router.push({ name: "mediaplayer", params: { currentuser: this.currentuser, media: this.livemovie}})
        }
    }
}