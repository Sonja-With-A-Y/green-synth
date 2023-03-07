import React, { useState, useContext } from "react";

const SelectedOsc = React.createContext()
const SelectedOscUpdate = React.createContext()
const SelectedLFO = React.createContext()
const SelectedLFOUpdate = React.createContext()
const FaderValues = React.createContext()
const FaderValuesUpdate = React.createContext()
const LFOModPaths = React.createContext()
const LFOModPathsUpdate = React.createContext()
const EnvModPaths = React.createContext()
const EnvModPathsUpdate = React.createContext()

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

export function StateProvider({ children }) {
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

  const changeOSC = (waveform) => {
    setOsc(waveform);
  }
  const changeLFO = (waveform) => {
    setLFO(waveform);
  }
  const changeFader = (faderId, value) => {
    setFaders((prevState) => {
      prevState[faderId] = value
      return {
        ...prevState
      }
    });
  }
  const changeLFOModPaths = (modTypeId) => {
    setLFOModPaths((prevState) => {
        return {...prevState, [modTypeId]: !(prevState[modTypeId])}
    });
  }
  const changeEnvModPaths = (modTypeId) => {
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