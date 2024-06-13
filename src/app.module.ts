import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuncionariosModule } from './funcionarios/funcionarios.module';
import { ProdutosModule } from './produtos/produtos.module';
import { RegistrosModule } from './registros/registros.module';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { ChecklistModule } from './checklist/checklist.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [FuncionariosModule, ProdutosModule, RegistrosModule, IngredientesModule, ChecklistModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
