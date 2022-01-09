import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api/application')
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('/settings')
    getHello() {
        return this.appService.settings();
    }
}
