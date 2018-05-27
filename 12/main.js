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

Vue.component('tabs',{
    template:`
    <div>
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :class="{'is-active': tab.isActive}" @click="selectTab(tab)"><a :href="tab.href">{{tab.name}}</a></li>
            </ul>
        </div>
        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
    `,

    data(){
        return{
            tabs:[]
        };
    },
    created(){
        this.tabs = this.$children;
    },
    methods:{
        selectTab(selectedTab){
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
});

Vue.component('tab',{
    template:`
        <div v-show="isActive"><slot></slot></div>
    `,
    props: {
        name: {required: true},
        selected: {default: false}
    },
    data(){
        return{
            isActive: false
        }
    },
    mounted(){
        this.isActive = this.selected;
    },
    computed: {
        href(){
            return '#' + this.name.replace(/ /g, '-');
        }
    }
})

Vue.component('coupon',{
    template:`
        <input placeholder="Enter Your Coupon Code!!" @blur="onCouponApplied">
    `,
    methods:{
        onCouponApplied(){
            this.$emit('applied');
        }
    }
})

new Vue({
    el: '#root',
    data:{
        showModal: false
    },
    methods:{
        onCoupolApplied(){
            alert("It was Applied!");
        }
    }
});