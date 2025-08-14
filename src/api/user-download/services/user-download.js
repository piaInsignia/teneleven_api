'use strict';

/**
 * user-download service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-download.user-download');
