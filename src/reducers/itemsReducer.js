const initialdata = {
  items: [
    {
      itemName: "Google Pixel 6 Pro (Sorta Sunny, 12GB RAM)",
      itemImage: "https://m.media-amazon.com/images/I/71ee+5V4ZRL._SL1500_.jpg",
      itemPrice: "68,450",
    },
    {
      itemName: "Samsung Galaxy S21 5G (Phantom Violet, 8GB, 128GB Storage)",
      itemImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5P3-_sc_pFCVtetpIuIcfATsbkrmAdNGWoYCYy1wOxD-r95RShD5JkBUzSvuXzrKNpNM&usqp=CAU",
      itemPrice: "59,580",
    },
    {
      itemName: "Apple iPhone 13 Pro Max ( 5G , Storage 256GB) ",
      itemImage:"https://fdn.gsmarena.com/imgroot/reviews/21/apple-iphone-13-pro-max/lifestyle/-1200w5/gsmarena_018.jpg",
      itemPrice: "125,000",
    },
    {
      itemName: "THURAYA X5-TOUCH",
      itemImage:"https://www.thuraya.com/-/media/thuraya/products/land-voice/thuraya-x5/thuraya-x5-2.jpg?h=380&la=en&w=290&hash=19B294984B6EE9A3F01D90D6F409F03F9DD9CA1C",
      itemPrice: "119,009",
    },
    {
      itemName: "RollsRoyce-Phantom-VIII",
      itemImage:"https://imgd.aeplcdn.com/0x0/cw/ec/30181/RollsRoyce-Phantom-VIII-Exterior-124069.jpg?wm=0",
      itemPrice: "225,0009",
    },
    {
      itemName: "Ford Mustang Permium Red",
      itemImage:"https://imgd.aeplcdn.com/0x0/cw/ec/23766/Ford-Mustang-Exterior-126883.jpg?wm=0",
      itemPrice: "205,0009",
    },
    {
      itemName: "Deadpool-Tshirt-for-Woman",
      itemImage: "https://i.etsystatic.com/13548558/r/il/84687d/1040556788/il_570xN.1040556788_43ou.jpg",
      itemPrice: "1009",
    },
    {
        itemName: "Game-OfThrones-Tshirt-for-Man",
        itemImage: "https://thegadgetflow.com/wp-content/uploads/2017/06/GoT-Lannister-Quote-T-Shirt-01.jpg",
        itemPrice: "999",
    },
    {
      itemName: "I-am-Groot-Tshirt-for-Kids",
      itemImage: "https://img.joomcdn.net/71823954c7fca661022dc8cd9e6c5f21c1b47f5b_original.jpeg",
      itemPrice: "699",    
    }
  ]
}

export default function itemsReducer(state=initialdata , action){
    switch(action.type)
    {
      case 'add_item': return {
        ...state,
        items : [...state.items, action.payload]
      }

      default :  {
        return state;
      }
    }
}