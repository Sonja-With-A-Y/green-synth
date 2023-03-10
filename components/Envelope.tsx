import Fader from "./Fader";
import ModIndicators from "./ModIndicators";

export default function Envelope() {
  return(
    <div className="flex flex-wrap h-full w-full rounded-sm justify-evenly items-center border border-green-600 p-1
                    ">
      <p className="w-full h-auto text-center self-start justify-center text-green-600">Envelope</p>

      <div className="flex flex-wrap h-full content-center justify-between w-full">
        <div className="h-[160px] w-[300px] border border-green-600 mx-2" />
        <Fader parameter="ATTACK" faderId={4} />
        <Fader parameter="DECAY" faderId={5} />
        <Fader parameter="SUSTAIN" faderId={6} />
        <Fader parameter="RELEASE" faderId={7} />
        <ModIndicators modPathId="env" />
      </div>

      </div>
  )
}