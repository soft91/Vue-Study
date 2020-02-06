import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// store: 애플리케이션 안에 있는 가상의 데이터베이스 처럼 정의.
const store = new Vuex.Store({
    // state: 스토어에서 관리하고 있는 상태를 나타내며, 컴포넌트로 이야기하면 data와 같다.
    // mutations 이외의 장소에서는 변경하면 안됨!
    state: {
        count: 0
    },
    // mutations: state를 변경할 수 있는 방법. 컴포넌트로 이야기하면 methods와 같다.
    // 매개변수(state: 선언한 state, payload: 커밋에서 전달된 매개변수)
    mutations: {
        increment(state){
            state.count++
        }
    },
    // getters: 스테이트를 추출하기 위한 산출 데이터, 컴포넌트로 이야기하면 computed와 methods의 중간 기능.
    getters: {
        // 단순하게 상태 리턴하기
        count(state, getters, rootState, rootGetter){
            return state.count;
        },
        // 리스트 요소들의 price 속성을 기반으로 최댓값 찾기
    },
    // actions: 비동기 처리를 포함할 수 있는 메서드. 데이터를 가공하거나 비동기 처리 후 결과를 mutation으로 커밋.
    actions: {

    }
})

export default store;