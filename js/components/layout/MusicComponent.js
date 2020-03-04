export default {
    props: ['livemusic'],

    template: `
        <div class="col-xs-6 col-lg-4" id="musicInfo">
        <router-link to="/player">
            <img :src="'images/' + livemusic.music_cover">
            <h2 id="musicInfoTitle">{{ livemusic.music_title }}</h2>
            <h3>{{ livemusic.music_year}}</h3>
            <p>{{ livemusic.music_artist }}</p>
            <p>{{ livemusic.music_runtime}}</p>
            </router-link>
        </div>
    `
}