import React from 'react';
import { assert, expect } from 'chai';
import loadCards from './loadCards';

describe('loadCards', () => {
  it('should be a function', () => {
    assert.isFunction(loadCards);
  });
  xit('should generate a number between min and max', () => {
    // Create fake array of past searches in order to test this.
    const n = loadCards(searchedArray)
    assert.deepEqual(n, [payload, payload, payload]);
  });
});


const payload = {
  "coord": {
    "lon": -0.13,
    "lat": 51.51
  },
  "weather": [
    {
      "id": 500,
      "main": "Rain",
      "description": "light rain",
      "icon": "10n"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 280.15,
    "pressure": 1016,
    "humidity": 87,
    "temp_min": 279.15,
    "temp_max": 281.15
  },
  "visibility": 10000,
  "wind": {
    "speed": 3.1,
    "deg": 310
  },
  "clouds": {
    "all": 68
  },
  "dt": 1493340600,
  "sys": {
    "type": 1,
    "id": 5187,
    "message": 0.1111,
    "country": "GB",
    "sunrise": 1493354269,
    "sunset": 1493407153
  },
  "id": 2643743,
  "name": "London",
  "cod": 200
}

const searchedArray = [payload, payload, payload]
