import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img src="" alt="Tênis"/>
      </li>
      <strong>Tênis de corrida</strong>
      <span>R$159,00</span>

      <button type="button">
        <div>
          <MdAddShoppingCart size={16} color="#FFF"/> 1
        </div>

      <span>Adicionar ao Carrinho</span>
      </button>
    </ProductList>
  );
}
