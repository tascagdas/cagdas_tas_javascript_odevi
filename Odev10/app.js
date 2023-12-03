

// 1 - Aşağıdaki sipariş bilgilerini object içerisinde saklayınız.
// 2 - Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: % 18)
// 3 - Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

// sipariş id: 101
// sipariş tarihi: 31.12.2022
// ödeme şekli: kredi kartı
// kargo adresi: Yahya kaptan mah.Kocaeli İzmit
// satın alınan ürünler: 
// ürün id: 5
// ürün başlığı: IPhone 13 Pro
// ürün url: http://abc.com/iphone-13-pro
// ürün fiyatı: 22000

// ürün id: 6
// ürün başlığı: IPhone 13 Pro Max
// ürün url: http://abc.com/iphone-13-pro-max
// ürün fiyatı: 25000

// müşteri:
// müşteri id: 12

// satıcı:
// firma id: 34
// firma adı: Apple Türkiye




// sipariş id: 102
// sipariş tarihi: 30.12.2022
// ödeme şekli: kredi kartı
// kargo adresi: Yahya kaptan mah.Kocaeli İzmit
// satın alınan ürünler: 

// ürün id: 6
// ürün başlığı: IPhone 13 Pro Max
// ürün url: http://abc.com/iphone-13-pro-max
// ürün fiyatı: 25000

// müşteri:
// müşteri id: 12

// satıcı:
// firma id: 34
// firma adı: Apple Türkiye


let orders = [
    {
        orderID: 101,
        orderDate: "31.12.2022",
        paymentMethod: "kredi kartı",
        shippingAdress: "Yahya kaptan mah. Kocaeli İzmit",
        customerID: 12,
        products: [
            product1 = {
                productID: 5,
                productHeader: "IPhone 13 Pro",
                productUrl: "http://abc.com/iphone-13-pro",
                productPrice: 22000
            },
            product2 = {
                productID: 6,
                productHeader: "IPhone 13 Pro Max",
                productUrl: "http://abc.com/iphone-13-pro-max",
                productPrice: 25000
            }
        ],
        seller: {
            companyID: 34,
            companyName: "Apple Türkiye"
        }
    }, {
        orderID: 102,
        orderDate: "30.12.2022",
        paymentMethod: "kredi kartı",
        shippingAdress: "Yahya kaptan mah. Kocaeli İzmit",
        customerID: 12,
        products: [
            product1 = {
                productID: 6,
                productHeader: "IPhone 13 Pro Max",
                productUrl: "http://abc.com/iphone-13-pro-max",
                productPrice: 25000
            }
        ],
        seller: {
            companyID: 34,
            companyName: "Apple Türkiye"
        }
    }
]


const orderTotal = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i].productPrice;
    };
    return sum * 1.18;
}


orderTotal(orders[1].products)

console.log(`101 nolu siparişin toplam tutarı KDV dahil: ${orderTotal(orders[0].products)} TL 
102 nolu siparişin toplam tutarı KDV dahil: ${orderTotal(orders[1].products)} TL
Her iki siparişin toplam tutarı KDV dahil: ${orderTotal(orders[0].products) + orderTotal(orders[1].products)} TL `)