const Favorite = () => {
  const heartbutton = document.querySelector(".heart-like-button");

  const hearttoggle = () => {
    if (heartbutton.classList.contains("liked")) {
      heartbutton.classList.remove("liked");
    } else {
      heartbutton.classList.add("liked");
    }
  }

  return(
    <>
      <div class="heart-like-button" onClick={hearttoggle}></div>
    </>
  )
}

export default Favorite;