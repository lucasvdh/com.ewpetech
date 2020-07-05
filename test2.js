"use strict"

const Connection = require('./lib/connection');
const DeviceManager = require('./lib/device_manager');

let networkAddress = '192.168.2.58',
    deviceId = 'f4911ecd4735',
    statusKeys = [
        'Pow', 'Mod', 'TemUn', 'SetTem', 'TemRec', 'WdSpd', 'Air',
        'Blo', 'Health', 'SwhSlp', 'Lig', 'SwingLfRig', 'SwUpDn',
        'Quiet', 'Tur', 'SvSt'
    ],
    payload = {
        cols: statusKeys,
        mac: deviceId,
        t: 'status'
    },
    deviceManager = new DeviceManager(networkAddress);


deviceManager.on('device_bound', (id, device) => {
    console.log('device', id, device);

    deviceManager.getDeviceStatus(id).then((status) => {
        console.log('status',status);

        deviceManager.setDeviceState(id, {"Pow": 0, "SetTem": 24}).then((result) => {
            console.log('set result', result);
        })
    });

});

// const response = connection.sendRequest('192.168.2.58', device.port, device.key, payload);
// const deviceStatus = response.cols.reduce((acc, key, index) => ({
//     ...acc,
//     [key]: response.dat[index]
// }), {});
//
// console.log(deviceStatus);
