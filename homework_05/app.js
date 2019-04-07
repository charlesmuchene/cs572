const express = require('express');
const axios = require('axios');
const url = require('url');

const app = express();
const port = 1234;
const dataUrl = 'https://randomuser.me/api/?results=10';

app.set('trust proxy', true);
app.enable('strict routing');
app.enable('case sensitive routing');
app.set('x-powered-by', false);

app
	.get('/users', (request, response) => {
    const resourceUrl = parseResourceUrl(request);
    fetchData(resourceUrl, request, response);
	})
	.listen(port, () => console.log('Express app started!'));

function parseResourceUrl(request) {
	const page = request.query.page || 1;
	const apiUrl = new URL(dataUrl);
	apiUrl.searchParams.append('page', page);
	return apiUrl.toString();
}

function setPaginationLinks(request, response) {
	const query = request.query;

	const urlObject = {
		protocol: request.protocol,
		hostname: request.hostname,
		port: port,
		pathname: request.path,
		query: query
	};

	const page = parseInt(query.page || 1);
	const previousPage = page - 1;
	const nextPage = page + 1;

  const links = {};
  
	if (previousPage > 0) {
		query.page = previousPage;
		urlObject.query = query;
		links.last = url.format(urlObject);
  }
  
  query.page = nextPage;
  urlObject.query = query;
  links.next = url.format(urlObject);

	response.links(links);
}

async function fetchData(url, request, response) {
	try {
		const personDataResponse = await axios.get(url);
    sendData(personDataResponse, request, response);
	} catch (error) {
		console.log(error);
		response.end(error);
	}
}

function sendData(results, request, response) {
  setPaginationLinks(request, response);
  response.send(results.data.results);
}
