<template>
<v-container fluid>

    <v-card elevation="15" fluid v-if="!connected">
        <v-card-title class="indigo--text justify-center">Σύνδεση</v-card-title>
        <v-card-text class="text-center">
            όλα τα παρακάτω στοιχεία είναι απαραίτητα  
            <v-form v-model="valid" ref="form">
                <!-- <v-row  width="100%"> -->
                    <v-spacer></v-spacer>
                    <!-- <v-col> -->
                        <v-text-field :color="color" v-model="mail" label="e-mail" :rules="required_rule" required></v-text-field>
                    <!-- </v-col> -->
                    <v-spacer></v-spacer>
                <!-- </v-row> -->
                <!-- <v-row> -->
                    <v-spacer></v-spacer>
                    <!-- <v-col> -->
                        <v-text-field :color="color" v-model="password" label="Κωδικός" :rules="required_rule" required validate-on-blur></v-text-field>
                    <!-- </v-col> -->
                    <v-spacer></v-spacer>
                <!-- </v-row> -->
            </v-form>
        </v-card-text>
        <v-card-actions>
            <!-- <v-spacer></v-spacer> -->
            <v-btn class="indigo--text" dark text @click="reset">Clear</v-btn>
            <v-spacer></v-spacer>
            <!-- <v-btn :class="color" dark depressed  @click="validate">Sign In</v-btn> -->
            <v-btn :class="color" dark depressed v-on:click="loginUser">Sign In</v-btn>
        </v-card-actions>
    </v-card>
    <v-alert v-model="error">
        <v-card>
            <v-card-title>Λάθος κωδικός ή μαιλ</v-card-title>
        </v-card>
    </v-alert>
    <v-alert v-model="connected" type="success">
        Επιτυχής Σύνδεση <br>
        Καλως ήρθες,
        {{user.name}}
    </v-alert>
    </v-container>
</template>

<script>
import UserServices from '../UserService'
// import store from '../store'

export default {
    name: 'SignIn',
    props: ['signin'],
    data : function(){
      return{
        user: [],
        color: 'indigo',
        error: false,
        mail: '',
        connected: false,
        password: '',
        
        conf_mail: [
            v => !!v || 'Απαραίτητο πεδίο',
            this.conf_pass == this.password
        ]
      }
    },
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset() {
          this.$refs.form.reset()

      },
        async loginUser() {
            // console.log("ok");
            console.log("vue", this.mail, this.password)
            try {
                const u = await UserServices.loginUser(this.mail, this.password)
                this.user = u.data
            console.log('this.U is : ', this.user);
                //  store.commit('LOGIN', this.user)
                this.$store.commit('LOGIN', this.user)
            // store.dispatch("login", u.data)
            console.log('User is : ', this.$store.state.User);
                this.connected = true;
                if(this.user.is_admin == true)
                    this.$router.push('/admin')
                else this.$router.push('/user-profile')
                return
            } catch (err) {
                // swal("Error", "Something Went Wrong", "error");
                console.log("Something Went Wrong");
            }
                this.error = true;
        }
    },
}
</script>
