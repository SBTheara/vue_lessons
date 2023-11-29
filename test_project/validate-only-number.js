Vue.component('db-input', {
    props: {
    },
    vuetify: new Vuetify(),
    data(){
        return {

        }
    },
    template: `
        <v-text-field
        solo
        label="Append"
        append-icon="mdi-account"
        ></v-text-field>
        
    `,  
});

Vue.component('db-main',{
    vuetify: new Vuetify(),
    template: `
    <div class="appbar-container">
        <v-app-bar
            style="display: flex; justify-content: space-between;"
            app
        >
            <slot></slot>
        </v-app-bar>
    </div>
    `,
});

Vue.component('db-wireframes',{
    vuetify: new Vuetify(),
    data(){
        return{
            items: [
            { header: 'Today' },
            {
            avatar: 'https://images.carandbike.com/cms/BMW_S_1000_RR_Winglet_4_cb2f77e0e7.jpg',
            title: 'Brunch this weekend?',
            subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
            },
            { divider: true, inset: true },
            {
            avatar: 'https://images.carandbike.com/cms/BMW_S_1000_RR_Winglet_4_cb2f77e0e7.jpg',
            title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
            subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
            },
            { divider: true, inset: true },
            {
            avatar: 'https://images.carandbike.com/cms/BMW_S_1000_RR_Winglet_4_cb2f77e0e7.jpg',
            title: 'Oui oui',
            subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
            },
            { divider: true, inset: true },
            {
            avatar: 'https://images.carandbike.com/cms/BMW_S_1000_RR_Winglet_4_cb2f77e0e7.jpg',
            title: 'Birthday gift',
            subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
            },
            { divider: true, inset: true },
            {
            avatar: 'https://images.carandbike.com/cms/BMW_S_1000_RR_Winglet_4_cb2f77e0e7.jpg',
            title: 'Recipe to try',
            subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
            },
      ],}
    },
    template: `
        <v-app id="inspire">
        <v-app-bar
        app
        shrink-on-scroll
        >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Application</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        </v-app-bar>

        <v-main>
        <v-container>
            <v-row>
            <template v-for="(item, index) in items">
                <v-col
                    v-for="n in items"
                    :key="n"
                    cols="4"
                >
                    <v-card>
                    <v-img
                    :src=item.avatar
                    height="125"
                    contain
                    class="grey darken-4"
                    ></v-img>
                    <v-card-title class="text-h6">
                    height with contain
                    </v-card-title>
                </v-card>
                </v-col>
                </template>
            </v-row>
        </v-container>
        </v-main>
    </v-app>
    `
});


