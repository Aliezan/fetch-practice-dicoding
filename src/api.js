/**
 * Data restoran diambil dari RESTful API:
 *  https://restaurant-api.dicoding.dev/
 *
 * Silakan baca dokumentasi untuk mengetahui-
 * cara penggunaannya.
 */

async function getRestaurants() {
  // TODO 1
  const response = await fetch('https://restaurant-api.dicoding.dev/list');
  const responseJson = await response.json();
  return responseJson.restaurants;
}

async function getRestaurant(id) {
  // TODO 2
  const response = await fetch(`https://restaurant-api.dicoding.dev/detail/${id}`);
  const responseJson = await response.json();
  return responseJson.restaurant;
}

async function postRestaurantReview(id, name, review) {
  // TODO 3
  const response = await fetch('https://restaurant-api.dicoding.dev/review', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id,
      name,
      review
    })
  });

  const responseJson = await response.json();
  return responseJson.customerReviews;
}

export { getRestaurant, getRestaurants, postRestaurantReview };
