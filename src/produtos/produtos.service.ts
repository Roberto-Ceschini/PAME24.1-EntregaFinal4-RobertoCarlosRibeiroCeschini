import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProdutosService {

  constructor(private readonly prisma: PrismaService){}

  create(data: CreateProdutoDto) {
    const produtoCriado = this.prisma.produto.create({data});
    return produtoCriado;
  }

  findAll() {
    const produtos = this.prisma.produto.findMany();
    return produtos;
  }

  findOne(id: number) {
    const produto = this.prisma.produto.findUnique({where: {id}});
    return produto;
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    const produtoAtualizado = this.prisma.produto.update({where: {id}, data: updateProdutoDto});
    return produtoAtualizado;
  }

  async remove(id: number) {
      await this.prisma.produto.delete({where: {id}});
      return "Produto removido com sucesso!"
  }
}
