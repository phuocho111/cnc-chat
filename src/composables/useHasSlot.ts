import { useSlots } from 'vue'

export const useHasSlot = (name: string) => {
  const slots = useSlots()
  return !!slots[name]
}
