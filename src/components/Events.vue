<template>
    <div>
        <p v-if="!events">Events are not currently available. :|</p>
        <template v-else>
            <dl>
                <div v-for="meetup in events" :key="meetup.id">
                    <dt class="" :class="{active: selectedId === meetup.id}" v-on:click.stop="selectEvent">
                        {{meetup.name}}
                    </dt>
                    <dd>
                        <p>{{meetup.local_date}} {{meetup.local_time}}</p>
                        <p>{{meetup.yes_rsvp_count}}</p>
                        <p>{{meetup.venue.name}}</p>
                        <p>{{meetup.venue.address_1}}</p>
                        <p>{{meetup.venue.city}}</p>
                        <p>{{meetup.venue.country}}</p>
                        <p>{{meetup.venue.zip}}</p>
                        <p>{{meetup.venue.state}}</p>
                        <template :innerHTML="meetup.description" />
                        <a class="btn" :href="meetup.link" target="_NEW">RSVP NOW!</a>
                    </dd>
                </div>
            </dl>

        </template>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: { ...mapGetters(['selectedId', 'events']) },
  methods: {
    ...mapActions(['selectEvent'])
  },
  created() {
    this.$store.dispatch('loadEvents');
  }
};
</script>

<style scoped>
</style>

<!--
"name": "Fool's Gold MTB Race",
"status": "upcoming",
"time": 1537009200000,
"local_date": "2018-09-15",
"local_time": "07:00",
"updated": 1535320626000,
"utc_offset": -14400000,
"waitlist_count": 0,
"yes_rsvp_count": 5,
"venue": {
    "id": 24347407,
    "name": "MONTALUCE WINERY ",
    "lat": 34.56465148925781,
    "lon": -84.06752014160156,
    "repinned": false,
    "address_1": "946 Via Montaluce",
    "city": "Dahlonega",
    "country": "us",
    "localized_country_name": "USA",
    "zip": "",
    "state": "GA"
},
group: {...},
"link": "https://www.meetup.com/zombie-camels-mountain-bike-club/events/254128229/",
"description": "<p>The 2018 Fool's Gold Mountain Bike Race will be returning to the beautiful Montaluce Winery in Dahlonega, GA for 2018. As far as the course, expect lots of fast &amp; flowy singletrack, some amazing singletrack descents, a sprinkle of pavement, and two major sustained climbs.</p> <p>Details and registration<br/><a href=\"http://mountaingoatadventures.com/foolsgold\" class=\"linkified\">http://mountaingoatadventures.com/foolsgold</a></p> ",
"visibility": "public"
-->