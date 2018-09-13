<template>
  <div class="events">
    <header>
      <h1>Upcoming Rides</h1>
    </header>
    <aside>
      <div class="row">
        <div class="col s12">
          <app-notifications/>
        </div>
      </div>
    </aside>
    <main>
      <meetup-events/>
    </main>
  </div>
</template>

<script>
import Notifications from '@/components/Notifications';
import Events from '@/components/Events';
export default {
  name: 'app',
  components: {
    'app-notifications': Notifications,
    'meetup-events': Events
  }
};
</script>

<!-- needed? style src="@/assets/app.scss"/-->
