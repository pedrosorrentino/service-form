import create from 'zustand'

export const useUserFormStore = create((set) => ({
  userForm: {
    personalInfo: {},
    selectPlan: {
      plan: '',
      price: '',
      time: '',
    },
    addOns: [],
  },
  stepNumber: 0,

  addToPersonalInfo: (value) => {
    set((state) => (state.userForm.personalInfo = value))
  },
  addToSelectPlan: (key, value) => {
    set((state) => {
      const newState = state
      newState.userForm.selectPlan[key] = value
      return newState
    })
  },
  addToAddons: (value) => {
    set((state) => (state.userForm.addOns = value))
  },
  nextStepNumber: () => {
    set((state) => ({ stepNumber: state.stepNumber + 1 }))
  },
  backStepNumber: () => {
    set((state) => ({ stepNumber: state.stepNumber - 1 }))
  },
  changePlanStepNumber: (step) => {
    set(() => ({ stepNumber: step }))
  },
}))
