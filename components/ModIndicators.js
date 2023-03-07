import { useLFOModPaths, useLFOModPathsUpdate, useEnvModPaths, useEnvModPathsUpdate } from "./SynthContext"

export default function ModIndicators(props) {
  const modPaths = props.modPathId === "lfo" ? useLFOModPaths() : useEnvModPaths()
  const modPathsUpdate = props.modPathId === "lfo" ? useLFOModPathsUpdate() : useEnvModPathsUpdate()



  return(
    <div className="flex flex-col h-32 justify-evenly">

      <div className="flex items-center">
      <p className="text-xs text-green-600 mr-1">A</p>
      <div onClick={() => modPathsUpdate("attack")}
        className={`h-4 w-4 rounded-sm border border-green-600 ${modPaths["attack"] === true ? 'bg-green-600' : 'bg-black'}`} />
      </div>

      <div className="flex items-center">
      <p className="text-xs text-green-600 mr-1">F</p>
      <div onClick={() => modPathsUpdate("filter")}
        className={`h-4 w-4 border border-green-600 ${modPaths["filter"] === true ? 'bg-green-600' : 'bg-black'}`} />
      </div>

      <div className="flex items-center">
      <p className="text-xs text-green-600 mr-1">P</p>
      <div onClick={() => modPathsUpdate("pitch")}
        className={`h-4 w-4 border border-green-600 ${modPaths["pitch"] === true ? 'bg-green-600' : 'bg-black'}`} />
      </div>

    </div>
  )
}