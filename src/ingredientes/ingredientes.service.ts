import { Injectable } from '@nestjs/common';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IngredientesService {

  constructor(private readonly prisma: PrismaService){}

  async create(data: CreateIngredienteDto) {
    const ingredienteCriado = await this.prisma.ingrediente.create({data});

    // Criar o registro no estoque 
    const estoqueCriado = await this.prisma.estoque.create({
      data: {
        ingredienteId: ingredienteCriado.id, // Associar ao ingrediente recém-criado
        }

    });


    return ingredienteCriado;
  }

  findAll() {
    const ingredientes = this.prisma.ingrediente.findMany();
    return ingredientes;
  }

  findOne(id: number) {
    const ingrediente = this.prisma.ingrediente.findUnique({where: {id}});
    return ingrediente;
  }

  update(id: number, updateIngredienteDto: UpdateIngredienteDto) {
    const ingredienteAtualizado = this.prisma.ingrediente.update({where: {id}, data: updateIngredienteDto});
    return ingredienteAtualizado;
  }

  async remove(id: number) {
      await this.prisma.ingrediente.delete({where: {id}});
      return "Ingrediente removido com sucesso!"
  }
}
