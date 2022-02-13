<template>
  <div class="javascript-quirks">
    <h1>Funny & Interesting JavaScript quirks</h1>
    <p>
      <span>Something something floats suck...</span>
      <code>
        ((89.99999999999999 !== 90.00000000000000) !== (89.999999999999999 !==
        90.000000000000000)) // true
      </code>
    </p>
    <p>
      Finally always executes, so the first return is thrown away
      <code>
        function whatWillIReturn() { try { return 'foo'; } catch(up) {
        throw(up); } finally { return 'bar'; } } console.log(whatWillIReturn());
    </code>

    <code>
      3 &lt; 2 &lt; 1 // true. 3 &lt; 2 is false, and false IS less than 1!
    </code>

    <code>'b' + 'a' + + 'a' + 'a'</code>
  </div>
</template>

<script>
export default {
  // TODO Max P: Make tabs so the code answer can be revealed
  name: 'javascript-quirks',
};
</script>
