import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JdController } from './jd/jd.controller';

@Module({
  imports: [],
  controllers: [AppController, JdController],
  providers: [AppService],
})
export class AppModule { }
