import Tone from 'tone'

let reverb = new Tone.Reverb ( [ 5 ] )
let amSynth = new Tone.AMSynth({oscillator: {type: 'sawtooth'}, modulation : {type: 'square'}})
let fmSynth = new Tone.FMSynth({oscillator: {type: 'sawtooth'}, modulation : {type: 'square'}})
reverb.generate()
let limiter = new Tone.Limiter(-20);
let delay = new Tone.Delay ( 0 , 5 )

const state = {
    reverb,
    amSynth: amSynth.chain(reverb, delay, limiter, Tone.Master),
    polySynth: new Tone.PolySynth ( 4, Tone.Synth ).chain(reverb, delay, limiter, Tone.Master),
    fmSynth: fmSynth.chain(reverb, delay, limiter, Tone.Master),
    mixolydian: ["C#", "D", "E", "F#", "G", "A", "B"]

}



const getters = {
    amSynth: state => state.amSynth,
    polySynth: state => state.polySynth,
    fmSynth: state => state.fmSynth,
    mixolydian: state => state.mixolydian

}
export default {
    state,
    getters
}