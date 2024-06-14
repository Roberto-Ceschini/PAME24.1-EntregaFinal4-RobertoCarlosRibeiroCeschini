export class CreateRegistroDto {
    dataRegistro: Date;
    tipo: string //entrada ou saida
    quantidade: number;
    funcionarioId: number;
    produtoId?: number;
}
