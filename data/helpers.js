module.exports.filterData = (arrays) => {
  let arr = [];
  arrays.forEach((object) => {
    let obj = {
      artist: object.name, 
      url: object.url, 
      image: object.images[0].url,
      date: object.dates.start.localDate,
      genre: object.classifications[0].genre,
      venueName: object._embedded.venues[0].name, 
      address: object._embedded.venues[0].address.line1,
      city: object._embedded.venues[0].city.name, 
      zipcode: object._embedded.venues[0].postalCode
    };
    arr.push(obj);
  })
  return arr;
}
