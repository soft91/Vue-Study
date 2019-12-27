new Vue({
    el: '#app',
    data : {
        message: 'message',
        anotherMessage : 'anotherMessage',
        uid : 20,
        flag : true,
        arrays : ['1','2','3']
    },
    methods: {
        clickBtn : function(){
            return alert('test');
        }
    }
})