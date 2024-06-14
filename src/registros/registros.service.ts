import { Injectable } from '@nestjs/common';
import { CreateRegistroDto } from './dto/create-registro.dto';
import { UpdateRegistroDto } from './dto/update-registro.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RegistrosService {

  constructor(private readonly prisma: PrismaService){}

  async create(data: CreateRegistroDto) {
    const registroCriado = await this.prisma.registro.create({data});

    //Atualiza a quantidade de produtos
    if(data.produtoId){
      const produto = await this.prisma.produto.findUnique({where: {id: data.produtoId}}) //acha o produto que foi passado 

      if (produto) {
        let novaQuantidade = data.tipo === 'entrada' //verifica se o tipo é uma entrada ou saida
          ? produto.quantidade + data.quantidade
          : produto.quantidade - data.quantidade;

          if (novaQuantidade < 0){ //verifica se a novaQuantidade é negativa
            return "A quantidade retirada é maior que a do estoque";
          }

        await this.prisma.produto.update({ //atualiza a entidade produto
          where: { id: data.produtoId },
          data: { quantidade: novaQuantidade },
        });
      }
    }

    return registroCriado;
  }

  async findAll() {
    const registros = await this.prisma.registro.findMany({
      include: {
        funcionario: true,
        produto: true,
      },
    });
    return registros;
  }

  async findOne(id: number) {
    const registro = await this.prisma.registro.findUnique({
      where: { id },
      include: {
        funcionario: true,
        produto: true,
      },
    });
    return registro;
  }

  async update(id: number, updateRegistroDto: UpdateRegistroDto) {
    const registroAtualizado = await this.prisma.registro.update({
      where: { id },
      data: updateRegistroDto,
      include: {
        funcionario: true,
        produto: true,
      },
    });
    return registroAtualizado;
  }

  async remove(id: number) {
    await this.prisma.registro.delete({ where: { id } });
    return "Registro removido com sucesso!";
  }
}
