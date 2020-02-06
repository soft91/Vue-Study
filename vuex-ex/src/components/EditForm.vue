<template>
    <div>
        <input v-model="message">
    </div>
</template>

<script>
export default {
    name: 'EditForm',
    computed: {
        // 하나의 산출 속성에서 입출력을 하면 간단함.
        message: {
            get() { return this.$store.getters.message },
            set(value) { this.$store.dispatch('doUpdate', value) }
        }
    }
}
</script>