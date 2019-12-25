// 전역 컴포넌트
Vue.component('sibling-component', {
    props: ['propsdata'],
    template: '<p>{{ propsdata }}</p>'
  });

Vue.component('child-component', {
    props: ['propsdata'],
    template: '<p>{{ propsdata }}</p>'
});

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue! passed from Parnet Component',
        anotherMessage: 'Hello Vue.js! paased from Parnet Component'
    }
})