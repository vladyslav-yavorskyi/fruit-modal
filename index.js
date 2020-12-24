const fruits = [
  {
    id: 1,
    title: "Apple",
    price: 20,
    img: "https://sc01.alicdn.com/kf/UTB8ou8hOyDEXKJk43Oqq6Az3XXaz.jpg",
  },
  {
    id: 2,
    title: "Orange",
    price: 40,
    img:
      "https://media.istockphoto.com/photos/orange-picture-id185284489?k=6&m=185284489&s=612x612&w=0&h=x_w4oMnanMTQ5KtSNjSNDdiVaSrlxM4om-3PQTIzFaY=",
  },
  {
    id: 3,
    title: "Mango",
    price: 60,
    img:
      "https://vespertunes.files.wordpress.com/2015/11/mango_hd_images_background.jpg?w=1400",
  },
];

const toHTML = (fruit) => `
    <div class="col">
      <div class="card" style="width: 18rem">
        <img
          src="${fruit.img}"
          class="card-img-top"
        />
        <div class="card-body">
          <h5 class="card-title">${fruit.title}</h5>
          <a class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Show Price</a>
          <a class="btn btn-danger" data-delete="delete">Delete</a>
        </div>
      </div>
    </div>
`;

function render() {
  const html = fruits.map(toHTML).join("");
  document.querySelector("#fruits").innerHTML = html;
}

render();

const priceModal = $.modal({
  title: "Price",
  closable: true,
  width: "400px",
  footerButtons: [
    {
      text: "Close",
      type: "primary",
      handler() {
        priceModal.close();
      },
    },
  ],
});

document.addEventListener("click", (event) => {
  const btnType = event.target.dataset.btn;
  const id = +event.target.dataset.id;

  if (btnType === "price") {
    const fruit = fruits.find((f) => f.id === id);

    priceModal.setContent(`
      <p>Price of ${fruit.title}: <string>${fruit.price}</string></p>
    `);
    priceModal.open();
  }
});
