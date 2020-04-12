export default {
    name: "audioplayer",

    props: ['media'],

    template: `
        <section class="container-fluid mediaPlayer">
            <h2>Listening to: {{ media.title }}</h2>
            <div class="container playerSection text-center">
                <img :src="'images/' + media.cover">
                <h3>{{ media.title}} by {{ media.artist }}</h3>
                <audio class="col-12" controls autoplay :src="'audio/' + media.source"></audio>
            </div>

            <div class="row reviewSection justify-content-center">
                <div class="socialMedia col-xs-12 col-lg-6">
                    <h2>Share</h2>
                    <div class="fb-share-button btn row">
                        <a target="_blank" href="https://www.facebook.com/">
                            <img src="images/facebook.svg" alt="Share on Facebook">
                            <h3>Facebook</h3>
                        </a>
                    </div>
                    <div class="instagram-share-button btn row">
                        <a href="https://www.instagram.com/?hl=en" target="_blank">
                            <img src="images/instagram.svg" alt="Share on Instagram">
                            <h3>Instagram</h3>
                        </a>
                    </div>
                    <div class="twitter-share-button btn row">
                        <a href="https://twitter.com/home?lang=en" target="_blank">
                            <img src="images/twitter.svg" alt="Share on Twitter">
                            <h3>Twitter</h3>
                        </a>
                    </div>
                </div>

                <div class="col-xs-12 col-lg-2 ratings">
                    <h2>Other</h2>
                    <a class="btn btn-primary"><img src="images/heart.svg" style="height: 20px;"><h3>Love</h3></a>
                    <a class="btn btn-primary"><img src="images/like.svg" style="height: 20px;"><h3>Like</h3></a>
                    <a class="btn btn-primary"><img src="images/dislike.svg" style="height: 20px;"><h3>Dislike</h3></a>
                </div>

            </div>
        </section>
    `,

}