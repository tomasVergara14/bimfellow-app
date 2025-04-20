const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../src/environments/environment.prod.ts');

const envFileContent = `
export const environment = {
  production: true,
  SERVICE_ID: '${process.env.SERVICE_ID}',
  NOTIFICATION_TEMPLATE_ID: '${process.env.NOTIFICATION_TEMPLATE_ID}',
  RESPONSE_TEMPLATE_ID: '${process.env.RESPONSE_TEMPLATE_ID}',
  MAIL_BIMFELLOW: '${process.env.MAIL_BIMFELLOW}',
  PUBLIC_KEY: '${process.env.PUBLIC_KEY}',
};
`;

fs.writeFileSync(targetPath, envFileContent);
console.log(`✔️ Environment file created at ${targetPath}`);
console.log(process.env.SERVICE_ID);
console.log(process.env.NOTIFICATION_TEMPLATE_ID);
console.log(process.env.RESPONSE_TEMPLATE_ID);
console.log(process.env.MAIL_BIMFELLOW);
console.log(process.env.PUBLIC_KEY);
