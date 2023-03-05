import { useModPaths, useModPathsUpdate } from "./SynthContext"

export default function ModIndicators(props) {
  const modPaths = useModPaths()
  const modPathsUpdate = useModPathsUpdate()
  const modPathId = props.modPathId

  return(
    <div className="flex flex-col h-32 justify-evenly">

      <div className="flex items-center">
      <p className="text-xs text-green-600 mr-1">A</p>
      <div onClick={ () => modPathsUpdate(modPathId, 0)}
        className={`h-4 w-4 rounded-sm border border-green-600 ${modPaths[modPathId][0] === 1 ? 'bg-green-600' : 'bg-black'}`} />
      </div>

      <div className="flex items-center">
      <p className="text-xs text-green-600 mr-1">F</p>
      <div onClick={ () => modPathsUpdate(modPathId, 1)}
        className={`h-4 w-4 border border-green-600 ${modPaths[modPathId][1] === 1 ? 'bg-green-600' : 'bg-black'}`} />
      </div>

      <div className="flex items-center">
      <p className="text-xs text-green-600 mr-1">P</p>
      <div onClick={  () => modPathsUpdate(modPathId, 2)}
        className={`h-4 w-4 border border-green-600 ${modPaths[modPathId][2] === 1 ? 'bg-green-600' : 'bg-black'}`} />
      </div>

    </div>
  )
}