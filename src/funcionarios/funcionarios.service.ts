import { Injectable } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FuncionariosService {

  constructor(private readonly prisma: PrismaService){}

  create(data: CreateFuncionarioDto) {
    const funcionarioCriado = this.prisma.funcionario.create({data});
    return funcionarioCriado;
  }

  findAll() {
    const funcionarios = this.prisma.funcionario.findMany();
    return funcionarios;
  }

  findOne(id: number) {
    const funcionario = this.prisma.funcionario.findUnique({where: {id}});
    return funcionario;
  }

  update(id: number, updateFuncionarioDto: UpdateFuncionarioDto) {
    const funcionarioAtualizado = this.prisma.funcionario.update({where: {id}, data: updateFuncionarioDto});
    return funcionarioAtualizado;
  }

  async remove(id: number) {
    await this.prisma.funcionario.delete({where: {id}});
    return "Funcionario removido com sucesso!"
  }
}
