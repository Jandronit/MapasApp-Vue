<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import SearchResults from '@/components/search-results/SearchResults.vue';
import { usePlacesStore } from '@/composables/usePLacesStore';

export default defineComponent({
  name: 'SearchBar',
  components: {
    SearchResults
  },
  setup() {

    const { searchPlacesByTerm } = usePlacesStore();
    const debounceTimeout = ref();
    const debounceValue = ref('');
    
    return {
      debouncedValue: debounceValue,

      searchTerm: computed({
        get(){
          return debounceValue.value;
        },
        set( val: string ) {

          if (debounceTimeout.value) clearTimeout(debounceTimeout.value);

          debounceTimeout.value = setTimeout(() => {
            searchPlacesByTerm( val );
          }, 500);
        }
      })

    };
  },
});
</script>

<template>
    <div class="searchbar-container">
        <input type="text"
               class="form-control"
               placeholder="Search for a place..."
               v-model="searchTerm">
        <SearchResults />
    </div>
</template>

<style scoped>
.searchbar-container {
    position: fixed;
    top: 30px;
    left: 30px;
    background-color: white;
    border-radius: 5px;
    z-index: 9999;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: 300px;
    overflow: hidden;
    padding: 5px;
}
</style>