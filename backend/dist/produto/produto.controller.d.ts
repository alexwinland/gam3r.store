import { Produto } from 'src/core';
export declare class ProdutoController {
    obterProdutos(): Promise<Produto[]>;
    obterProdutoPorId(id: string): Promise<Produto | null>;
}
