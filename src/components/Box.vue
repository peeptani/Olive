<template>
    <div class="effect-box"
         :class="{ 'activated' : this.$store.getters.grid[`column${column}`][`box${id}`].state }"
         @mousedown="enableActivation() "
         @mouseup="disableActivation()"
         @mouseover="activate()"
         @mouseout="deActivate()"
         draggable="false"

    >

    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import math from 'mathjs'

    export default {
        computed: {
            ...mapGetters(['layoutGrid', 'activation', 'gridAudio'])
        },
        name: "Box",
        props: ['id', 'column', 'row'],
        methods: {
            activate() {
                if (this.$store.getters.activation) {
                    let payload = {id: this.id, column: this.column}
                    this.$store.dispatch('boxActivate', payload);
                    //this.$store.getters.amSynth.triggerAttackRelease(this.getNote(0), "16n", );
                    this.$store.getters.fmSynth.triggerAttackRelease(this.getNote(0), "16n", );
                    //this.$store.getters.polySynth.triggerAttackRelease(this.getNote(0), "4n", );

                }
            },
            deActivate() {
                let payload = {id: this.id, column: this.column}
                //this.$store.dispatch('boxDeactivate', payload);
                setTimeout(() => {
                    this.$store.dispatch('boxDeactivate', payload)
                }, 500);
            },
            enableActivation() {
                this.$store.dispatch('enableActivation')

            },
            disableActivation() {
                this.$store.dispatch('disableActivation')
            },
            getNote(step) {
                let note = this.$store.getters.mixolydian[(this.row+step)%7]
                let octave = Math.floor(this.row/7+1)
                return `${note}${octave}`
            }
        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped>
    .effect-box {
        min-height: 4vh;
        min-width: 2vh;
        padding: 0;
        background-color: black;

    }
    .activated {
        background-color: olive;
    }
</style>