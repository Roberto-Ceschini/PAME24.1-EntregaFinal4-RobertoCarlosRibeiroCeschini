import { Module } from '@nestjs/common';
import { IngredientesService } from './ingredientes.service';
import { IngredientesController } from './ingredientes.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [IngredientesController],
  providers: [IngredientesService, PrismaService],
})
export class IngredientesModule {}
