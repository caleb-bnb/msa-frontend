<template>
  <v-card>
    <v-table fixed-header>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Ages
          </th>
          <th class="text-left">
            Calories
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in list"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.ages }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script>
  export default {
    name: 'ExerciseTables',
    data () {
      return {
        list: [
          {
            name: 'Frozen Yogurt',
            ages: 15,
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            ages: 25,
            calories: 237,
          },
          {
            name: 'Eclair',
            ages: 55,
            calories: 262,
          },
          {
            name: 'Cupcake',
            ages: 65,
            calories: 305,
          },
          {
            name: 'Gingerbread',
            ages: 23,
            calories: 356,
          },
          {
            name: 'Jelly bean',
            ages: 33,
            calories: 375,
          },
          {
            name: 'Lollipop',
            ages: 42,
            calories: 392,
          },
          {
            name: 'Honeycomb',
            ages: 32,
            calories: 408,
          },
          {
            name: 'Donut',
            ages: 52,
            calories: 452,
          },
          {
            name: 'KitKat',
            ages: 29,
            calories: 518,
          },
        ],
      }
    },
  }
</script>
