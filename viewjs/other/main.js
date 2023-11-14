Vue.component('task-list', {
    template: `<div>
        <task v-for="task in tasks"> {{task.task}} </task>
    </div>`,
    data(){
        return {
            tasks: [
                {task: "Go to the mountain", complete: true},
                {task: "Go to the beach", complete: true},
                {task: "Go to the heaven", complete: false},
            ]
        }
    } 
});
Vue.component('task',{
    template: `<li><slot></slot></li>`
})
new Vue({
    el: '#root'
});