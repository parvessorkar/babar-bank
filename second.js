const bringApi = async (searchText) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await res.json();
  const phones = data.data;
  cardhandaler(phones)
  // console.log(phones)
}
const cardhandaler = (allphone) => {
  const container = document.getElementById('container');
  container.textContent = '';
  const showBtn = document.getElementById('show');


  if (allphone.length > 12) {
    showBtn.classList.remove('hidden')
  } else {
    showBtn.classList.add('hidden')
  }
  allphone = allphone.slice(0, 12);


  allphone.forEach((phone) => {
    const div = document.createElement('div');
    div.innerHTML=`<div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="${phone.image}" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">${phone.phone_name}</h2>
    <p>${phone.slug}</p>
    <div class="card-actions justify-center">
      <button onclick="detailsBtnhandelar()" class="btn btn-primary">Details</button>
    </div>
  </div>
</div>`
    // console.log(phone)
    container.appendChild(div)
  })
  loadinghandaler(false)
}
const searchFeild = () => {
  loadinghandaler(true)
  const input = document.getElementById('input-search');
  const inputValu = input.value;
  input.value = '';
  console.log(inputValu)
  bringApi(inputValu)

}
const loadinghandaler = (isload) => {
    const loader = document.getElementById('load');
  if (isload) {
    loader.classList.remove('hidden')
  } else {
    loader.classList.add('hidden')
  }

}
// details//
const detailsBring = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data = await res.json();
  const details = data.data;
  detailsBtnhandelar(details)
  // console.log(details)
}
const detailsBtnhandelar = (eachDtails) => {
  // console.log(eachDtails)
}
// skip show all button
const showAll = () => {
  
}
bringApi()