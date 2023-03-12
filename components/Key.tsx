import React from "react"
import soundNote from "./Sound"

import { useSelectedOsc, useFaderValues } from "./SynthContext"

export default function Key(props: {note: string}) {
  const oscType = useSelectedOsc()
  const faderValues = useFaderValues()


  return(
    <div>
      <div onClick={ () => soundNote(props.note, oscType, faderValues) } className="h-8 w-4 items-middle border border-green-600 m-1">
      </div>
    </div>
  )
}
//<p className="text-green-600 text-center align-middle">{props.note}</p>