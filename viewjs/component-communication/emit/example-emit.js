Vue.component('textinput', {
    template: `
        <div>
            <input type="text">
            <button @click="onClickShow">Show</button>
        </div>
    `,
    data:{
        message: "Tehara"
    },
    methods: {
        onClickShow() {
            this.$emit('is-show');
        }
    }
});
new Vue({
    el: "#root",
    data: {
        isDisplay: false,
    },
    methods: {
        onClickShow() {
            this.isDisplay = !this.isDisplay;
        },
    }
});