const time = () => {
  let currentTime = new Date()

  // the toLocaleTimeString formats the time nicely, into 00:00:00 style, can edit later on for if we don't want the seconds.
  let localTime = currentTime.toLocaleTimeString('en-AU')

  //then pin to doc, assuming we just have a section or something that makes us a clock
  document.getElementById('clock').innerHTML = localTime

}

setInterval(time, 1000)



//assuming we have an event from a button click, we can give all the remove buttons this function when they're created.
const removeFromCart = (event) => {
  //this lets us get the container that the button is in, if the button is inside more stuff we can do more .parentElements but hopefully it'll just be in one.
  let itemClicked = event.target.parentElement
  itemClicked.remove()
}

// on creation, something like this 
// let button = document.createElement('button')
//  
