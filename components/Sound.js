import * as Tone from 'tone'

/* Variables
note: string
oscType: string
lfoType: string

faderValues: number array
0: Cutoff
1: Resonance
2: LFO Rate
3: LFO Depth
4: Envelope Attack
5: Envelope Decay
6: Envelope Sustain
7: Envelope Release
8: Global Volume
9: Tempo

*/
// types are string, string, number
export default function soundNote(note, oscType, faderValues) {
  //Tone.Oscillator is overloaded, check link below to type it.
  //https://github.com/Tonejs/Tone.js/wiki/Using-Tone.js-with-React-React-Typescript-or-Vue
  const osc = new Tone.Oscillator(note, oscType, {volume: -6}).start();

  const env = new Tone.AmplitudeEnvelope({
    attack: faderValues[4]/127,
		decay: faderValues[5]/127,
		sustain: faderValues[6]/127,
		release: faderValues[7]/127
  });

  const filter = new Tone.Filter(faderValues[0]*30+20, "lowpass", -24);
  //const lfo = new Tone.LFO(5, 0.1, 1).start();
  const vol = new Tone.Volume(-48+faderValues[8]/127*48);
  osc.chain(env, filter, vol, Tone.Destination);

  env.triggerAttackRelease(0.5);

}
