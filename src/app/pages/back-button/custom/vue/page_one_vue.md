```html
<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Back Button</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <h1>Page One</h1>
    <p>Navigate to the next page to see the back button.</p>
    <ion-nav-link router-direction="forward" :component="component">
      <ion-button>Navigate</ion-button>
    </ion-nav-link>
  </ion-content>
</template>

<script lang="ts">
  import { IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton } from '@ionic/vue';
  import PageTwo from './PageTwo.vue';

  export default {
    components: { IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton },
    data() {
      return {
        component: PageTwo,
      };
    },
  };
</script>
```
