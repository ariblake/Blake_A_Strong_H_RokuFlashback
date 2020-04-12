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
                    </form>
                </div>
                <div id="ratings" class="col-xs-12 col-lg-6">
                    <h2>Others</h2>
                    <p class="othersRatings">John Bennett: Great video and fav actors! 5/5</p>
                    <p class="othersRatings">Joe Kormendi: Watched this twice today. Good movie. 4/5</p>
                    <p class="othersRatings">John Bennett: I LOVE THE CONTENT ON ROKU! 5/5</p>
                </div>
            <div>
        </section>
    `,
}