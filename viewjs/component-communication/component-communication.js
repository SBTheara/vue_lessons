Vue.component('coupon',{
    template: `
        <div>
            <input type="text" name="" id="" placeholder="Enter to alert text">  <button @click="click"></button>
        </div>
    `,
    data:{
    },
    method:{
        click(){
            this.$emit('applied')
        }
    }
});
new Vue({
    el: "#root",
    method:{
        click(){
            alert('Applied!')
        }
    }
});