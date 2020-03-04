export default {
    props: ['livetv'],

    template: `
        <div class="col-xs-6 col-lg-4" id="tvInfo">
        <router-link to="/player">
            <img :src="'images/' + livetv.tv_cover">
            <h2 id="movieInfoTitle">{{ livetv.tv_title }}</h2>
            <h3>{{ livetv.tv_year}}</h3>
            <p>{{ livetv.tv_description }}</p>
            <p>{{ livetv.tv_runtime}}</p>
            </router-link>
        </div>
    `
}