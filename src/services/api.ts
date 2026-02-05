import type { Project } from "../types"; 

export const getProjects = (): Promise<Project[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "E-commerce React",
          description: "Uma loja completa com carrinho de compras.",
          url: "https://via.placeholder.com/300",
          image: "https://github.com/seu-usuario/projeto1"
        },
        {
          name: "E-commerce React",
          description: "Uma loja completa com carrinho de compras.",
          url: "https://via.placeholder.com/300", 
          image: "https://github.com/seu-usuario/projeto1"
        }
      ]);
    }, 2000); 
  });
};