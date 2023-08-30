const handleLoad = async (id,isshowall) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${id}`);
  const data = await res.json();
  const phones = data.data;
  phoneshow(phones,isshowall)
  // console.log(phones)
}
const phoneshow = (allphone,isshowall) => { 
  const container = document.getElementById('card-container');
  container.textContent = '';
  const showBtn = document.getElementById('show-btn');
  console.log('show button',isshowall)
  if (allphone.length > 12 && !isshowall) {
   showBtn.classList.remove('hidden')
  } else {
    showBtn.classList.add('hidden');
  } 
  if (!isshowall) {
    allphone = allphone.slice(0, 12);
  } 

  allphone.forEach((phone) => {
    // console.log(phone)
   
    const div = document.createElement('div');
    div.classList = `card w-96 bg-base-100 shadow-xl`;
    div.innerHTML = `<figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>${phone.slug}</p>
          <div class="card-actions justify-center">
            <button onclick="handleDetails('${phone.slug}')" class="btn btn-primary">Details</button>
          </div>
        </div>
    `
    container.appendChild(div)
  })
  lodingSpriner(false)
}
 
const handleDetails = async (id) => {
  console.log('sss', id)
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  const data = await res.json();
  const details = data.data;
  showModelInformation(details);
  console.log(details)
}
const showModelInformation = (details) => {
  const containerModal = document.getElementById('adding');
  const div = document.createElement('div');
  div.innerHTML = `
  <img src="${details?.image}" alt="">
        <h1>${details?.name}</h1>
        <p>${details?.mainFeatures.storage}</p>
        <p>${details?.display?'this is good':'display is not avalaible'}</p>
        <p>${details?.releaseDate}</p>
        <p>${details?.memory}</p>
        <p>${details?.slug}</p>`
  containerModal.appendChild(div)
  my_modal_5.showModal()
}

const search = (isshowall) => {
  lodingSpriner(true)
  const input = document.getElementById('input');
  const inputField = input.value;
  input.value = '';
  // console.log(inputField)
  handleLoad(inputField,isshowall)
  
}
// const search2 = () => {
//   const input2 = document.getElementById('input2');
//   const inputField2 = input2.value;
//   handleLoad(inputField2)
// }
const lodingSpriner = (isloading) => {
  const loding = document.getElementById('loading')
  if (isloading) {
    loding.classList.remove('hidden')
  } else {
    loding.classList.add('hidden')
  }
}
const showBtnAll = () => {
  search(true)
  // console.log(showBtnAll)
}
// search()
// handleLoad()