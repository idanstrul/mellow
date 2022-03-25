<template>
  <section class="user-menu">
    <div class="group-edit-header">
      <span>Account</span>
      <span @click.stop="close">X</span>
    </div>
      <div class="account-info">
        <div class="account-details">
          <span>{{ user.fullname }}</span>
          <span class="username"> ( {{ user.username }} )</span>
        </div>
      </div>
      <div class="logout" @click="logout">Log out</div>
  </section>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    logout() {
      this.$emit("logout");
    },
  },
};
</script>