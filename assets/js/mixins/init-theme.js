export default {
  mounted () {
    jQuery('body').layout('fix')
    jQuery('body').layout('fixSidebar')
    jQuery('.sidebar-menu').tree()
  },
  notifications: {
    showNotifyMessage: { // You can have any name you want instead of 'showLoginError'
      title: 'title',
      message: 'message',
      type: 'default', // You also can use 'VueNotifications.types.error' instead of 'error'
      timeout: 5000
    }
  }
}
