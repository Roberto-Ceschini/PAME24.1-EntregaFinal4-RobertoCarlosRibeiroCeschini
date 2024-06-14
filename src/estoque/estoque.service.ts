import { Injectable } from '@nestjs/common';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EstoqueService {

  constructor(private readonly prisma: PrismaService){}

  async create(data: CreateEstoqueDto) {
    const estoqueCriado = await this.prisma.estoque.create({ data });
    return estoqueCriado;
  }

  async findAll() {
    const estoques = await this.prisma.estoque.findMany({
      include: {
        produto: true,
        ingrediente: true,
      },
    });
    return estoques;
  }

  async findOne(id: number) {
    const estoque = await this.prisma.estoque.findUnique({
      where: { id },
      include: {
        produto: true,
        ingrediente: true,
      },
    });
    return estoque;
  }

  async update(id: number, updateEstoqueDto: UpdateEstoqueDto) {
    const estoqueAtualizado = await this.prisma.estoque.update({
      where: { id },
      data: updateEstoqueDto,
      include: {
        produto: true,
        ingrediente: true,
      },
    });
    return estoqueAtualizado;
  }

  async remove(id: number) {
    await this.prisma.estoque.delete({ where: { id } });
    return "Item removido com sucesso!";
  }
}
