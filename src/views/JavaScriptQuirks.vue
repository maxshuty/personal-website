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
        // 'bar'
      </code>
    </p>
    <p>
      <code>
        3 &lt; 2 &lt; 1 // true. 3 &lt; 2 is false, and false IS less than 1!
      </code>
    </p>
    <p>
      <code>'b' + 'a' + + 'a' + 'a'</code>
    </p>
    <p>
      https://stackoverflow.com/questions/69613606/why-does-javascripts-parseint0-0000005-print-5
      parseInt(0.5); // => 0 parseInt(0.05); // => 0 parseInt(0.005); // => 0
      parseInt(0.0005); // => 0 parseInt(0.00005); // => 0 parseInt(0.000005);
      // => 0 parseInt(0.0000005); // => 5 String(0.5); // => '0.5'
      String(0.05); // => '0.05' String(0.005); // => '0.005' String(0.0005); //
      => '0.0005' String(0.00005); // => '0.00005' String(0.000005); // =>
      '0.000005' String(0.0000005); // => '5e-7'
    </p>
  </div>
</template>

<script>
export default {
  // TODO Max P: Make tabs so the code answer can be revealed
  name: 'javascript-quirks',
};
</script>
