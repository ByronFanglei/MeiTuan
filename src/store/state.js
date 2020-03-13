let defaultCity = '山西'
let detailIndex = 0
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}
export default {
  city: defaultCity,
  index: detailIndex
}
