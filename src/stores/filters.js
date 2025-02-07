// Utilities
import { defineStore } from 'pinia'
import _ from "lodash";

export const useFiltersStore = defineStore('filters', {
  state: () => ({
    selectedStyle: "All",
    selectedSubjects: new Set()
  }),
  actions: {
    selectStyle(style) {
      this.selectedStyle = style;
    },
    addSubjectFilter(subject) {
      this.selectedSubjects.add(subject)
    },
    removeSubjectFilter(subject) {
      this.selectedSubjects.delete(subject)
    }
  }
})
