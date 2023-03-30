class ProductManager {
    constructor() {
        this.listProducts = [];
    }

    addProduct = (title, description, price, thumbnail, stock, id) => {
        // Validate if all the information required is complete in order to generate an ID an push it to the array
        if (!title || !description || !price || !thumbnail || !stock) {
            console.log('Error! one or more fields are incomplete');
        } else {
            //Validate if the ID already exists in listProducts
            const exist = this.listProducts.find((prod) => prod.id === id);
            if (exist) {
                console.log('Error! A product with the same ID:', id, 'already exists');
            } else {
                const product = {
                    title,
                    description,
                    price,
                    thumbnail,
                    stock,
                    id,
                };

                if (this.listProducts.length === 0) {
                    product.id = 1;
                } else {
                    product.id = this.listProducts[this.listProducts.length - 1].id + 1;
                }

                this.listProducts.push(product);
                return this.listProducts;
            }
        }
    };

    getProducts = () => {
        return this.listProducts;
    };

    getProductsById = (id) => {
        let aux = this.listProducts.filter((prod) => prod.id == id);
        if (aux.length === 0) {
            console.log('Product with ID:', id, 'not found');
        } else {
            console.log('The product is:', aux);
        }
    };
}



//Test to add products to the array
const productManager = new ProductManager();
const product1 = productManager.addProduct('Love Bracelete', '18K Rose Gold Bracelete', 6900, 'https://www.cartier.com/en-us/jewelry/bracelets/love/love-bracelet-B6067417.html', 3);
const product2 = productManager.addProduct('B.Zero1 Ring', '18K Rose Gold and black ceramic ring', 2040, 'https://www.bulgari.com/en-us/345855.html?gclid=Cj0KCQjww4-hBhCtARIsAC9gR3ZnWILF2aiFX8-6yrfsF3T9yO8gebk3TcUG165F3rOKnKbrHVggxYgaAl2_EALw_wcB&gclsrc=aw.ds', 7);

//Test where I manually enter an ID that already exists
const product3 = productManager.addProduct('GMT', 'Two tone Rolex GMT', 25000, 'https://www.tourneau.com/watches/rolex/gmt-master-ii-m126711chnrz0002.html', 2, 1);

// Test where a product with missing information is not added to the array nor ID is generated
const product4 = productManager.addProduct('Rolex Sumbariner', undefined, 20000, 'No image available', 1, 4);

//Returns the list of all the products
const products = productManager.getProducts();
console.log('The product list is:', products);

//Get a product by ID
const productss = productManager.getProductsById(4);