class queryProducts {
    products = []
    query = {}
    constructor(products,query){
        this.products = products
        this.query = query
    }

    categoryQuery = () => {
        this.products = this.query.category ? this.products.filter(c => c.category === this.query.category) : this.products
        return this
    }

    ratingQuery = () => {
        this.products = this.query.rating ? this.products.filter(c => parseInt(this.query.rating) <= c.rating && c.rating < parseInt(this.query.rating) + 1) : this.products
        return this
    }

    searchQuery = () => {
        this.products = this.query.searchValue ? this.products.filter(p => p.name.toUpperCase().indexOf(this.query.searchValue.toUpperCase()) > -1  ) : this.products
        return this
    }

    priceQuery = () => {
        this.products = this.products.filter(p => p.price >= this.query.lowPrice && p.price <= this.query.highPrice )
        return this
    }
    
    sortByPrice = () => {
        if (this.query.sortPrice) {
            if (this.query.sortPrice === 'low-to-high') {
                this.products = this.products.sort(function (a,b){ return a.price - b.price})
            } else {
                this.products = this.products.sort(function (a,b){ return b.price - a.price})
            }
        }
        return this
    }

    // skip = () => {
    //     let {pageNumber} = this.query
    //     const skipPage = (parseInt(pageNumber) - 1) * this.query.parPage
    //     let skipProduct = []

    //     for (let i = skipPage; i < this.products.length; i++) {
    //         skipProduct.push(this.products[i]) 
    //     }
    //     this.products = skipProduct
    //     // this.products = this.products.slice(skipPage)
    //     return this
    // }
    skip = () => {
    let pageNumber = this.query.pageNumber ? parseInt(this.query.pageNumber) : 1;
    let parPage = this.query.parPage ? parseInt(this.query.parPage) : 12;
    const skipPage = (pageNumber - 1) * parPage;
    this.products = this.products.slice(skipPage);
    return this;
}

    // limit = () => {
    //     let temp = []
    //     if (this.products.length > this.query.parPage) {
    //         for (let i = 0; i < this.query.parPage; i++) {
    //             temp.push(this.products[i]) 
    //         } 
    //     }else {
    //         temp = this.products
    //     }
    //     // this.products = this.products.slice(0, this.query.parPage)
    //     this.products = temp 
    //     return this
    // }

    limit = () => {
    let parPage = this.query.parPage ? parseInt(this.query.parPage) : 12;
    this.products = this.products.slice(0, parPage);
    return this;
}

    getProducts = () => {
        return this.products
    }

    countProducts = () => {
        return this.products.length
    } 

}

module.exports = queryProducts















// class QueryProducts {
//     constructor(products, query) {
//         this.products = products;
//         this.query = query;
//     }

//     categoryQuery() {
//         if (this.query.category) {
//             this.products = this.products.filter(
//                 c => c.category === this.query.category
//             );
//         }
//         return this;
//     }

//     ratingQuery() {
//         if (this.query.rating) {
//             const rating = parseInt(this.query.rating);
//             this.products = this.products.filter(
//                 c => rating <= c.rating && c.rating < rating + 1
//             );
//         }
//         return this;
//     }

//     searchQuery() {
//         if (this.query.searchValue) {
//             const value = this.query.searchValue.toUpperCase();
//             this.products = this.products.filter(
//                 p => p.name.toUpperCase().includes(value)
//             );
//         }
//         return this;
//     }

//     priceQuery() {
//         this.products = this.products.filter(
//             p => p.price >= this.query.lowPrice && p.price <= this.query.highPrice
//         );
//         return this;
//     }

//     sortByPrice() {
//         if (this.query.sortPrice) {
//             if (this.query.sortPrice === "low-to-high") {
//                 this.products = this.products.sort((a, b) => a.price - b.price);
//             } else {
//                 this.products = this.products.sort((a, b) => b.price - a.price);
//             }
//         }
//         return this;
//     }

//     skip() {
//         const skipPage = (parseInt(this.query.pageNumber) - 1) * this.query.parPage;
//         this.products = this.products.slice(skipPage);
//         return this;
//     }

//     limit() {
//         this.products = this.products.slice(0, this.query.parPage);
//         return this;
//     }

//     getProducts() {
//         return this.products;
//     }

//     countProducts() {
//         return this.products.length;
//     }
// }

// module.exports = QueryProducts;