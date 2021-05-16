<template>
  <div
    class="v-icon icon"
    v-html="require(`../../assets/icons/${this.icon}.${fileExtension}`)"
    role="img"
    :aria-label="label"
    :aria-hidden="!label"
  ></div>
</template>

<script>
export default {
  name: 'base-icon',
  sample: '<base-icon icon="svg-file-name"/>',
  props: {
    icon: {
      type: String,
      note: `
       The icon code that is the file name of the svg in the <code>/assets/icons</code> directory.
       This component was inspired in part by: https://calebporzio.com/using-inline-svgs-in-vue-compoments
      `,
    },
    label: {
      type: String,
      note: 'The accessibility aria-label value.',
    },
    fileExtension: {
      type: String,
      default: 'svg',
      note: 'The file type extension, default is <code>svg</code>.',
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  font-size: inherit;
  line-height: 0;
  vertical-align: middle;
}
</style>
