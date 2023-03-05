import { useFaderValues, useFaderValuesUpdate } from "./SynthContext"


export default function Fader(props) {
  const faders = useFaderValues()
  const faderUpdate = useFaderValuesUpdate()

  return(
    <div className="flex justify-end content-center h-32 w-10 p-1">
      <p className="flex [writing-mode:vertical-rl] [text-orientation:upright] [letter-spacing:0.5em] my-auto text-xs text-green-600">
        {props.parameter}
      </p>
      <div className="flex justify-center h-32 w-5 border border-green-600 p-1">

        <input onChange={(event) => faderUpdate(props.faderId, event.target.value)}
          type="range" min="0" max="127" step="1" value={faders[props.faderId]} 
          className="[-webkit-appearance:none] origin-bottom h-0.5 w-28 bg-green-600
          -rotate-90 my-auto slider-thumb" />

      </div>
    </div>
  )
}