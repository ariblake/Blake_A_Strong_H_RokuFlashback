export default {
    name: "mediaplayer",

    props: ['media'],

    template: `
        <section class="container">
            <div class="row">
                <h2>Watching: {{ media.title }}</h2>
                <router-link :to="{ name: 'home', params: { currentuser: this.liveuser }}">Back to Home</router-link>
                <video class="col-12" controls autoplay :src="'video/' + media.source"></video>
            </div>
            <div class="row">
                <h2>Reviews</h2>
            </div>
        </section>
    `
}