import { useSelectedOsc, useSelectedOscUpdate } from "./SynthContext"


export default function Oscillator() {
  const osc = useSelectedOsc()
  const oscUpdate = useSelectedOscUpdate()

  return(
      <div className="flex flex-col justify-between h-full w-full rounded-sm p-2 border border-green-600">
        <p className="text-center justify-center text-green-600">Oscillator</p>
        <div onClick={ () => oscUpdate("sine") } className={`flex justify-center text-xs border border-green-600 h-auto w-auto text-green-600 ${osc === 'sine' ? 'bg-green-900' : 'bg-black'}`}>SINE</div>
        <div onClick={ () => oscUpdate("square") } className={`flex justify-center text-xs border border-green-600 h-auto w-auto text-green-600 ${osc === 'square' ? 'bg-green-900' : 'bg-black'}`}>SQUARE</div>
        <div onClick={ () => oscUpdate("triangle") } className={`flex justify-center text-xs border border-green-600 h-auto w-auto text-green-600 ${osc === 'triangle' ? 'bg-green-900' : 'bg-black'}`}>TRIANGLE</div>
        <div onClick={ () => oscUpdate("sawtooth") } className={`flex justify-center text-xs border border-green-600 h-auto w-auto text-green-600 ${osc === 'sawtooth' ? 'bg-green-900' : 'bg-black'}`}>SAW</div>
        <div onClick={ () => oscUpdate("NOISE") } className={`flex justify-center text-xs border border-green-600 h-auto w-auto text-green-600 ${osc === 'NOISE' ? 'bg-green-900' : 'bg-black'}`}>NOISE</div>
      </div>
  )
}