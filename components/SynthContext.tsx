import React, { useState, useContext, ReactNode } from "react";

const SelectedOsc = React.createContext<string | null>(null)
const SelectedOscUpdate = React.createContext<((waveform: string) => void) | null>(null)
const SelectedLFO = React.createContext<string | null>(null)
const SelectedLFOUpdate = React.createContext<((waveform: string) => void) | null>(null)
const FaderValues = React.createContext<number[] | null>(null)
const FaderValuesUpdate = React.createContext<((faderId: number, value: number) => void) | null>(null)
const LFOModPaths = React.createContext<object | null>(null)
const LFOModPathsUpdate = React.createContext<((modTypeId: "attack" | "filter" | "pitch") => void) | null>(null)
const EnvModPaths = React.createContext<object | null>(null)
const EnvModPathsUpdate = React.createContext<((modTypeId: "attack" | "filter" | "pitch") => void) | null>(null)

export function useSelectedOsc() {
  return useContext(SelectedOsc)
}
export function useSelectedOscUpdate() {
  return useContext(SelectedOscUpdate)
}

export function useSelectedLFO() {
  return useContext(SelectedLFO)
}
export function useSelectedLFOUpdate() {
  return useContext(SelectedLFOUpdate)
}

export function useFaderValues() {
  return useContext(FaderValues)
}
export function useFaderValuesUpdate() {
  return useContext(FaderValuesUpdate)
}

export function useLFOModPaths() {
  return useContext(LFOModPaths)
}
export function useLFOModPathsUpdate() {
  return useContext(LFOModPathsUpdate)
}

export function useEnvModPaths() {
  return useContext(EnvModPaths)
}
export function useEnvModPathsUpdate() {
  return useContext(EnvModPathsUpdate)
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

  const changeOSC = (waveform: string) => {
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
    <SelectedOsc.Provider value={osc}>
      <SelectedOscUpdate.Provider value={changeOSC}>
        <SelectedLFO.Provider value={lfo}>
          <SelectedLFOUpdate.Provider value={changeLFO}>
            <FaderValues.Provider value={faders}>
              <FaderValuesUpdate.Provider value={changeFader}>
                <LFOModPaths.Provider value={LFOmodPaths}>
                  <LFOModPathsUpdate.Provider value={changeLFOModPaths}>
                    <EnvModPaths.Provider value={EnvmodPaths}>
                      <EnvModPathsUpdate.Provider value={changeEnvModPaths}>
                        {children}
                      </EnvModPathsUpdate.Provider>
                    </EnvModPaths.Provider>
                  </LFOModPathsUpdate.Provider>
                </LFOModPaths.Provider>
              </FaderValuesUpdate.Provider>
            </FaderValues.Provider>
          </SelectedLFOUpdate.Provider>
        </SelectedLFO.Provider>
      </SelectedOscUpdate.Provider>
    </SelectedOsc.Provider>
  )
}