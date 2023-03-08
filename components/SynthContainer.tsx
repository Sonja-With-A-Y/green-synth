import { StateProvider } from "./SynthContext"
import Oscillator from "./Oscillator";
import Filter from "./Filter";
import Global from "./Global";
import LFO from "./LFO";
import Envelope from "./Envelope";
import Keyboard from "./Keyboard";

export default function SynthContainer() {
  return(
    <StateProvider>
      <div className="w-[800px] h-[600px] grid grid-cols-5 grid-rows-[30px_auto_auto_50px] gap-3 border-2
      border-green-600 bg-black p-3">

        <p className="row-start-1 row-span-1 col-span-full
        place-self-center text-xl text-green-600">Green Synth</p>
        
        <div className="row-start-2 row-span-1 col-start-1 col-span-1">
          <Oscillator /> 
        </div>

        <div className="row-start-2 row-span-1 col-start-2 col-span-1">
          <Filter />
        </div>

        <div className="row-start-2 row-span-1 col-start-3 col-span-3">
          <LFO />
        </div>
        
        <div className="row-start-3 row-span-4 col-start-1 col-span-4">
          <Envelope />
        </div>

        <div className="row-start-3 row-span-4 col-start-5 col-span-1">
          <Global />
        </div>
        
        <div className="row-span-1 col-start-1 col-span-5">
          <Keyboard />
        </div>

      </div>
    </StateProvider>
  )
}