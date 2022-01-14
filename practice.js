function artistInfo(array, name) {
  let biodata = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].name === name) {
      return biodata.push(array[i].bio);
    }
  }
}

console.log(artistInfo(artists, "Frida Kahlo"));
