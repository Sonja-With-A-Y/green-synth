import React, { useState, useContext } from "react";

const SelectedOsc = React.createContext()
const SelectedOscUpdate = React.createContext()
const SelectedLFO = React.createContext()
const SelectedLFOUpdate = React.createContext()
const FaderValues = React.createContext()
const FaderValuesUpdate = React.createContext()
const ModPaths = React.createContext()
const ModPathsUpdate = React.createContext()

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

export function useModPaths() {
  return useContext(ModPaths)
}
export function useModPathsUpdate() {
  return useContext(ModPathsUpdate)
}

export function StateProvider({ children }) {
  const [osc, setOsc] = useState("triangle")
  const [lfo, setLFO] = useState("sine")
  const [faders, setFaders] = useState([80, 60, 40, 75, 90, 30, 60, 40, 110, 50])
  const [modPaths, setModPaths] = useState([[0, 1, 0], [1, 0, 0]])

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
  const changeModPaths = (modPathId, modTypeId) => {
    setModPaths((prevState) => {
        if (prevState[modPathId][modTypeId] === 0) {
          prevState[modPathId][modTypeId] = 1
        } else {
          prevState[modPathId][modTypeId] = 0
        }
      return {
        ...prevState
      }
    });
  } 

  
  return (
    <SelectedOsc.Provider value={osc}>
      <SelectedOscUpdate.Provider value={changeOSC}>
        <SelectedLFO.Provider value={lfo}>
          <SelectedLFOUpdate.Provider value={changeLFO}>
            <FaderValues.Provider value={faders}>
              <FaderValuesUpdate.Provider value={changeFader}>
                <ModPaths.Provider value={modPaths}>
                  <ModPathsUpdate.Provider value={changeModPaths}>
                    {children}
                  </ModPathsUpdate.Provider>
                </ModPaths.Provider>
              </FaderValuesUpdate.Provider>
            </FaderValues.Provider>
          </SelectedLFOUpdate.Provider>
        </SelectedLFO.Provider>
      </SelectedOscUpdate.Provider>
    </SelectedOsc.Provider>
  )
}