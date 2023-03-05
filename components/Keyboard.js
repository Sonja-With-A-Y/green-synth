import Key from "./Key";

export default function Keyboard() {
  return(
    <div className="flex flex-wrap h-full w-full place-content-center">
      <Key note="C4" />
      <Key note="C#4" />
      <Key note="D4" />
      <Key note="D#4" />
      <Key note="E4" />
      <Key note="F4" />
      <Key note="F#4" />
      <Key note="G4" />
      <Key note="G#4" />
      <Key note="A4" />
      <Key note="A#4" />
      <Key note="B4" />
      <Key note="C5" />

    </div>
  )
}