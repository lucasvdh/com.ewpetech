"use strict"

const DeviceManager = require('./lib/device_manager');

// const {encrypt, decrypt, defaultKey} = require('./lib/encryptor');


// console.log(decrypt('E7tvuPbwppr8O5alYYBgi7LwZ/bmg4f8hP8LyhjNxp9hLHC32TI9KCwvcoe3Lzrp2Nz/AqGRMwbYg2D3s54FKA=='));
// console.log(decrypt('T2tGu9JTsZPLMhoPO/mBclFGrb4nkisXz6usYH5VUzRzkEQfdDwGvD7dLOO0SGBpOst6YnVi0dH1uC30cssBWYzD1k6jjxiwE2rMrTg7Xnk='));

let networkAddress = '192.168.2.58',
    pollInterval = 5000,
    deviceId = 'f4911ecd4735';

const deviceManager = new DeviceManager(networkAddress, pollInterval);

const getDeviceStatus = async (deviceId) => {
    const deviceStatus = await deviceManager.getDeviceStatus(deviceId);
    console.log(deviceStatus);
}

getDeviceStatus(deviceId).then(r => {
    console.log(r);
}).catch(e => {
    console.error(e);
});
