//save the enatir html data in an array
const product = [
  {
    Image: "photoes/Idukki.jpg",
    name: "first amazon product",
    rating: {
      stars: 4.5,
      count: 87,
    },
    price: 10.9,
  },
  {
    Image: "photoes/munnnar.jpg",
    name: "second amazon product",
    rating: {
      stars: 4.5,
      count: 87,
    },
    price: 12.9,
  },
  {
    Image: "photoes/place.jpg",
    name: "third amazon product",
    rating: {
      stars: 3,
      count: 107,
    },
    price: 6.9,
  },
  {
    Image: "photoes/kattana.jpg",
    name: "fourth amazon product",
    rating: {
      stars: 3,
      count: 107,
    },
    price: 6.9,
  },
];

let productHtml = "";

//generating the html data by looping the above array
product.forEach((elements) => {
  productHtml =
    productHtml +
    `
    <div class="product-container">
        <div class="product-image-container">
          <img class="product-image" src="${elements.Image}" />
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${elements.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars" src="photoes/rating-35.png" />
          <div class="product-rating-count link-primary">${elements.rating.count}</div>
        </div>

        <div class="product-price">$${elements.price}</div>

        <div class="product-quantity-container">
          <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
          <img src="images/icons/checkmark.png" />
          Added
        </div>

        <button class="add-to-cart-button button-primary">Add to Cart</button>
      </div>
  `;
});
//inserting the html data in the dom way
document.querySelector(".js-product-grid").innerHTML = productHtml;
