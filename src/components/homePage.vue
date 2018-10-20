<template>
    <div>
        This is a homepage
        <div>{{getExample}}</div>
    </div>
</template>

<style>
</style>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapGetters(['getExample'])
        }
    }
</script>