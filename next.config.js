const { withFaust } = require('@faustjs/next');
const { i18n } = require('./next-i18next.config');

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
    i18n
});
