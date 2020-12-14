<template>
  <div>

    <div class="contact__banner contact__wrapper contact__wrapper__headline contact__wrapper__headline--landing">
      <h1 class="contact__title">CONTACTEZ-NOUS</h1>
    </div>


    <h1 class="title__form__section">Le Formulaire</h1>
    <p class="sub__title">Contactez-nous pour avoir votre brasserie sur la map !</p>
    <form type="send">

      <div class="contact__wrapper">

        <div class="left__contact__content">
          <img src="../../../../src/assets/static/contact_sub.png">
        </div>

        <div class="right__contact__content">
          <ul>
            <li><input type="text" placeholder="Nom de la brasserie"></li>
            <li><input type="text" placeholder="Ville"></li>
            <li><input type="text" placeholder="Adresse"></li>
            <li><input type="text" placeholder="Code Postal"></li>
          </ul>
          <button class="send__button" >Soumettre</button>

        </div>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  name: "contact_form"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

.contact__banner {
  background-image: url("../../../assets/static/contact.png");
}

.title__form__section {
  margin-top: 50px;
  text-align: center;
  font-size: 50px;
  font-family: 'Playfair Display', serif;
}

.contact__wrapper {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-bottom: 100px;
  padding-top: 100px;
}

.contact__wrapper__headline {
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-size: cover;
  position: relative;
  padding: 0;
}

.contact__wrapper__headline--landing {
  display: flex;
  height: 720px;
}

.contact__title {
  display: flex;
  align-items: center;
  color: white;
  font-size: 85px;
}

.left__contact__content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.right__contact__content {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: start;
  align-content: start;
}

.title__form__section {
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-bottom: 0;
}

.sub__title {
  text-align: center;
  margin-top: 0;
  letter-spacing: 2px;
  font-family: 'Playfair Display', serif;

}

input[type=text] {
  border: 3px solid #f5f5f5;
  background-color: #f5f5f5;
  border-bottom: 1px solid #5FC85C;
  width: 650px;
  padding-bottom: 5px;
  margin-bottom: 20px;
  font-weight: 50;
  transition: 0.5s;
  font-size: 25px;
  color: rgba(0, 0, 0, 0.5);
  font-family: 'Playfair Display', serif;
}
input[type=text]:focus {
  border-bottom: 1px solid #555;
  color: rgba(0, 0, 0, 1);
}

button {
  padding: 0;
  background-color: #f5f5f5;
  border: 3px solid #f5f5f5;
  border-bottom: 1px solid #5FC85C;
  font-weight: 50;
  font-size: 25px;
  color: rgba(0, 0, 0, 0.5);
  font-family: 'Playfair Display', serif;
  transition: 0.5s;
}
button:hover {
  border-bottom: 1px solid #555;
  color: rgba(0, 0, 0, 1);
}
li:last-child{
  margin-bottom: 0;
}
</style>
