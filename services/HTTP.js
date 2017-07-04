const config = require('config')
const HTTPService = require('engined-http').Service;

const Service = HTTPService({
	port: config.get('server').port
});

module.exports = class extends Service {

	async setupCORS() {
		return { origin: '*' };
	}

	async setupBodyParser() {
		return {
			jsonLimit: '50mb',
			textLimit: '50mb'
		};
	}

	async listening() {
		console.log('server starting on port ' + config.get('server').port);
	}
};
