// 전역 컴포넌트
Vue.component('todo-footer', {
    template : '<p>This is another global child Component</p>'
});

// 지역 컴포넌트
var cmp = {
	template: '<p>This is another local child component</p>'
};

var app = new Vue({
    el: '#app',
    data: {
        message: 'This is a parent component'
    },
    components : {
        'todo-list' : cmp
    }
});