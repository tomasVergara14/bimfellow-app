import fs from 'fs';
import path from 'path';

const content = `
export const environment = {
  production: true,
  EMAIL_JS_ID: "${process.env.EMAIL_JS_ID}",
  // otros valores
};
`;

fs.writeFileSync(path.join('src/environments/environment.prod.ts'), content.trim());
