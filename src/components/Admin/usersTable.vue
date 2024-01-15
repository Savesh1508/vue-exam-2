<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Firstname</th>
        <th class="text-left">Lastname</th>
        <th class="text-left">Age</th>
        <th class="text-left">Phone</th>
        <th class="text-left">Address</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.age }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.address.address }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
const props = defineProps({
  users: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped></style>
