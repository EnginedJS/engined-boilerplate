const config = require('config');
const { RouterService } = require('engined-http');

module.exports = class extends RouterService() {

	async setupRoutes() {

		const router = this.createRouter();

		router.get('/', async (ctx, next) => {

			ctx.body = 'Hello! ' + config.appName;
		});

		return router;
	}
};
