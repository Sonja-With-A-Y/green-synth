import { useSelectedLFO, useSelectedLFOUpdate } from "./SynthContext"

import Fader from "./Fader";
import ModIndicators from "./ModIndicators";

export default function LFO() {
  const lfo = useSelectedLFO()
  const lfoUpdate = useSelectedLFOUpdate()

  return(
    <div className="flex flex-wrap justify-between h-full w-full rounded-sm border border-green-600 p-1">
        <p className="w-full text-center justify-center text-green-600">LFO</p>

        <div className="flex flex-col justify-between h-32 w-1/3 p-1">
          <div onClick={ () => lfoUpdate("SINE") } className={`flex justify-center text-xs border border-green-600 h-auto w-auto text-green-600 ${lfo === 'SINE' ? 'bg-green-900' : 'bg-black'}`}>SINE</div>
          <div onClick={ () => lfoUpdate("SQUARE") } className={`flex justify-center text-xs border border-green-600 h-auto w-auto text-green-600 ${lfo === 'SQUARE' ? 'bg-green-900' : 'bg-black'}`}>SQUARE</div>
          <div onClick={ () => lfoUpdate("TRIANGLE") } className={`flex justify-center text-xs border border-green-600 h-auto w-auto text-green-600 ${lfo === 'TRIANGLE' ? 'bg-green-900' : 'bg-black'}`}>TRIANGLE</div>
          <div onClick={ () => lfoUpdate("SAW") } className={`flex justify-center text-xs border border-green-600 h-auto w-auto text-green-600 ${lfo === 'SAW' ? 'bg-green-900' : 'bg-black'}`}>SAW</div>
          <div onClick={ () => lfoUpdate("NOISE") } className={`flex justify-center text-xs border border-green-600 h-auto w-auto text-green-600 ${lfo === 'NOISE' ? 'bg-green-900' : 'bg-black'}`}>NOISE</div>      
        </div>

        <Fader parameter="RATE" faderId="2" />
        <Fader parameter="DEPTH" faderId="3" />
        <ModIndicators modPathId="lfo" />

      </div>
  )
}