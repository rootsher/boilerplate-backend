import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    settings() {
        return {
            name: 'app'
        };
    }
}
