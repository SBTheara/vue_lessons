Vue.component('message',{
    props: ['title','body'],
    data() {
        return {
            isVisible: true
        }
    },
    template:`
        <article class="message" v-show="isVisible">
            <div class="message-title">{{ title }} <button @click = "hide">X</button> </div>
            <div class="message-body">{{ body }}</div>
        </article>
    `,
    methods: {
        hide(){
            this.isVisible = false;
        }     
    }
});
new Vue({
    el: "#root"
})