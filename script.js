const products =  [
    {
        img: './img/card-1.png',
        name: '3D Soft Curves',
        user: '😃 Esther Howard',
        price: '0.85 ETH'
    },
    {
        img: './img/card-2.png',
        name: 'The mystery of the black square',
        user: '🤣 Jenny Wilson',
        price: '0.24 ETH'
    },
    {
        img: './img/card-3.png',
        name: 'Pink Cloud 🌥',
        user: '👍Floyd Miles',
        price: '0.3 ETH'
    },
    {
        img: './img/card-4.png',
        name: '3D Ethereum',
        user: '⭐Jane Cooper',
        price:' 0.12 ETH'
    }
]

const wrapper = document.querySelector('.live__wrapper')
products.forEach(card => {
    wrapper.innerHTML += `
    <div class="live__card">
                    <img src=${card.img} alt="" class="live__img">
                    <div class="live__box">
                        <h3>${card.name}</h3>
                        <div>
                            <p>${card.user}</p>
                            <p>
                                Current Bid <br>
                                <b> ${card.price} </b>
                            </p>
                        </div>
                    </div>
                </div>
    `
})



const products2 = [
    {
        img: './img/brain.png',
        name: '3D Soft Curves',
        user: '😃 Esther Howard',
        price: '0.85 ETH'
    },
    {
        img: './img/3dcurves.png',
        name: '3D Soft Curves',
        user: '😂 Esther Howard',
        price: '0.85 ETH'
    },
    {
        img: './img/art.png',
        name: '3D Soft Curves',
        user: '🐦 Esther Howard',
        price: '0.85 ETH'
    },
    {
        img: './img/nonsense.png',
        name: '3D Soft Curves',
        user: '⭐ Esther Howard',
        price:'0.85 ETH'
    },
    {
        img: './img/wtf.png',
        name: '3D Soft Curves',
        user: '😃 Esther Howard',
        price: '0.85 ETH'
    },
    {
        img: './img/women.png',
        name: '3D Soft Curves',
        user: '😒 Esther Howard',
        price: '0.85 ETH'
    },
    {
        img: './img/america.png',
        name: '3D Soft Curves',
        user: '🐦 Esther Howard',
        price: '0.85 ETH'
    },
    {
        img: './img/eye.png',
        name: '3D Soft Curves',
        user: '⭐ Esther Howard',
        price:'0.85 ETH'
    },
    {
        img: './img/good.png',
        name: '3D Soft Curves',
        user: '😃 Esther Howard',
        price: '0.85 ETH'
    },
    {
        img: './img/sheet.png',
        name: '3D Soft Curves',
        user: '😊 Esther Howard',
        price: '0.85 ETH'
    },
    {
        img: './img/starwars.png',
        name: '3D Soft Curves',
        user: '😁 Esther Howard',
        price: '0.85 ETH'
    },
    {
        img: './img/card-1.png',
        name: '3D Soft Curves',
        user: '⭐ Esther Howard',
        price:'0.85 ETH'
    }
]

const wrapper2 = document.querySelector('.live__wrapper2')
products2.forEach(card => {
    wrapper2.innerHTML += `
    <div class="live__card">
                    <img src=${card.img} alt="" class="live__img">
                    <div class="live__box">
                        <h3>${card.name}</h3>
                        <div>
                            <p>${card.user}</p>
                            <p>
                                Current Bid <br>
                                <b> ${card.price} </b>
                            </p>
                        </div>
                    </div>
                </div>
    `
})




const products3 = [
    {
        img: './img/interesting.png',
        name: '3D Soft Curves',
        user: '😃 Esther Howard',
        sub: '3K Followers'
    },
    {
        img: './img/jane.png',
        name: '3D Soft Curves',
        user: '😃 Esther Howard',
        sub: '8k Followers'
    },
    {
        img: './img/room.png',
        name: '3D Soft Curves',
        user: '😃 Esther Howard',
        sub: '650 Followers'
    },
    {
        img: './img/girl.png',
        name: '3D Soft Curves',
        user: '😃 Esther Howard',
        sub: '1K Followers'
    },
    {
        img: './img/interesting.png',
        name: '3D Soft Curves',
        user: '😃 Esther Howard',
        sub: '238 Followers'
    },
    {
        img: './img/jane.png',
        name: '3D Soft Curves',
        user: '😃 Esther Howard',
        sub: '64 Followers'
    },
    {
        img: './img/room.png',
        name: '3D Soft Curves',
        user: '😃 Esther Howard',
        sub: '2K Followers'
    },
    {
        img: './img/girl.png',
        name: '3D Soft Curves',
        user: '😃 Esther Howard',
        sub: '127 Followers'
    }
    
]

const wrapper3 = document.querySelector('.top__wrapper')
products3.forEach(card => {
    wrapper3.innerHTML += `
              <div class="live__card">
            <img src=${card.img} alt="" class="live__img" />

            <div class="top__box">
              <img class="top__user" src=${card.user} alt="">
              <div>
                <h5>${card.user}</h5>
                <p>
                  Bad Artist, NFT Enthusiast, Metaverse Innovator Supporting
                  #bitcoin since 2012.
                </p>

                <div>
                  <h5>${card.sub}</h5>
                  <button>Follow</button>
                </div>
              </div>
            </div>
          </div>
    `
})
