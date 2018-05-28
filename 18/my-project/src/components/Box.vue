<template>
    <article class="message is-success">
        <div class="message-header">
            <slot name="title">title</slot>
            <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
            <slot name="body">body</slot>
        </div>
    </article> 
</template>
<script>
export default {
  name: "Box",
  data() {
    return {};
  }
};
</script>
<style>
</style>


