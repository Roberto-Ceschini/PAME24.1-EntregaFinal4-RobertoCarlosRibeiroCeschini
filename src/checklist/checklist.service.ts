import { Injectable } from '@nestjs/common';
import { CreateChecklistDto } from './dto/create-checklist.dto';
import { UpdateChecklistDto } from './dto/update-checklist.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChecklistService {

  constructor(private readonly prisma: PrismaService){}

  create(data: CreateChecklistDto) {
    const checklistCriado = this.prisma.checklist.create({data});
    return checklistCriado;
  }

  findAll() {
    const checklists = this.prisma.checklist.findMany();
    return checklists;
  }

  findOne(id: number) {
    const checklist = this.prisma.checklist.findUnique({where: {id}});
    return checklist;
  }

  update(id: number, updateChecklistDto: UpdateChecklistDto) {
    const checklistAtualizado = this.prisma.checklist.update({where: {id}, data: updateChecklistDto});
    return checklistAtualizado;
  }

  async remove(id: number) {
    await this.prisma.checklist.delete({where: {id}});
    return "checklist removida com sucesso!"
  }
}
