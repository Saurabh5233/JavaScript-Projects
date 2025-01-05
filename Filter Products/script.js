// const items = [
//     { url: "https://tinyurl.com/5n8v9e6m", name: "Smartphone", price: 699, category: "electronics" },
//     { url: "https://tinyurl.com/48mpfxzw", name: "Laptop", price: 1299, category: "electronics" },
//     { url: "https://tinyurl.com/y6exh62u", name: "Smartwatch", price: 199, category: "electronics" },
//     { url: "https://tinyurl.com/ykc94rez", name: "Headphones", price: 149, category: "electronics" },
//     { url: "https://tinyurl.com/y2exjxaj", name: "Bluetooth Speaker", price: 99, category: "electronics" },
//     { url: "https://shorturl.at/w5ypi", name: "T-Shirt", price: 25, category: "fashion" },
//     { url: "https://shorturl.at/akvZW", name: "Jeans", price: 50, category: "fashion" },
//     { url: "https://shorturl.at/bI7yY", name: "Jacket", price: 100, category: "fashion" },
//     { url: "https://tinyurl.com/yhuzpjz8", name: "Sneakers", price: 80, category: "fashion" },
//     { url: "https://shorturl.at/hlNAT", name: "Handbag", price: 60, category: "fashion" },
//     { url: "https://shorturl.at/emQpJ", name: "Sofa", price: 500, category: "home items" },
//     { url: "https://tinyurl.com/pkt8tdd4", name: "Dining Table", price: 750, category: "home items" },
//     { url: "https://shorturl.at/nwpMF", name: "Desk Lamp", price: 40, category: "home items" },
//     { url: "https://tinyurl.com/ytfuh7fd", name: "Curtains", price: 70, category: "home items" },
//     { url: "https://tinyurl.com/547yjpzr", name: "Rug", price: 120, category: "home items" },
//     { url: "https://tinyurl.com/2mwdcbnu", name: "Tablet", price: 350, category: "electronics" },
//     { url: "https://tinyurl.com/ye28cu7d", name: "Blender", price: 150, category: "home items" },
//     { url: "https://tinyurl.com/4k6jseku", name: "Sunglasses", price: 120, category: "fashion" },
//     { url: "https://tinyurl.com/453h8ad8", name: "Gaming Console", price: 499, category: "electronics" },
//     { url: "https://tinyurl.com/3athxk3t", name: "Bookshelf", price: 200, category: "home items" }
// ];

const items = [
    { name: "Smartphone", price: 699, category: "electronics", url: "https://cdn.thewirecutter.com/wp-content/media/2024/05/smartphone-2048px-1013.jpg" },
    { name: "Laptop", price: 1299, category: "electronics", url: "https://saudewala.in/cdn/shop/collections/Laptop.jpg?v=1732216115&width=1296" },
    { name: "Smartwatch", price: 199, category: "electronics", url: "https://crossbeats.com/cdn/shop/files/Crossbeats_Diva_Gold.png?v=1711085772&width=2048" },
    { name: "Headphones", price: 149, category: "electronics", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFqr79ql8SZAyqwDVMlPuUbs9xuYBTL1QuJQ&s" },
    { name: "Bluetooth Speaker", price: 99, category: "electronics", url: "https://m.media-amazon.com/images/I/71x4QMTf7EL.AC_UF1000,1000_QL80.jpg" },
    { name: "T-Shirt", price: 25, category: "fashion", url: "https://apparelstory.in/cdn/shop/files/I4.png?v=1682409786&width=1445" },
    { name: "Jeans", price: 50, category: "fashion", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkm0gKJ18SY86eKG5gYN9VqmXLQnM7fDFyRQ&s" },
    { name: "Jacket", price: 100, category: "fashion", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhDloQnhGMYocKpcy8dq-uO-NYHA0Y0zqRrg&s" },
    { name: "Sneakers", price: 80, category: "fashion", url: "https://www.converse.in/media/catalog/product/a/1/a12069c_a_107x1.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=375&width=840&auto=webp&format=pjpg" },
    { name: "Handbag", price: 60, category: "fashion", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMR5axhx8xycWPl7X4lAr80LCmVP7QE2Jomg&s" },
    { name: "Sofa", price: 500, category: "home items", url: "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/b9ad04a1-66fd-4bb8-b82c-7521d140a2ad/e6a259e677860331e4474bd616f1fccf.webp" },
    { name: "Dining Table", price: 750, category: "home items", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd4c9hc9anurD5HtfDpJov4yOoiCoKU34_2A&s" },
    { name: "Desk Lamp", price: 40, category: "home items", url: "https://m.media-amazon.com/images/I/71+H5mhr0YL.AC_UF1000,1000_QL80.jpg" },
    { name: "Curtains", price: 70, category: "home items", url: "https://drapestory.in/cdn/shop/files/523D_f6ab0091-534e-4b4f-a1bc-99fb33e96cab.jpg?v=1694761196" },
    { name: "Rug", price: 120, category: "home items", url: "https://m.media-amazon.com/images/I/717SRG4gVNL.jpg" },
    { name: "Tablet", price: 350, category: "electronics", url: "https://media.wired.com/photos/649b2dbfc859c4a1cdecc412/master/w_960,c_limit/Amazon-Fire-Max-11-Review--Stand-Gear.jpg" },
    { name: "Blender", price: 150, category: "home items", url: "https://m.media-amazon.com/images/I/81p-MlSSh2L.jpg" },
    { name: "Sunglasses", price: 120, category: "fashion", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV7gM0SSVXK0HCSfjcIoof4IRf7Jnp9rdO7Q&s" },
    { name: "Gaming Console", price: 499, category: "electronics", url: "https://cdn.thewirecutter.com/wp-content/media/2023/05/gamingconsoles-2048px-00730-3x2-1.jpg?auto=webp&quality=75&width=1024" },
    { name: "Bookshelf", price: 200, category: "home items", url: "https://studiokook.com/cdn/shop/files/MSWRoom-min.jpg?v=1724828140" }
  ];




const listOfProduct = document.getElementById('container');
const categoryDropdown = document.getElementById("Categories");



function renderItems(category) {
    listOfProduct.innerHTML = '';

    const filteredValues = category === "All"
        ? items
        : items.filter(item => item.category.toLowerCase() === category.toLowerCase());

    filteredValues.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
                <div class="item">
                    <img class="itmimg" src="${product.url}" alt="product">
                    <span class="name">${product.name}</span>
                    <h3>$${product.price}</h3>
                    <button class="buybtn">Add to cart</button>
                </div>
            `;
        listOfProduct.appendChild(card);
    });


}
renderItems("All");


document.addEventListener("change", () => {
    const selectedValue = categoryDropdown.value;
    console.log(selectedValue)
    renderItems(selectedValue)
});



