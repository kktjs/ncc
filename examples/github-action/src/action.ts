import fs from 'fs';
import path from 'path';
import { RunArgvs, formatConfig, create } from 'markdown-to-html-cli';

(async () => {
  try {
    const outputPath = path.resolve('output');
    const htmlStr = create({});
    fs.writeFileSync(outputPath, htmlStr);
  } catch (error) {
    console.log('error::', error);
  }
})();
