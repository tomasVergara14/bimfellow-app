import fs from 'fs';
import path from 'path';

const content = `
export const environment = {
  production: true,
  EMAIL_JS_ID: "${process.env.EMAIL_JS_ID}",
  SERVICE_ID: "${process.env.SERVICE_ID}",
  NOTIFICATION_TEMPLATE_ID: "${process.env.NOTIFICATION_TEMPLATE_ID}",
  RESPONSE_TEMPLATE_ID: "${process.env.RESPONSE_TEMPLATE_ID}",
  MAIL_BIMFELLOW: "${process.env.MAIL_BIMFELLOW}",
  PUBLIC_KEY: "${process.env.PUBLIC_KEY}"
};
`;

fs.writeFileSync(path.join('src/environments/environment.prod.ts'), content.trim());
