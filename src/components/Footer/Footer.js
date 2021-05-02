import React from 'react'
import './Footer.css'

const Footer = () =>{
    return(
<footer class="page-footer">
<div class="container">
  <div class="row">
    <div class="col l6 s12">
      <h5 class="white-text">Donde encontrarnos</h5>
      <p class="grey-text text-lighten-4"> Paraguay 5567,CABA</p>
      <p class="grey-text text-lighten-4"> Av Peron 2635,Quilmes</p>
      <p class="grey-text text-lighten-4"> Av F. Laprida 4256,Florida</p>
    </div>
    <div class="col l4 offset-l2 s12">
      <h5 class="white-text">Encontranos en nuestras redes</h5>
      <ul>
        <li><i class="fab fa-facebook-square"></i>  <a class="grey-text text-lighten-3" href="#!">Facebook/MusicStore</a></li>
        <li><i class="fab fa-instagram"></i> <a class="grey-text text-lighten-3" href="#!">Instagram/MusicStore</a></li>
        <li><i class="fab fa-amazon"></i> <a class="grey-text text-lighten-3" href="#!">Amazon/MusicStore</a></li>
        <li><i class="fab fa-ebay"></i> <a class="grey-text text-lighten-3" href="#!">Ebay/MusicStore</a></li>
      </ul>
    </div>
  </div>
</div>
<div class="footer-copyright">
  <div class="container">
  © 2018 Copyright Text
  </div>
</div>
</footer>
)
}

export default Footer;