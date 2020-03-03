export default {
    props: ['livemovie'],

    template: `
        <div class="col-xs-6 col-lg-3" id="movieInfo">
            <img :src="'images/' + livemovie.movies_cover">
            <h2>{{ livemovie.movies_title }}</h2>
            <p>{{ livemovie.movies_description }}</p>
        </div>
    `
}