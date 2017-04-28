import React from 'react'
import { connect } from 'react-redux'
// import { previewSound, stopSound, stopAllSounds, saveSound, loadSound } from '../actions'

const mapStateToProps = (state) => {
  return {
    weather: state.weather
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)