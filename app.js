const config = require('config');
const { Manager, Context } = require('engined');

// Application Info
const appName = config.appName;

const main = async () => {

	let ctx = new Context();

	try {
		// Initializing engines
		let serviceManager = new Manager(ctx, { verbose: true });
		await serviceManager.loadServices(require('./services'));
		await serviceManager.startAll();

		// Force to stop instance
		process.on('SIGTERM', async () => {
			console.log('Stopping instance');
			await serviceManager.stopAll();
		});
	} catch(e) {
		console.error(e);
	}
};

console.log('Starting', appName);
main();
