import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Compare = () => {
  const [searchParams] = useSearchParams();
  const productIdsArray = searchParams.getAll('productIds');

  const [products, setProducts] = useState();
  useEffect(() => {
    if (productIdsArray.length > 0) {
      const data = { id1: productIdsArray[0], id2: productIdsArray[1] };
      try {
        const resp = fetch('http://localhost:4001/compare', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        resp
          .then((response) => {
            return response.json();
          })
          .then((result) => {
            setProducts(result);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [productIdsArray]);
  return (
    <div>
      <h2>compared products are</h2>
      {products && products.length > 0 && (
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
          {products.map((product, index) => {
            return (
              <tr key={`table-data-${index}`}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.ratings}</td>
              </tr>
            );
          })}
        </table>
      )}
    </div>
  );
};
