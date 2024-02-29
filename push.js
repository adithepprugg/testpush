var push = require('web-push')

// let vapidkeys = push.generateVAPIDKeys();
// console.log(vapidkeys);

let vapidkeys = {
    publicKey: 'BPmzgUrfOBIM9MJw75lE6wcGCcTMjgKTLZSmZf74fGUrEd5HRGxGypI-wH1jaThTMDSgu6Ijh9pbOCGWZEcNDCg',
    privateKey: 'hqTDA03H0NBbaQdo3efoTq2-aeGeNWXK5gpj_TXLpOA'
};

push.setVapidDetails('mailto:test@testcode.com', vapidkeys.publicKey, vapidkeys.privateKey)

let subscription = {};
push.setNotification(subscription, 'test message');

