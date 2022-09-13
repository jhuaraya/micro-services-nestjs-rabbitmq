import { HttpClientService } from '@app/common';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { RefundController } from './refund.controller';
import { RefundService } from './refund.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: './apps/refund/.env' }),
    HttpModule.registerAsync({
      useClass: HttpClientService,
    }),
  ],
  controllers: [RefundController],
  providers: [RefundService],
})
export class RefundModule {}
