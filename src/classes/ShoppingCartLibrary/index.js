class ShoppingCartLibrary {

    static instance = null;

    constructor() {
        if (!ShoppingCartLibrary.instance) {

            ShoppingCartLibrary.instance = this;
        }

        return ShoppingCartLibrary.instance;
    }


    static getItem(id){
        let items = this.getItems();
        return items.find(item => item.id === id);
    }

    static getItems(){
        if (localStorage.getItem('cartItems') === null) {
            localStorage.setItem('cartItems', JSON.stringify([]));
            return [];
        }
        return JSON.parse(localStorage.getItem('cartItems'));
    }

    static addItem(id, name, quantity, price,image){
        let items = this.getItems();
        let item = items.find(item => item.id === id);
        if (item) {
            item.quantity += quantity;
        } else {
            item = {
                id: id,
                name: name,
                price: price,
                quantity: 1,
                image: image
            };
            items.push(item);
        }
        localStorage.setItem('cartItems', JSON.stringify(items));
    }

    static removeItem(id){
        let items = this.getItems();
        let item = items.find(item => item.id === id);
        if (item) {
            items.splice(items.indexOf(item), 1);
        }
        localStorage.setItem('cartItems', JSON.stringify(items));
    }

    static clear(){
        localStorage.setItem('cartItems', JSON.stringify([]));
    }

    static getTotalPrice(){
        let total = 0;
        let items = this.getItems();
        items.forEach(item => {
            total += item.price * item.quantity;
        });
        return total;
    }

    static getTotalQuantity(){
        let total = 0;
        let items = this.getItems();
        items.forEach(item => {
            total += item.quantity;
        });
        return total;
    }

    static getItemsCount(){
        let items = this.getItems();
        return items.length;
    }
}

export default ShoppingCartLibrary;