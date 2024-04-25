const wrapper = document.querySelector(".sliderWrapper")
//console.log(wrapper)
//wrapper.style.transform = "translateX(-400vw)"


const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

  let choosenProduct = products[0]

  const currentProductImage = document.querySelector(".productImage");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");


const menuItem = document.querySelectorAll(".menuItem")
menuItem.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        //console.log("You clicked!" +index)

        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        //change the choosen product
        choosenProduct = products[index]

        //change text of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImage.src = choosenProduct.colors[0].img;

        //assign new colors in product section
        currentProductColors.forEach((color, index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })

    });
});

//change image of product according to the backgroundColor choosen
currentProductColors.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        currentProductImage.src = choosenProduct.colors[index].img;
    })
})

//change size backgroundColor and color when it is choosen
currentProductSizes.forEach((size, index)=>{
    size.addEventListener("click", ()=>{
        //to change the color on choosen size
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor = "white";
            size.style.color = "black"
        })
        size.style.backgroundColor = "black";
        size.style.color = "white";
    })
})

//payment initially display is fixed as none 
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display = "flex";
});

close.addEventListener("click",()=>{
    payment.style.display = "none";
});