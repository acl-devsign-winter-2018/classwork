

const treasure = {
  title: 'The Treasure Room',
  image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTSWBaLG3ZQPaRCQGPrSlzxtzvg1PSsx6X4k__gSexxpij1fBBu3w',
  description: `There appears to be gold piled from floor to ceiling. You are
    rich beyond your wildest dreams! Congratulation adventurer!`,
  items: [],
  doors: {
    s: 'greatHall'
  }
};

const greatHall = {
  title: 'The Great Hall',
  image: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Great_Hall_of_Catherine_Palace_02.JPG',
  description: `You are in a great hall. There is a door to the south. And in front of you
    blocking the north is the largest spider you have ever seen. Think Jurassic Park but
    with spiders.`,
  items: [],
  doors: {
    s: 'dankChamber'
  },
  use(item) {
    if(item.key === 'bird') {
      this.doors.n = 'treasure';
      this.description = `You are in a great hall. There is a door to the south. You
        can see a hole in the ceiling with some web strands floating on the edges where
        a great spider left in terror.

        There is a golden door to the north.
      `;
      return `As you drop the cage, the door breaks open and the bird flies out
        and begins to pester and chase the spider, who runs away terrified never to come back.`;
    }
  }
};

const dankChamber = {
  title: 'Dank Chamber',
  image: 'http://images3.wikia.nocookie.net/__cb20120716070849/dundef/images/9/96/Taverndungeon.jpg',
  description: `You are standing in a dank hall. You can hear the faint dripping of water
    running down the walls. There is a door to the east with light coming from the crack
    between the door and the floor. There is also a metal door leading to the north`,
  items: [],
  doors: {
    e: 'courtyard',
    n: 'greatHall',
    w: 'emptyRoom'
  }
};


const courtyard = {
  title: 'Courtyard',
  image: 'http://beta.finegardening.com/app/uploads/sites/finegardening.com/files/images/spotlight-collection/2-charleston-courtyard.jpg',
  description: `You are in a lovely courtyard with roses and daphne. The flowers are healthy,
    but uncared for. You see a small bird in a gilded cage.`,
  items:[
    {
      key: 'bird',
      description: 'Bird in a Cage',
      prevent: 'The bird becomes highly agitated and you cannot pick up the cage'
    }
  ],
  doors: {
    w: 'dankChamber'
  },
  use(item) {
    if(item.key === 'violin') {
      const bird = this.items.find(item => item.key === 'bird');
      if(!bird) return;

      delete bird.prevent;
      
      return `The soothing sounds of the violin seems to bring peace to the bird.
        Apparently the violin was magical, because as you finish your song it disappears 
        into mist.`;
    }
  }
};

const emptyRoom = {
  title: 'Empty Room',
  image: 'https://f4.bcbits.com/img/a1108930030_16.jpg',
  description: 'You are in a large empty room. There is a violin here',
  items:[
    {
      key: 'violin',
      description: 'An Old Violin'
    }
  ],
  doors: {
    e: 'dankChamber'
  }
};

export const rooms = {
  treasure,
  greatHall,
  dankChamber,
  courtyard,
  emptyRoom
};

export const start = dankChamber;