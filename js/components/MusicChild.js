export default {
    props: ['livemusic'],

    template: `
        <div class="col-xs-12 col-lg-6 mediaInfo musicInfo">
            <div @click="navToAudioPlayer()">
                <div class="mediaImage">
                    <img :src="'images/' + livemusic.cover" class="mediaThumb">
                    <img src="images/play.svg" class="playImg">
                </div>
                <h3 id="musicInfoTitle">{{ livemusic.title }}</h3>
                <h3 class="year">{{ livemusic.year }}</h3>
                <p>{{ livemusic.artist }}</p>
                <p class="runtime">{{ livemusic.runtime }}</p>
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