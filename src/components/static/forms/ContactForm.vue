<template>
  <div>

    <div class="contact__banner contact__wrapper contact__wrapper__headline contact__wrapper__headline--landing">
      <h1 class="contact__title">CONTACTEZ-NOUS</h1>
    </div>


    <h1 class="title__form__section">Le Formulaire</h1>
    <p class="sub__title">Contactez-nous pour avoir votre brasserie sur la map !</p>


    <div class="contact__wrapper">
      <div class="left__contact__content">
        <img src="../../../../src/assets/static/contact_sub.png" alt="">
      </div>


      <div class="right__contact__content">

        <ValidationObserver v-slot="{ invalid }">

          <form method="post" @submit.prevent="submit">
            <div class="contact__form">

              <ul>
                <li>
                  <label for="name"></label>
                  <ValidationProvider rules="required|alpha_dash" v-slot="{ valid, invalid }">
                    <input id="name"
                           :class="`is-$(valid)`"
                           v-model="form.breweryname"
                           type="text"
                           name="name"
                           placeholder="Nom de la brasserie">

                  </ValidationProvider>
                </li>
                <li>
                  <label for="city"></label>
                  <ValidationProvider rules="required|alpha_dash" v-slot="{ errors }">
                    <input id="city"
                           v-model="form.city"
                           name="city"
                           type="text"
                           placeholder="Ville">
                    <span>{{ errors[0] }}</span>
                  </ValidationProvider>
                </li>
                <li><label for="adress"></label>
                  <ValidationProvider rules="required|alpha_dash" v-slot="{ errors }">
                    <input type="text"
                           id="adress"
                           v-model="form.adress"
                           name="adress"
                           placeholder="Adresse">
                    <span>{{ errors[0] }}</span>

                  </ValidationProvider>
                </li>
                <li><label for="region"></label>
                  <ValidationProvider rules="required|alpha_dash" v-slot="{ errors }">

                    <input type="text"
                           id="region"
                           v-model="form.region"
                           name="region"
                           placeholder="Région">
                    <span>{{ errors[0] }}</span>

                  </ValidationProvider>
                </li>
                <li><label for="postalcode"></label>
                  <ValidationProvider rules="required|integer" v-slot="{ errors }">
                    <input type="text"
                           id="postalcode"
                           name="postalcode"
                           v-model="form.postalcode"
                           placeholder="Code Postal">
                    <span>{{ errors[0] }}</span>

                  </ValidationProvider>
                </li>
              </ul>
            </div>

            <div class="submit__button">
              <button type="submit"
                      value="submit"
                      :disabled="invalid"
                      >Soumettre
              </button>
            </div>

          </form>
        </ValidationObserver>

      </div>
    </div>
  </div>
</template>

<script>
import {ValidationProvider, ValidationObserver} from "vee-validate";

const axios = require('axios')

export default {
  name: "contact_form",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      form: {
        breweryname: '',
        city: '',
        region: '',
        adress: '',
        postalcode: '',
      }
    }
  },
  methods: {

    submit() {

        axios
          .post(`http://localhost:8000/api/awaiting_breweries`, this.form)
          .then(response => {
            console.log(response)
            this.$swal({
              text: `Votre demande a bien été prise en compte ! Notre équipe mettra la liste à jour dés que possible. Merci de votre participation ! 🍻`,
              width: '600px',
              confirmButtonColor: '#5fc85c'
            }).then(() => {
                location.reload();
              }
            );
          })
          .catch(e => {
              console.error(e)
            }
          );
      }

  },
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

input[type=text].is-true {
  background-color: #0AE569;
  color: #045929;
}

input[type=text].is-false {
  background-color: #FFA4A2;
  color: #EB0600
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

li:last-child {
  margin-bottom: 0;
}

.submit__button {
  display: flex;
  justify-content: center;
}
</style>
