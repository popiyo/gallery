var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://mongoadmin:12qwaszx3EDC@mdbc0.kcksx.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://mongoadmin:12qwaszx3EDC@mdbc0.kcksx.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://mongoadmin:12qwaszx3EDC@mdbc0.kcksx.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}

module.exports = config;
