class ProductManager{
    
    constructor(){

       this.listProducts =[];

    }

addProduct = (title, description, price, thumbnail, stock) => {
  const product = {
    title,
    description,
    price,
    thumbnail,
    stock,
  };
  if (this.listProducts.length === 0) {
    product.id = 1;
  } else {
    product.id = this.listProducts[this.listProducts.length - 1].id + 1;
  }
  this.listProducts.push(product);
  return this.listProducts;
};

getProducts = () => {
    return this.listProducts
}

getProductsById = (id) => {
    let aux = this.listProducts.filter(prod => prod.id == id)
    if(aux.length === 0){
        console.log('Product not found')
    }
    else{
        console.log('El producto es:', aux)
    }
}


}


//Probar que el producto se agrega  al listProducts
const productManager = new ProductManager();
const product1 = productManager.addProduct('Love Bracelete', '18K Rose Gold Bracelete', 6900, 'https://www.cartier.com/en-us/jewelry/bracelets/love/love-bracelet-B6067417.html', 3);
const product2 = productManager.addProduct('B.Zero1 Ring', '18K Rose Gold and black ceramic ring', 2040, 'https://www.bulgari.com/en-us/345855.html?gclid=Cj0KCQjww4-hBhCtARIsAC9gR3ZnWILF2aiFX8-6yrfsF3T9yO8gebk3TcUG165F3rOKnKbrHVggxYgaAl2_EALw_wcB&gclsrc=aw.ds', 7);
const product3 = productManager.addProduct('GMT', 'Two tone Rolex GMT', 25000, 'https://www.tourneau.com/watches/rolex/gmt-master-ii-m126711chnrz0002.html', 2);

//Imprime la lista de productos
const products = productManager.getProducts();
console.log('La lista de productos es:', products);

//Busca un producto by ID
const productss = productManager.getProductsById(9);
