const arrProduct = [
  { id: 1, name: "iphone X", price: 1000, img: "http://permees.site" },
  { id: 2, name: "iphone Xs", price: 1100, img: "http://permees.site" },
  { id: 2, name: "iphone Xr", price: 900, img: "http://permees.site" },
];

const render = () => {
  let content = "";

  for (let product of arrProduct) {
    content += `<div class = 'col-4'>
            <div class = 'card'>
                <img src = ${product.img} alt = 'phone'/>
                <div class = 'card-body'>
                    <p>${product.name}</p>
                    <p>${product.price}</p>
                    <button class = 'btn btn-primary'>
                    Mua hàng
                    </button>
                </div>
            </div>
        </div>
        `;
  }
  document.querySelector("#productList").innerHTML = content;
};

render();
