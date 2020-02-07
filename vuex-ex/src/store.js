import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// store: 애플리케이션 안에 있는 가상의 데이터베이스 처럼 정의.
const store = new Vuex.Store({
    // state: 스토어에서 관리하고 있는 상태를 나타내며, 컴포넌트로 이야기하면 data와 같다.
    // mutations 이외의 장소에서는 변경하면 안됨!
    state: {
        massage: 'init message'
    },
    // getters: 스테이트를 추출하기 위한 산출 데이터, 컴포넌트로 이야기하면 computed와 methods의 중간 기능.
    getters: {
        // 단순하게 상태 리턴하기
        massage(state){
            return state.massage;
        }
        // 리스트 요소들의 price 속성을 기반으로 최댓값 찾기
    },
    // mutations: state를 변경할 수 있는 방법. 컴포넌트로 이야기하면 methods와 같다.
    // 매개변수(state: 선언한 state, payload: 커밋에서 전달된 매개변수)
    mutations: {
        // 메세지를 변경하는 뮤테이션
        setMessage(state, payload){
            state.massage = payload.massage;
        }
    },
    // actions: 비동기 처리를 포함할 수 있는 메서드. 데이터를 가공하거나 비동기 처리 후 결과를 mutation으로 커밋.
    actions: {
        // 메세지 변경 처리
        doUpdate({commit}, message){
            commit('setMessage', { message })
        }
    }
})

export default store;