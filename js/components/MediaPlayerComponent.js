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
            <form id="reviewForm" <!--action="admin/admin_comment.php" method="post"-->
                <h2>Reviews</h2>
                <input name="media" class="form-control" readonly id="media" :placeholder="media.title"></input>
                <input name="uname" class="form-control" type="text" id="name" placeholder="Username"></input>
                <input name="comment" class="form-control" type="text" id="comment" placeholder="Comment"></input>
                <input name="rating" class="form-control" type="number" min="1" mmax="5" id="rating" placeholder="Rating"></input>
                <button name="submit" type="submit" class="btn btn-outline-primary">Submit</button>
                <div class="fb-share-button" data-href="http://localhost/Blake_A_Strong_H_RokuFlashback/#/mediaplayer" data-layout="button" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%2FBlake_A_Strong_H_RokuFlashback%2F%23%2Fmediaplayer&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" target="_blank" class="twitter-share-button" data-size="large" data-url="http://localhost/Blake_A_Strong_H_RokuFlashback/#/mediaplayer" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </form>
            <div id="ratings">
                <h2>Others</h2>
            </div>
        </section>
    `,

}