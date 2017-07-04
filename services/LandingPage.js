const config = require('config');
const Router = require('koa-router')
const { RouterService } = require('engined-http');

// Create a new router
const router = Router();

router.get('/', async (ctx, next) => {

	ctx.body = 'Hello! ' + config.appName;
});

module.exports = class extends RouterService() {

	async setupRoutes() {
		return router;
	}
};
