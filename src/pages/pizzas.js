import React from 'react';
import { graphql } from 'gatsby';

export default function PizzasPage({ data }) {
  const pizzas = data.pizzas.nodes;
  return (
    <>
      <p>Hey! There are {pizzas.length} Pizzas!</p>
    </>
  );
}
export const query = graphql`
  query PizzaQuery {
    pizzas: allSanityPizza {
      nodes {
        name
        id
        price
        slug {
          current
        }
        toppings {
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
