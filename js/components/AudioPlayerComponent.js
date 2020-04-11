export default {
    name: "audioplayer",

    props: ['media'],

    template: `
        <section class="container">
            <div class="row">
                <h2>Listening to: {{ media.title }}</h2>
                <router-link :to="{ name: 'home', params: { currentuser: this.currentuser }}">Back to Home</router-link>
                <img :src="'images/' + media.cover">
                <h3>{{ media.title}} by {{ media.artist }}</h3>
                <audio class="col-12" controls autoplay :src="'audio/' + media.source"></audio>
            </div>
            <form id="reviewForm" <!--action="admin/admin_comment.php" method="post"-->
                <h2>Share</h2>
                <div class="fb-share-button" data-href="http://localhost/Blake_A_Strong_H_RokuFlashback/#/mediaplayer" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%2FBlake_A_Strong_H_RokuFlashback%2F%23%2Fmediaplayer&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" target="_blank" class="twitter-share-button" data-size="large" data-url="http://localhost/Blake_A_Strong_H_RokuFlashback/#/mediaplayer" data-show-count="false">Tweet</a>
            </form>
            <div id="ratings">
                <h2>Other</h2>
            </div>
        </section>
    `,

}