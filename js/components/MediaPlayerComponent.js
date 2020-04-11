export default {
    name: "mediaplayer",

    props: ['media', 'currentuser'],

    template: `
        <section class="container-fluid mediaPlayer">
            <h2>Watching: {{ media.title }}</h2>
            <div class="row playerSection justify-content-center">
                <video class="col-xs-12 col-lg-12" controls autoplay :src="'video/' + media.source"></video>
            </div>
            <div class="row reviewSection justify-content-center" >
                <div class="reviewForm col-xs-12 col-lg-6">
                    <form<!--action="admin/admin_comment.php" method="post"-->
                        <h2>Reviews</h2>
                        <input name="media" class="form-control-plaintext row" readonly id="media" :placeholder="media.title"></input>
                        <input name="uname" class="form-control row" type="text" id="name" placeholder="Username"></input>
                        <input name="comment" class="form-control row" type="text" id="comment" placeholder="Comment"></input>
                        <input name="rating" class="form-control row" type="number" min="1" mmax="5" id="rating" placeholder="Rating">/5</input>
                        <button name="submit" type="submit" class="btn btn-outline-primary">Submit</button>
                        <div class="fb-share-button btn" data-href="http://localhost/Blake_A_Strong_H_RokuFlashback/#/mediaplayer" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%2FBlake_A_Strong_H_RokuFlashback%2F%23%2Fmediaplayer&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
                        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" target="_blank" class="twitter-share-button btn" data-size="large" data-url="http://localhost/Blake_A_Strong_H_RokuFlashback/#/mediaplayer" data-show-count="false">Tweet</a>
                    </form>
                </div>
                <div id="ratings" class="col-xs-12 col-lg-6">
                    <h2>Others</h2>
                </div>
            <div>
        </section>
    `,
}