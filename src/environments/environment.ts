export const environment = {
    production: false,
    SERVICE_ID: process.env['SERVICE_ID'] || '',
    NOTIFICATION_TEMPLATE_ID: process.env['NOTIFICATION_TEMPLATE_ID'] || '',
    RESPONSE_TEMPLATE_ID: process.env['RESPONSE_TEMPLATE_ID'] || '',
    MAIL_BIMFELLOW: process.env['MAIL_BIMFELLOW'] || '',
    PUBLIC_KEY: process.env['PUBLIC_KEY'] || '',
};
