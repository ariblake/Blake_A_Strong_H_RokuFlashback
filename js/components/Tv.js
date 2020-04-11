export default {
    props: ['livetv'],

    template: `
        <div class="col-xs-6 col-lg-4 mediaInfo tvInfo">
            <div @click="navToMediaPlayer()">
                <div class="mediaImage">
                    <img :src="'images/' + livetv.cover" class="mediaThumb">
                    <img src="images/play.svg" class="playImg">
                </div>
                <h3 id="tvInfoTitle">{{ livetv.title }}</h3>
                <h3 class="year">{{ livetv.year }}</h3>
                <p>{{ livetv.description }}</p>
                <p class="runtime">{{ livetv.runtime }}</p>
            </div>
        </div>
    `,
    
    methods: {
        navToMediaPlayer() {
            // debugger;
    
            //set user into local storage
            // localStorage.setItem("cachedUser", JSON.stringify(this.liveuser));
    
            // send this user to its home page, and pass the user object to the home page
            this.$router.push({ name: "mediaplayer", params: { currentuser: this.liveuser, media: this.livetv}})
        }
    }

    
}