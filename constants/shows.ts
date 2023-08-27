const shows = [
  {
    date: '27.06.2021',
    name: 'RedBull Pit Stop Challenge Live',
    place: 'Autoklub ČR Praha',
  },
  {
    date: '08.07.2021',
    name: 'Free event',
    place: 'Dvorek na Letné',
  },
  {
    date: '17.07.2021',
    name: 'Summer Vibes (RedBull Saurus)',
    place: 'Slapy',
  },
  {
    date: '23.07.2021',
    name: 'Dominik CAFE',
    place: 'Plzeň',
  },
  {
    date: '13.08.2021',
    name: 'Radlická žije // The Loser(s) - Losers Cirque Company',
    place: 'Radlická Kulturní Sportovna',
  },
  {
    date: '14.08.2021',
    name: 'Summer Vibes (RedBull Saurus)',
    place: 'Bílý Kámen/Máchovo Jezero',
  },
  {
    date: '26.08.2021',
    name: 'The Backyard Kotva',
    place: 'Praha',
  },
  {
    date: '26.08.2021',
    name: 'Radlická žije',
    place: 'Radlická Kulturní Sportovna/Praha',
  },
  {
    date: '31.08.2021',
    name: 'Jägermeister Seznamovák 2021',
    place: 'Pasohlávky',
  },
  {
    date: '01.09.2021',
    name: 'Jägermeister Seznamovák 2021',
    place: 'Máchovo jezero',
  },
  {
    date: '07.09.2021',
    name: 'Jägermeister Seznamovák 2021',
    place: 'Máchovo jezero',
  },
  {
    date: '16.09.2021',
    name: 'Jägermeister Seznamovák 2021',
    place: 'Vranov',
  },
  {
    date: '23.09.2021',
    name: 'Jägermeister Seznamovák 2021',
    place: 'Vranov',
  },
  {
    date: '24.09.2021',
    name: 'Narozeniny Porsche',
    place: 'Praha',
  },
  {
    date: '30.09.2021',
    name: 'Radlická žije',
    place: 'Radlická Kulturní Sportovna/Praha',
  },
  {
    date: '15.10.2021',
    name: 'Signal festival 2021',
    place: 'Praha',
  },
  {
    date: '16.10.2021',
    name: 'Signal festival 2021',
    place: 'Praha',
  },
  {
    date: '22.10.2021',
    name: 'MOLLY',
    place: 'Karlovy Vary',
  },
  {
    date: '26.10.2021',
    name: 'ČZU HALLOWEEN PARTY',
    place: 'Praha',
  },
  {
    date: '29.10.2021',
    name: 'MOLLY',
    place: 'Karlovy Vary',
  },
  {
    date: '16.11.2021',
    name: 'Varna',
    place: 'Olomouc',
  },
  {
    date: '19.11.2021',
    name: 'MOLLY',
    place: 'Karlovy Vary',
  },
  {
    date: '26.11.2021',
    name: 'Za5Dvanáct',
    place: 'Praha',
  },
  {
    date: '29.12.2021',
    name: 'Red Bull Homerun',
    place: 'Špindlerův Mlýn',
  },
  {
    date: '14.01.2022',
    name: 'PlayOF Varna',
    place: 'Olomouc',
  },
  {
    date: '15.01.2022',
    name: 'Red Bull Homerun',
    place: 'Pec pod Sněžkou',
  },
  {
    date: '22.01.2022',
    name: 'Red Bull Homerun',
    place: 'Dolní Morava',
  },
  {
    date: '29.01.2022',
    name: 'Moon Club',
    place: 'Praha',
  },
   {
    date: '11.02.2022',
    name: 'Varna Olomouc',
    place: 'Olomouc',
  },
   {
    date: '12.03.2022',
    name: 'Jagermeister Rolba',
    place: 'Špindlerův Mlýn',
  },
  {
    date: '23.04.2022',
    name: 'Kulturní dům Žebrák',
    place: 'Žebrák',
  },
  {
    date: '06.05.2022',
    name: 'Westfield Chodov - střecha',
    place: 'Praha',
  },
  {
    date: '20.05.2022',
    name: 'Westfield Chodov - střecha',
    place: 'Praha',
  },
  {
    date: '28.05.2022',
    name: 'X-Treme Hradec Králové',
    place: 'Hradec Králové',
  },
  {
    date: '27.05.2022',
    name: 'Westfield Chodov - střecha',
    place: 'Praha',
  },
  {
    date: '29.05.2022',
    name: 'Zbraslav Skateboarding Day',
    place: 'Praha',
  },
  {
    date: '03.06.2022',
    name: 'Deethane TourJakMaBeat',
    place: 'České Budějovice',
  },
  {
    date: '10.06.2022',
    name: 'Votvírák 2022',
    place: 'Milovice - Mladá',
  },
  {
    date: '11.06.2022',
    name: 'Deethane TourJakMaBeat',
    place: 'Jabluňkov',
  },
  {
    date: '09.07.2022',
    name: 'MFF Mattoni Stage',
    place: 'Karlovy Vary',
  },
  {
    date: '15.06.2022',
    name: 'Radlická Kulturní Sportovna',
    place: 'Praha',
  },
  {
    date: '24.06.2022',
    name: 'Westfield Chodov Střecha',
    place: 'Praha',
  },
  {
    date: '16.07.2022',
    name: 'SK8 Girls ČSP Gutovka',
    place: 'Praha',
  },
  {
    date: '23.07.2022',
    name: 'Red Bull Half Court: 3x3 basketball challenge',
    place: 'Česká Lípa',
  },
  {
    date: '30.07.2022',
    name: 'Red Bull Half Court: 3x3 basketball challenge',
    place: 'Praha',
  },
  {
    date: '06.08.2022',
    name: 'Red Bull Half Court: 3x3 basketball challenge',
    place: 'Brno',
  },
  {
    date: '13.08.2022',
    name: 'Red Bull Half Court: 3x3 basketball challenge',
    place: 'Praha',
  },
  {
    date: '03.09.2022',
    name: 'Mercedes Benz Prague Fashion Week',
    place: 'Praha',
  },
  {
    date: '07.08.2022',
    name: 'DeeThane Roxy',
    place: 'Praha',
  },
  {
    date: '16.12.2022',
    name: 'Varna Olomouc',
    place: 'Olomouc',
  },
  {
    date: '25.02.2023',
    name: 'Red Bull Homerun',
    place: 'Špindlerův Mlýn',
  },
  {
    date: '22.04.2023',
    name: 'Prague Bike Fest 2023',
    place: 'Praha',
  },
  {
    date: '27.05.2023',
    name: 'Coolife Fest',
    place: 'Praha',
  },
  {
    date: '17.06.2023',
    name: 'Iron Town Session',
    place: 'Ostrava',
  },
  {
    date: '23.06.2023',
    name: 'U Kulatého Stolu',
    place: 'Praha',
  },
  {
    date: '01.08.2023',
    name: 'WakeSurf Rozkoš',
    place: 'Rozkoš',
  },
  {
    date: '05.08.2023',
    name: 'Beats For Love 2023',
    place: 'Ostrava',
  },
  {
    date: '07.08.2023',
    name: 'KVIFF 2023',
    place: 'Karlovy Vary',
  },
  {
    date: '04.08.2023',
    name: 'High Jump',
    place: 'Lom Hříměždice',
  },
];

export default shows;
