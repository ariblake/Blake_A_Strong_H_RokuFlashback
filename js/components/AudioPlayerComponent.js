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
                    <div class="fb-share-button btn row" data-href="http://localhost/Blake_A_Strong_H_RokuFlashback/#/mediaplayer" data-layout="button" data-size="large">
                        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%2FBlake_A_Strong_H_RokuFlashback%2F%23%2Fmediaplayer&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">
                            <img src="images/facebook.svg" alt="share on Facebook">
                            <h3>Facebook</h3>
                        </a>
                    </div>
                    <div class="twitter-share-button btn row">
                        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" target="_blank" data-size="large" data-url="http://localhost/Blake_A_Strong_H_RokuFlashback/#/mediaplayer" data-show-count="false">
                            <img src="images/twitter.svg" alt="share on Twitter">
                            <h3>Twitter</h3>
                        </a>
                    </div>
                </div>

                <div class="col-xs-12 col-lg-6 ratings">
                    <h2>Other</h2>
                    <a class="btn btn-primary"><img src="images/heart.svg"><h3>Love</h3></a>
                    <a class="btn btn-primary"><img src="images/like.svg"><h3>Like</h3></a>
                    <a class="btn btn-primary"><img src="images/dislike.svg"><h3>Dislike</h3></a>
                </div>

            </div>
        </section>
    `,

}