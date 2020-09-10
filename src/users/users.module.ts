import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { User } from './users.entity';
import { UserRepository } from './users.repository';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'mysql-db',
    port: 3306,
    username: 'root',
    password: 'test',
    database: 'myDb',
    entities: [User, UserRepository],
    synchronize: true,
  }),],
  controllers: [UsersController],
  providers: [UserRepository]
})
export class UsersModule {}
