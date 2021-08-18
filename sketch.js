var counts = document.querySelectorAll(".count");
var cards = document.querySelectorAll(".card_title");

cards.forEach( card => 
  {
    card.addEventListener("click", ()=>
    {
      counts.forEach( count => 
        {
          if(card.contains(count))
          {
            count.classList.toggle("check");
            card.classList.toggle("check");
          }
        })
    });
  })

