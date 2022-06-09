const labels = {
  0.5: 'Do not visit',
  1: 'Bad',
  1.5: 'Jail is nicer',
  2: 'Uhhh',
  2.5: 'Mehhh',
  3: 'Not bad',
  3.5: 'Getting better',
  4: 'Pretty nice!',
  4.5: 'Wowwwww!',
  5: 'I want to live here!',
};

const cities = [
  {
    id: 1,
    name: 'Las Vegas, NV',
    rating: 4.5,
    reviews: 14500,
    price: '$$$',
    description: 'What happens in Vegas, stays in Vegas!',
    imageUrl: ['http://cdn.cnn.com/cnnnext/dam/assets/180313182911-01-las-vegas-travel-strip.jpg', 'https://media-cdn.tripadvisor.com/media/photo-s/02/e2/e3/34/eiffel-tower-restaurant.jpg', 'https://spy.com/wp-content/uploads/2017/09/park-on-fremont1440.jpg', 'https://cdn.wynnresorts.com/q_auto,f_auto/Wynn%20Las%20Vegas/Casino/Wynn_Slots_GroupBonnie%20Holland-828x466?h=466&iar=0&w=828'],
    video: 'https://www.youtube.com/watch?v=R62JDyKilwA&ab_channel=TRIPXTREME',
  },
  {
    id: 2,
    name: 'New York City, NY',
    rating: 3.5,
    reviews: 11564,
    price: '$$$',
    description: 'The Big Apple!',
    imageUrl: ['https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_720,q_75,w_1400/v1/clients/newyorkcity/Coronavirus_Info_midtown_manhattan_skyline_nyc_3000x2000_364fa9b8-86ce-4f95-907a-4bd8ea32f232.jpg', 'https://pbs.twimg.com/media/FDUwpYMXEAAkIgO.jpg', 'https://s7d2.scene7.com/is/image/TWCNews/nyc-skyline-ap_jpg', 'https://hs-fresenius.org/wp-content/uploads/2019/04/The-Vessel-TKA-Hudson-Yards.jpg'],
    video: 'https://www.youtube.com/watch?v=1JJfWnAryrM&ab_channel=HereBeBarr',
  },
  {
    id: 3,
    name: 'Boston, MA',
    rating: 4.0,
    reviews: 8705,
    price: '$$',
    description: 'The Boston Tea Partttttayyyy!',
    imageUrl: ['https://www.planetware.com/wpimages/2020/06/massachusetts-boston-best-time-to-visit-best-time-of-year-to-visit-sunset.jpg', 'https://www.trolleytours.com/wp-content/uploads/2016/05/boston-public-garden.jpg', 'https://www.bostoncentral.com/pix/pages/65/boston-beacon-hill.jpg', 'https://www.omnihotels.com/-/media/images/hotels/bospar/destinations/bospar-boston-common.jpg?h=660&la=en&w=1170'],
    video: 'https://www.youtube.com/watch?v=lbt25uQoEAY&ab_channel=AlexandraMartinTV',
  },
  {
    id: 4,
    name: 'San Francisco, CA',
    rating: 4,
    reviews: 9870,
    price: '$$$',
    description: 'Fog all year long!',
    imageUrl: ['https://www.planetware.com/photos-large/USCA/california-san-francisco-golden-gate-bridge.jpg', 'https://www.hiusa.org/wp-content/uploads/2020/02/sanfrancisco-lights-2000-1075x840.jpg', 'https://cdn.vox-cdn.com/thumbor/ocDspoOL0P8hjC5hKQApvaFiRdo=/0x0:5000x3333/1200x900/filters:focal(1935x1190:2735x1990)/cdn.vox-cdn.com/uploads/chorus_image/image/55300779/shutterstock_1083024920.20.jpg', 'https://www.fodors.com/ee/images/article/lombardgetty.jpg'],
    video: 'https://www.youtube.com/watch?v=HDZ8Rvr_fR4&ab_channel=touropia',
  },
  {
    id: 5,
    name: 'Seattle, WA',
    rating: 4,
    reviews: 17558,
    price: '$$',
    description: 'Bye and bye!',
    imageUrl: ['https://cdn.thecrazytourist.com/wp-content/uploads/2019/02/ccimage-shutterstock_189041420.jpg'],
    video: 'https://www.youtube.com/watch?v=tSUsHg4k2HA&ab_channel=TheAeroWorldInvestigation',
  },
  {
    id: 6,
    name: 'Denver, CO',
    rating: 5,
    reviews: 18558,
    price: '$$',
    description: 'Nothing without Providence!',
    imageUrl: ['https://s.abcnews.com/images/US/denver-2-gty-er-211130_1638310959270_hpMain_16x9_992.jpg'],
    video: 'https://www.youtube.com/watch?v=FwjGmPu1D64&ab_channel=VentureAddicts',
  },
  {
    id: 7,
    name: 'Philadelphia, PA',
    rating: 3.5,
    reviews: 10558,
    price: '$',
    description: 'Virtue, Liberty and Independence!',
    imageUrl: ['https://cdn.britannica.com/41/94241-050-B7398B5E/Philadelphia-foreground-Schuylkill-River.jpg'],
    video: 'https://www.youtube.com/watch?v=r4udGGFEEkg&ab_channel=HereBeBarr',
  },
  {
    id: 8,
    name: 'Austin, TX',
    rating: 4.5,
    reviews: 12758,
    price: '$$',
    description: 'Friendship!',
    imageUrl: ['https://atxtoday.6amcity.com/wp-content/uploads/sites/21/2022/03/IMG_3981-970x545.jpg'],
    video: 'https://www.youtube.com/watch?v=iGGSxj6dOf8&ab_channel=GlobalVillage',
  },
  {
    id: 9,
    name: 'New Orleans, LA',
    rating: 4.5,
    reviews: 14558,
    price: '$',
    description: 'Union, justice, and confidence!',
    imageUrl: ['https://media.timeout.com/images/105770969/750/422/image.jpg'],
    video: 'https://www.youtube.com/watch?v=fFWJc2bXOvk&ab_channel=HungryPassport',
  },
  {
    id: 10,
    name: 'Honolulu, HI',
    rating: 5,
    reviews: 17098,
    price: '$',
    description: 'The life of the land is perpetuated in righteousness!',
    imageUrl: ['https://www.treksplorer.com/wp-content/uploads/things-to-do-in-honolulu.jpg'],
    video: 'https://www.youtube.com/watch?v=LQnFzajjeLI&ab_channel=GlobalVillage',
  },
];

module.exports = {
  labels,
  cities,
};
