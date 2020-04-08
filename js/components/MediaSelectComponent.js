export default {
    name: "media",

    props: [
        "currentuser",
        "decade"
    ],

    template: `
        <section>
            <h1>Media Select</h1>
            <h2>{{ currentuser.username }}</h2>
        </section>
    `,

}