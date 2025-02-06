// Utilities
import { defineStore } from 'pinia'
import _ from "lodash";

export const useFiltersStore = defineStore('filters', {
  state: () => ({
    selectedStyle: null,
    selectedSubjects: []
  }),
  actions: {
    selectStyle(style) {
      this.selectedStyle = style;
    },
    addSubjectFilter(subject) {
      this.selectedSubjects.push(subject)
    },
    removeSubjectFilter(subject) {
      _.remove(this.selectedSubjects, function (i) {
        return i === subject;
      })
    }
  }
})
