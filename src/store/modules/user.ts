const useUserStore = defineStore('user', () => {
  const user = ref({
    username: 'ares',
  })

  const logout = () => {
    // do something
  }

  return {
    user,
    logout,
  }
})

export default useUserStore
