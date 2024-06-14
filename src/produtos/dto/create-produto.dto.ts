export class CreateProdutoDto {
    nome: string;
    sabor: string;
    quantidade?: number;
    validade: Date;
    dataFabricacao: Date;
}
