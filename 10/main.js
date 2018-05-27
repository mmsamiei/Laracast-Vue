Vue.component('task-list',{
    template: '<div><task v-for="task in tasks">{{ task.task }}</task><div>',

    data(){
        return{
            tasks:[
                { task: 'Ask Faezeh for marriage', complete: true },
                { task: 'Find a job', complete: false },
                { task: 'Get money', complete: false }
            ]
        }
    }
});

Vue.component('task',{
    template: '<li><slot></slot></li>'
});

Vue.component('message',{
    props: ['title', 'body'],
    data(){
        return{
          isVisible: true  
        };
    },
    template: `
        <div class="message" v-show="isVisible">
            <div class="message-header">
                {{title}}
                <span class="close" @click="hideModal">x</span>
            </div>
            <div class="message-body">
                {{body}}
            </div>
        </div>
    `,
    methods:{
        hideModal(){
            this.isVisible = false
        }
    }
})

Vue.component('modal',{
    template:`
    <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <p>
                        <slot></slot>
                    </p>
                </div>
            </div>
            <button class="modal-close is-large" @click="$emit('close')" aria-label="close"></button>
    </div>
    `
});


new Vue({
    el: '#root',
    data:{
        showModal: false
    } 
});