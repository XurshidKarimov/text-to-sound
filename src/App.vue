<template>
  <div class="container">
    <v-card title="Convert text to speech" subtitle="Listen to those words!">
      <div class="d-flex inputs-list-set">
        <div v-for="item in arr" :key="item" class="d-flex inputs-set px-6">
          <p class="lead">{{ item }}</p>
          <input :id="item" type="range" min="0" max="1" value="1" step="0.1">
          <span :id="`${item}-label`">1</span>
        </div>
      </div>
      <v-textarea class="px-6" label="Enter text here" variant="solo"></v-textarea>
      <v-card-actions class="px-6">
        <v-btn icon="mdi-play" variant="outlined"></v-btn>
        <v-btn icon="mdi-pause" variant="outlined"></v-btn>
        <v-btn icon="mdi-play-pause" variant="outlined"></v-btn>
        <v-btn icon="mdi-stop" variant="outlined"></v-btn>
      </v-card-actions>
    </v-card>  
  </div>
</template>

<script setup>
const arr = ['Volume', 'Rate', 'Pitch'];
</script>


<style scoped>
.inputs-list-set{
  gap: 0 10px;
}

.inputs-set{
  align-items: center;
  justify-content: center;
  gap: 0 10px;
}
</style>
