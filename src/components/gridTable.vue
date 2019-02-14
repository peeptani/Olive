<template>
    <div>
        <div class="box-field" draggable="false">
            <div v-for="(col, index) in this.$store.getters.grid" :key="index">
                <div v-for="(item) in col"  :key="item.id">
                    <appBox :id="item.id" :column="item.column" :row="item.row" draggable="false" class="app-box"></appBox>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>

    import { mapGetters } from 'vuex';
    import Box from "./Box.vue"

    export default {
        computed: {
            ...mapGetters(['layoutGrid'])
        },
        components: {
            appBox: Box
        },
        name: "gridTable",
        beforeCreate() {
            this.$store.dispatch('makeGrid');
        },
        data() {
            return {
                rowindex: 0
            }
        },
        methods: {
        },
        /*selectCell(row, col) {
            this.grid[row].$set(col, true);
        },
        cellSelected(row, col) {
            return (this.grid[row][col] === true)
        }*/
    }
</script>

<style scoped>
    .selected {
        background-color: green;
    }
    .box-field {
        display: grid;
        -webkit-user-drag: none;
        grid-template-columns: repeat(50, 1fr);
    }
    .app-box {
        -webkit-user-drag: none;
    }
</style>