<template>
  <v-card width="425" min-height="300">
    <v-card-title> Customer List </v-card-title>
    <v-card-text>
      Add and remove objects from an array. It'll use your browser's local
      storage to simulate an endpoint.
    </v-card-text>
    <v-divider />
    <div class="mt-4 d-flex justify-center">
      <!-- <v-text-field
        variant="outlined"
        single-line
        density="compact"
        label="Customer"
        placeholder="Customer"
        v-model="customer"
        @keyup.enter="create"
      /> -->
      <input
        :style="{ border: '2px solid black', borderRadius: '5px', color: $store.state.theme == 'dark' ? 'white' : 'black'}"
        autofocus
        class="ma-1 pa-1"
        type="text"
        label="Customer"
        placeholder="Customer"
        v-model="customer"
        @keyup.enter="create"
      />
      <v-btn
        class="ma-1"
        :color="$store.state.colours.austin"
        v-text="'add'"
        @click="create"
      />
    </div>
    <v-table class="pa-2" density="compact">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Customer</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr v-for="c in customers" :key="c.id" @click="selectCustomer(c)"> -->
          <tr v-for="c in customers" :key="c.id">
            <td v-if="selectedCustomer.id != c.id">{{ c.name }}</td>
            <td v-if="selectedCustomer.id == c.id" class="align-center">
              <input
                @keyup.enter="update(c)"
                :style="{ borderStyle: 'solid' }"
                class="pa-1 my-1"
                autofocus
                type="text"
                label="Customer"
                placeholder="Customer"
                v-model="selectedCustomer.name"
              />
            </td>
            <td v-if="selectedCustomer.id != c.id" class="text-center">
              <v-btn
                density="compact"
                variant="text"
                @click="selectCustomer(c)"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn density="compact" @click="destroy(c)" variant="text">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </td>
            <td v-if="selectedCustomer.id == c.id" class="text-center">
              <v-btn density="compact" variant="text" @click="update(c)">
                <v-icon>mdi-content-save</v-icon>
              </v-btn>
              <v-btn
                density="compact"
                @click="selectCustomer({ id: -1, name: '' })"
                variant="text"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-table>
  </v-card>
</template>

<script>
import { ref, reactive, computed } from "vue";

export default {
  setup() {
    let defaultCs = [
      { id: 1, name: "Please" },
      { id: 2, name: "Edit" },
      { id: 3, name: "One" },
    ];
    function initialize() {
      if (
        !localStorage.getItem("customers") ||
        JSON.parse(localStorage.getItem("customers")).length == 0
      )
        localStorage.setItem("customers", JSON.stringify(defaultCs));
    }

    const customer = ref("");

    const selectedCustomer = reactive({
      id: -1,
      name: "",
    });
    function selectCustomer(value) {
      selectedCustomer.name = value.name;
      selectedCustomer.id = value.id;
    }

    const customers = ref([]);

    function create() {
      if (!customer.value) return;
      customers.value.push({
        id: Math.floor(Math.random() * 1000),
        name: customer.value,
      });
      customer.value = "";
      localStorage.clear();
      localStorage.setItem("customers", JSON.stringify(customers.value));
    }
    function read() {
      customers.value = JSON.parse(localStorage.getItem("customers"));
    }
    function update(c) {
      let arr = customers.value.map((e) =>
        e.id == c.id ? { ...e, name: selectedCustomer.name } : e
      );
      customers.value = arr;
      localStorage.clear();
      localStorage.setItem("customers", JSON.stringify(customers.value));
      selectCustomer({ id: -1, name: "" });
    }
    function destroy(c) {
      // let i = customers.value.findIndex(e => e.id == c.id)
      let arr = customers.value.filter((e) => e.id != c.id);
      customers.value = arr;
      localStorage.clear();
      localStorage.setItem("customers", JSON.stringify(customers.value));
      selectCustomer({ id: -1, name: "" });
    }

    return {
      initialize,
      selectedCustomer,
      selectCustomer,
      customer,
      customers,
      create,
      read,
      update,
      destroy,
    };
  },
  mounted() {
    this.initialize();
    this.read();
  },
};
</script>
