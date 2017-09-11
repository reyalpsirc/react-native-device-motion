'use strict'

import { DeviceEventEmitter, NativeModules } from 'react-native';
var {
  RNTDeviceMotion
} = NativeModules;

function startDeviceMotionUpdates(updateInterval, callback) {
  RNTDeviceMotion.startDeviceMotionUpdatesWithUpdateInterval(updateInterval || 1000/10);
  DeviceEventEmitter.addListener('onDeviceMotionUpdate', callback);
};

function isDeviceMotionAvailable(callback) {
  RNTDeviceMotion.isDeviceMotionAvailable(callback)
};

function stopDeviceMotionUpdates () {
  RNTDeviceMotion.stopDeviceMotionUpdates();
  DeviceEventEmitter.removeAllListeners('onDeviceMotionUpdate');
}

var DeviceMotion = {
  startDeviceMotionUpdates,
  isDeviceMotionAvailable,
  stopDeviceMotionUpdates
};

module.exports = DeviceMotion;