import * as Tone from 'tone'

export default function soundNote(note, oscType, faderValues) {

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
