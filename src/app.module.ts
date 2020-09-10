import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/users.entity';
import { UserRepository } from './users/users.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'mysql-db',
    port: 3307,
    username: 'root',
    password: 'test',
    database: 'myDb',
    entities: [User, UserRepository],
    synchronize: true,
  }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
