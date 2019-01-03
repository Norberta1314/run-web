import * as actionTypes from './actionTypes'

const defaultState = {
  help: false,
  openSetting: false,
  circle: false,
  circleOne:false,
  gameMusic: false,
  backgroundMusic: false,
  controlWay: false,
  other: false
}

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))

  //reducer可是接收state，但不能修改state
  switch (action.type) {
    case actionTypes.OPEN_SETTING:
      newState.openSetting = true
      return newState
    case actionTypes.CLOSE_SETTING:
      newState.openSetting = false
      return newState
    case actionTypes.CHANGE_CIRCLE:
      if (newState.circle)
        newState.circle = false
      else
        newState.circle = true
      return newState
    case actionTypes.CHANGE_GAME_MUSIC:
      if (newState.gameMusic)
        newState.gameMusic = false
      else
        newState.gameMusic = true
      return newState
    case actionTypes.CHANGE_BACKGROUND_MUSIC:
      if (newState.backgroundMusic)
        newState.backgroundMusic = false
      else
        newState.backgroundMusic = true
      return newState
    case actionTypes.CHANGE_CIRCLE_ONE:
      if (newState.circleOne)
        newState.circleOne = false
      else
        newState.circleOne = true
      return newState
    case actionTypes.CHANGE_CONTROL_WAY:
      if (newState.controlWay)
        newState.controlWay = false
      else
        newState.controlWay = true
      return newState
    case actionTypes.CHANGE_HELP:
      if (newState.help)
        newState.help = false
      else
        newState.help = true
      return newState
    case actionTypes.CHANGE_OTHER:
      console.log("123");
      if (newState.other)
        newState.other = false
      else
        newState.other = true
      return newState
  }
  return state
}