<template>
  <div class="javascript-quirks">
    <code>
      ((89.99999999999999 !== 90.00000000000000) !== (89.999999999999999 !==
      90.000000000000000)) // true. Something something floats suck
    </code>

    <code>
      function whatWillIReturn() {
        try {
          return 'foo';
        } catch(up) {
          throw(up);
        } finally {
          return 'bar';
        }
    </code>
  </div>
</template>

<script>
export default {
  // TODO Max P: Make tabs so the code answer can be revealed
  name: 'javascript-quirks',
};
</script>
