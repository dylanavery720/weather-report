import React from 'react';
import { mount, shallow } from 'enzyme';
// import { expect, assert } from 'chai';
import sinon from 'sinon'
import * as actions from './index'

describe('actions', () => {
  it('should create an action to display a current forecast', () => {
    const payload = { city: 'Denver', forecast: 'Good' }
    const expectedAction = {
      type: 'DISPLAY_FORECAST',
      payload: { city: 'Denver', forecast: 'Good' },
    }
    expect(actions.displayWeatherForecast(payload)).toEqual(expectedAction)
  })

    it('should create an action to archive past searches', () => {
    const payload = { city: 'London', forecast: 'Bad' }
    const expectedAction = {
      type: 'DISPLAY_HISTORY',
      payload: { city: 'London', forecast: 'Bad' },
    }
    expect(actions.searchHistory(payload)).toEqual(expectedAction)
  })
})

