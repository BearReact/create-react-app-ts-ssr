const express = require('express');
const path = require('path');

const PORT = 3000;

const reactRenderer = require('./react-renderer');

/**
 * initialize the application and create the routes
 */
const app = express();

/**
 * "/path-in-out-routes-arr" should always serve our server rendered page;
 * otherwise, continue with next handlers
 */

/**
 * Set the location of the static assets (ie the js bundle generated by webapck)
 */
app.use('/build', express.static(path.resolve(__dirname, '../build')))
app.use('/static', express.static(path.resolve(__dirname, '../build/static')))

app.get('/*', reactRenderer.render());

/**
 * Since this is the last non-error-handling
 * middleware use()d, we assume 404, as nothing else
 * responded.
 */

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
