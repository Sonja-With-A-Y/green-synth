import React, { useState, useContext } from "react";
import MultiProvider from "./MultiProvider";

const SelectedOsc = React.createContext<string | null>(null)
const SelectedOscUpdate = React.createContext<((waveform: string) => void) | null>(null)
const SelectedLFO = React.createContext<string | null>(null)
const SelectedLFOUpdate = React.createContext<((waveform: string) => void) | null>(null)
const FaderValues = React.createContext<number[] | null>(null)
const FaderValuesUpdate = React.createContext<((faderId: number, value: number) => void) | null>(null)
const LFOModPaths = React.createContext<{attack: boolean, filter: boolean, pitch: boolean} | null>(null)
const LFOModPathsUpdate = React.createContext<((modTypeId: "attack" | "filter" | "pitch") => void) | null>(null)
const EnvModPaths = React.createContext<{attack: boolean, filter: boolean, pitch: boolean} | null>(null)
const EnvModPathsUpdate = React.createContext<((modTypeId: "attack" | "filter" | "pitch") => void) | null>(null)

export function useSelectedOsc() {
  return useContext(SelectedOsc)
}

export function useSelectedOscUpdate() {
  const SelectedOscUpdateUntyped = useContext(SelectedOscUpdate)

  if (!SelectedOscUpdateUntyped) {
    throw new Error("Problem with osc update context")
  }

  return SelectedOscUpdateUntyped
}

export function useSelectedLFO() {
  return useContext(SelectedLFO)
}

export function useSelectedLFOUpdate() {
  const SelectedLFOUpdateUntyped = useContext(SelectedLFOUpdate)

  if (!SelectedLFOUpdateUntyped) {
    throw new Error("Problem with lfo update context")
  }

  return SelectedLFOUpdateUntyped
}

export function useFaderValues() {
  const FaderValuesUntyped = useContext(FaderValues)

  if (!FaderValuesUntyped) {
    throw new Error("Problem with fader values context")
  }

  return FaderValuesUntyped
}

export function useFaderValuesUpdate() {
  const FaderValuesUpdateUntyped = useContext(FaderValuesUpdate)

  if (!FaderValuesUpdateUntyped) {
    throw new Error("Problem with fader update context")
  }

  return FaderValuesUpdateUntyped
}

export function useLFOModPaths() {
  const LFOModPathsUntyped = useContext(LFOModPaths)

  if (!LFOModPathsUntyped) {
    throw new Error ("Problem with lfo mod paths context")
  }

  return LFOModPathsUntyped
}

export function useLFOModPathsUpdate() {
  const LFOModPathsUpdateUntyped = useContext(LFOModPathsUpdate)

  if (!LFOModPathsUpdateUntyped) {
    throw new Error("Problem with lfo mod paths update context")
  }

  return LFOModPathsUpdateUntyped
}

export function useEnvModPaths() {
  const EnvModPathsUntyped = useContext(EnvModPaths)

  if (!EnvModPathsUntyped) {
    throw new Error ("Problem with env mod paths context")
  }

  return EnvModPathsUntyped
}
export function useEnvModPathsUpdate() {
  const EnvModPathsUpdateUntyped = useContext(EnvModPathsUpdate)

  if (!EnvModPathsUpdateUntyped) {
    throw new Error("Problem with env mod paths update context")
  }

  return EnvModPathsUpdateUntyped
}

export function StateProvider({ children }: {children: any;}): JSX.Element {
  const [osc, setOsc] = useState("triangle")
  const [lfo, setLFO] = useState("sine")
  const [faders, setFaders] = useState([80, 60, 40, 75, 90, 30, 60, 40, 110, 50])
  const [LFOmodPaths, setLFOModPaths] = useState({
    attack: true,
    filter: false,
    pitch: false,
  })

  const [EnvmodPaths, setEnvModPaths] = useState({
    attack: true,
    filter: true,
    pitch: false,
  })

  const changeOsc = (waveform: string) => {
    setOsc(waveform);
  }
  const changeLFO = (waveform: string) => {
    setLFO(waveform);
  }
  const changeFader = (faderId: number, value: number) => {
    setFaders((prevState) => {
      prevState[faderId] = value
      return {
        ...prevState
      }
    });
  }
  const changeLFOModPaths = (modTypeId: "attack" | "filter" | "pitch") => {
    setLFOModPaths((prevState) => {
        return {...prevState, [modTypeId]: !(prevState[modTypeId])}
    });
  }
  const changeEnvModPaths = (modTypeId: "attack" | "filter" | "pitch") => {
    setEnvModPaths((prevState) => {
        return {...prevState, [modTypeId]: !(prevState[modTypeId])}
    });
  }

  return (
    <MultiProvider
      providers={[
        <SelectedOsc.Provider value={osc} />,
        <SelectedOscUpdate.Provider value={changeOsc} />,
        <SelectedLFO.Provider value={lfo} />,
        <SelectedLFOUpdate.Provider value={changeLFO} />,
        <FaderValues.Provider value={faders} />,
        <FaderValuesUpdate.Provider value={changeFader} />,
        <LFOModPaths.Provider value={LFOmodPaths} />,
        <LFOModPathsUpdate.Provider value={changeLFOModPaths} />,
        <EnvModPaths.Provider value={EnvmodPaths} />,
        <EnvModPathsUpdate.Provider value={changeEnvModPaths} />,
      ]}
    >
      {children}
    </MultiProvider>            
  )
}