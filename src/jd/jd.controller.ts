import { Controller, Get, Query } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Controller('jd')
export class JdController {
    @Get('convertUrl')
    async convertUrl(@Query('url') inputUrl): Promise<{
        originalUrl: string,
        parsedUrl: string,
    }> {
        let parsedUrl = inputUrl;
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(inputUrl);
            parsedUrl = await page.url();
            await browser.close();
        } catch (e) {
            console.error(e);
        }
        return {
            originalUrl: inputUrl,
            parsedUrl,
        };
    }
}
