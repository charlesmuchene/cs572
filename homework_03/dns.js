const dns = require('dns');

const hostname = 'www.mum.edu';

function hostnameCallback() {
	return (error, addresses) => {
		if (error) console.log(error);
		else console.log(addresses[0]);
	};
}


// Using callback directly
dns.resolve(hostname, (error, addresses) => {
	if (error) console.log(error);
	else console.log(addresses[0]);
});


// Using promise object
const { promisify } = require('util');

const dnsResolvePromised = promisify(dns.resolve);
dnsResolvePromised(hostname).then((addresses) => console.log(addresses[0])).catch((error) => console.log(error));


// Using async/await
async function dnsResolvedAsync(hostname) {
	try {
		const addresses = await dnsResolvePromised(hostname);
		console.log(addresses[0]);
	} catch (error) {
		console.log(error);
	}
}

dnsResolvedAsync(hostname);