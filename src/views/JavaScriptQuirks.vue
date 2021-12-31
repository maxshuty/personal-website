<template>
  <div class="javascript-quirks">
    <h1>Funny</h1>
    <code>
      ((89.99999999999999 !== 90.00000000000000) !== (89.999999999999999 !==
      90.000000000000000)) // true. Something something floats suck
    </code>

    <code>
      function whatWillIReturn() { try { return 'foo'; } catch(up) { throw(up);
      } finally { return 'bar'; } console.log(whatWillIReturn()); // 'bar'.
      Finally always executes, so the first return is thrown away
    </code>

    <code> 3 < 2 < 1 // true. 3 < 2 is false, and false IS less than 1! </code>

    <code>'b' + 'a' + + 'a' + 'a'</code>
  </div>
</template>

<script>
export default {
  // TODO Max P: Make tabs so the code answer can be revealed
  name: 'javascript-quirks',
};
</script>
