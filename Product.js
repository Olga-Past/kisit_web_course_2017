var prodcuts = [{
		name : "test",
		price : 12.9,
		inventory : 20
	}, {
		name : "test2",
		price : 30,
		inventory : 80
	}];
	
	class ProductLineItem {
		constructor(product) {
			this.name = product.name;
			this.quantity = 1;
			this.price = product.price * this.quantity;
			this.inventory = product.inventory;
		}

		getName() {
        return this.name;
    }

   		getPrice() {
        return this.price;
    }

    	getQuantity() {
        return this.quantity;
    }

    setQuantity(quantity) {
        this.quantity = quantity;
        this.price = product.price * this.quantity;
    }						 
		}
		
			var basket = (function(){
			let productBasket = [];

			getItemCount: function() {
           	return productBasket.length;
    },

		return {
		addProduct : function(productID){
			var index = products.findIndex(p => p.name == productID.name);
			if(index == null) {
				console.log("Товар уже в кошику");
			return;
				}
       		 productBasket.push(productID);
    },
    
		removeProduct : function(productID){
		   	 var index = products.findIndex(p => p.name == productID.name);
		   	 products.splice(index, 1);
	},

		updateProductQuantity : function(productID, quantity) {
			var index = products.findIndex(p => p.name == productID.name);
			if(index == undefined) {
				console.log("У кошик нічого не внеслось");
			return;
			}         
			if (productID.inventory == 0)
				console.log("Кошик порожній");
			return;	
			productID.inventory -= quantity;
			p.quantity += quantity;
	},

		getTotalPrice : function(){
			var q = this.getItemCount(),price=0;
            while(q--){
                price+= productBasket[q].price; 
            }
            return price;
  	}

  		}
		
	})();

