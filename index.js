let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let homeCount = 0
let guestCount = 0

function increment (){
  homeCount +=1
  homeEl.textContent = homeCount
}

function incrementTwo (){
  homeCount +=2
  homeEl.textContent = homeCount
}

function incrementThree (){
  homeCount +=3
  homeEl.textContent = homeCount
}

function incrementGuest (){
  guestCount +=1
  guestEl.textContent = guestCount
}

function incrementGuestTwo (){
  guestCount +=2
  guestEl.textContent = guestCount
}

function incrementGuestThree (){
  guestCount +=3
  guestEl.textContent = guestCount
}
//guestEl.textContent = count
//guestEl.textContent += count
//homeEl.textContent = 0
