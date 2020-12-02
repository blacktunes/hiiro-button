const LazyPlugin = {}
LazyPlugin.install = (Vue) => {
  Vue.directive('lazy', {
    mounted(el, binding) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const lazyImage = entry.target
          if (entry.intersectionRatio > 0) {
            lazyImage.src = binding.value
            io.unobserve(lazyImage)
          }
        })
      })
      io.observe(el)
    }
  })
}

export default LazyPlugin
