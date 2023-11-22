Vue.component('dbinput', {
    props: {
        data:'',
        isButtonDisabled:{
            type: Boolean,
            default: false
        },
        countdown: 30,
        initialTime: {
            type: Number,
            default: 3
        },
    },
    data(){
        return {
            timeRemaining: this.initialTime,
            clikeRemaining: 3
        }
    },
    template: `
        <div>
            <input placeholder="Enter the number only" type="text" :value="data" @keypress="validateNumber"/>
            <input :disabled="timeRemaining === 0" type="button" value="send" @click="startCountdown"/>
            <button :disabled="!(timeRemaining === 0) || isButtonDisabled" @click="reCountdown">resend</button> <h2>{{timeRemaining}}</h2>
        </div>
    `,
    methods: {
        validateNumber($event) {
            const keyPressed = String.fromCharCode($event.charCode);
            if (!/^[0-9+]$/.test(keyPressed)) {
                $event.preventDefault();
            }
        },
        startCountdown() {
            this.timer = setInterval(() => {
              if (this.timeRemaining > 0) {
                console.log(this.timeRemaining);
                this.timeRemaining--;
              } else {
                clearInterval(this.timer);
              }
            }, 1000);
        },
        reCountdown(){
            this.timeRemaining = 3;
            this.startCountdown();
            this.clikeRemaining--;
            if(this.clikeRemaining<=0){
                this.isButtonDisabled = true;
            }
        }
        
    },
    mounted(){
        this.startCountdown();
    }
});
new Vue({
    el: '#root',
});