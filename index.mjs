import scrape from 'website-scraper';
import PuppeteerPlugin from 'website-scraper-puppeteer';
import path from 'path';

async function runScrape() {
  await scrape({
    urls: ['https://steve.vagas.staging.solides.com.br/'],
    directory: path.resolve(__dirname, 'pasta-do-site'),
    plugins: [
      new PuppeteerPlugin({
        launchOptions: {
          headless: true,
        },
        scrollToBottom: {
          timeout: 10000,
          viewportN: 10,
        },
      }),
    ],
  });
}

runScrape().catch((error) => {
  console.error(error);
});
