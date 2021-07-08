import { useState } from 'react'

/**
 * Helper hook for using modals in React
 *
 * @param {boolean} defaultValue
 * @returns A stateful value, a function to toggle the state and a setter for the specified value
 */
export default function useModal(defaultValue = false) {
  const [state, setState] = useState(defaultValue)

  const toggleModal = () => setState(previous => !previous)

  return [state, toggleModal, setState]
}
