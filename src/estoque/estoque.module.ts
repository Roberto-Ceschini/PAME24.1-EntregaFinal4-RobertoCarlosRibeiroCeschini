import { Module } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { EstoqueController } from './estoque.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [EstoqueController],
  providers: [EstoqueService, PrismaService],
})
export class EstoqueModule {}
