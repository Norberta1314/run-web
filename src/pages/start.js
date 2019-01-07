import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import * as actionCreators from '../store/actionCreators'
import settingImg from '../static/setting.jpg'
import gameMusicImg from '../static/gamemusic.jpg'
import backgroundMusicImg from '../static/backgroundmusic.jpg'
import controlImg from '../static/controllway.jpg'
import helpImg from '../static/help.jpg'
import otherImg from '../static/other.jpg'
import '../reset.css'
import '../index.css'

class Start extends Component {


  getSettingArea = () => {
    const {openSettingState, closeSetting, circle, changeCircle, circleOne, changeCircleOne} = this.props
    const {gameMusic, changeGameMusic, backgroundMusic, changeBackgroundMusic, controlWay, changeControlWay} = this.props;

    if ( openSettingState ) {
      return (
        <div onMouseLeave={ closeSetting } className='positionAbsolute'>
          <img className='settingM' src={ settingImg }/>
          <div onClick={ changeGameMusic } className='settingButton gameMusic'/>
          { gameMusic ?
            <div onMouseLeave={ changeGameMusic }>
              <img className='gameMusicM' src={ gameMusicImg }/>
              <div onClick={ changeCircle } className={ circle ? 'gameMusicCircleLeft' : 'gameMusicCircleRight' }/>
            </div> : ''
          }
          <div onClick={ changeBackgroundMusic } className='settingButton backgroundMusic'/>
          { backgroundMusic ?
            <div onMouseLeave={ changeBackgroundMusic }>
              <img className='backgroundMusicM' src={ backgroundMusicImg }/>
              <div onClick={ changeCircle } className={ circle ? 'circleOneLeft' : 'circleOneRight' }/>
              <div onClick={ changeCircleOne } className={ circleOne ? 'circleTwoLeft' : 'circleTwoRight' }/>
            </div> : ''
          }
          <div onClick={ changeControlWay } className='settingButton controlWay'/>
          {
            controlWay ?
              <div onMouseLeave={ changeControlWay }>
                <img className='controlWayM' src={ controlImg }/>
                <div onClick={ changeCircle } className={ circle ? 'circleThreeLeft' : 'circleThreeRight' }/>
              </div> : ''
          }
        </div>

      )
    }
  }

  render() {
    const {openSetting, help, changeHelp, other, changeOther} = this.props;
    console.log()

    return (
      <div className='startBody'>
        <Link to='/game' >
          <div className="startButton newGame"/>
        </Link>
        <div className="startButton continueGame"/>
        <div onClick={ changeHelp } className="startButton help"/>
        {
          help ?
            <div onMouseLeave={ changeHelp }>
              <img className='helpM' src={ helpImg }/>
            </div> : ''
        }
        <div onClick={ openSetting } className="startButton setting"/>
        { this.getSettingArea() }
        <div onClick={ changeOther } className="startButton other"/>
        {
          other ?
            <div onMouseLeave={ changeOther }>
              <img className='otherM' src={ otherImg }/>
            </div> : ''
        }
        <Link to='/begin'>
          <div className="startButton quit"/>
        </Link>
      </div>
    );
  }
}

const mapState = (state) => ({
  help: state.help,
  openSettingState: state.openSetting,
  circle: state.circle,
  circleOne: state.circleOne,
  gameMusic: state.gameMusic,
  backgroundMusic: state.backgroundMusic,
  controlWay: state.controlWay,
  other: state.other
})

const mapDispatch = (dispatch) => ({
  changeHelp() {
    dispatch(actionCreators.changeHelp())
  },
  openSetting() {
    dispatch(actionCreators.openSetting())
  },
  closeSetting() {
    dispatch(actionCreators.closeSetting())
  },
  changeCircle() {
    dispatch(actionCreators.changeCircle())
  },
  changeCircleOne() {
    dispatch(actionCreators.changeCircleOne())
  },
  changeGameMusic() {
    dispatch(actionCreators.changeGameMusic())
  },
  changeBackgroundMusic() {
    dispatch(actionCreators.changeBackgroundMusic())
  },
  changeControlWay() {
    dispatch(actionCreators.changeControlWay())
  },
  changeOther() {
    dispatch(actionCreators.changeOther())
  }
})

export default connect(mapState, mapDispatch)(Start)