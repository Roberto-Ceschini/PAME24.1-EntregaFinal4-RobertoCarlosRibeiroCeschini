export class CreateChecklistDto {
    dataEncomenda: Date;
    status: string; //Pendente, recebido ou usado
    ingredienteId?: number;
}
