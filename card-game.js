class VisualCard {
  constructor(card) {
    this.card = card;
  }
  x = 20;
  y = 20;

  isDragging = false;
  xOffset = 0;
  yOffset = 0;

  dragging() {
    if (
      mouseX > this.x &&
      mouseX < this.x + 150 &&
      mouseY > this.y &&
      mouseY < this.y + 200
    ) {
      this.isDragging = true;
      this.xOffset = mouseX - this.x;
      this.yOffset = mouseY - this.y;
      return true;
    } else {
      return false;
    }
  }

  drag() {
    if (this.isDragging) {
      this.x = mouseX;
      this.y = mouseY;
    }
  }

  getIcon() {
    //this.card.suit
    //♥ ♦ ♠ ♣
    if (this.card.suit === "Diamonds") {
      return "♦";
    } else if (this.card.suit === "Spades") {
      return "♠";
    } else if (this.card.suit === "Hearts") {
      return "♥";
    } else if (this.card.suit === "Clubs") {
      return "♣";
    }
  }

  getLetter() {
    if (this.card.name === "Queen") {
      return "Q";
    } else if (this.card.name === "King") {
      return "K";
    } else if (this.card.name === "Jack") {
      return "J";
    } else if (this.card.name === "Ace") {
      return "A";
    } else {
      return this.card.name;
    }
  }

  draw(card) {
    this.drag();
    push();
    {
      translate(this.x, this.y);

      fill("white");
      rect(0, 0, 150, 200, 7);
      //:hearts: :diamonds: :spades: :clubs:

      fill(this.card.color);
      textSize(100);
      textAlign(CENTER);
      text(this.getIcon(), 75, 110);

      textAlign(LEFT);
      text(this.getLetter(), 0, 75);

      textAlign(RIGHT);
      text(this.getLetter(), 150, 195);
    }
    pop();
  }
}

let dealer = new Dealer();

let card = dealer.getCard();

let hand = dealer.getHand();

let visHand = [];
for (let i = 0; i < hand.length; i++) {
  const card = hand[i];
  let visCard = new VisualCard(card);
  visCard.x = 180 * i;
  visHand.push(visCard);
}

var setup = function () {
  createCanvas(1500, 800);
};
var draw = function () {
  background("forestgreen");

  for (let i = 0; i < visHand.length; i++) {
    const visCard = visHand[i];
    visCard.draw();
  }
};

window.mousePressed = function () {
  for (let index = 0; index < visHand.length; index++) {
    const vc = visHand[index];
    vc.dragging();
  }
};

window.mouseReleased = function () {
  for (let index = 0; index < visHand.length; index++) {
    const vc = visHand[index];
    vc.isDragging = false;
  }
};
