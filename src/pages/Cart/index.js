import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="" alt="Tênis"/>
            </td>
            <td>
              <strong>Tênis de corrida</strong>
              <span>R$159,90</span>
            </td>
            <td>
              <button type="button">
                <MdRemoveCircleOutline size={20} color="#7159c1" />
              </button>
              <input type="number" readOnly value={2}/>
              <button type="button">
                <MdAddCircleOutline size={20} color="#7159c1" />
              </button>
            </td>
            <td>
              <strong>R$318,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1" />
              </button>
            </td>
          </tr>
        </tbody>

      </ProductTable>

      <footer>
        <button type="button">
          Finalizar Pedido
        </button>

        <Total>
          <span>TOTAL</span>
          <strong>R$2000,00</strong>
        </Total>
      </footer>
    </Container>
  );
}
