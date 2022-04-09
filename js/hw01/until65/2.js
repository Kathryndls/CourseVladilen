// Note: to not return Promise we can just make func async
const moveCircle = (root, color, newPosition) => {
  return new Promise(((resolve, reject) => {
    const circle = document.createElement('div')
    circle.classList.add('circle', color)

    try {
      root.append(circle)
    } catch (e) {
      reject(`Error moving '${color}'!`)
    }

    setTimeout(() => {
      resolve(`'${color}' moved`)
      circle.style.top = newPosition.top
      circle.style.left = newPosition.left
      circle.style.bottom = newPosition.bottom
      circle.style.right = newPosition.right
    }, 1000)
  }))
}

const moveAllAsync = (root) => {
  return new Promise((resolve => {
    const redCirclePromise = moveCircle(root, 'circle-red', {top: '500px'})
    const blueCirclePromise = moveCircle(root, 'circle-blue', {top: '500px', left: '500px'})
    const greenCirclePromise = moveCircle(root, 'circle-green', {left: '500px'})
    Promise.all([redCirclePromise, blueCirclePromise, greenCirclePromise])
      .then(() => {
        setTimeout(() => resolve('All done'), 1000)
      })
  }))
}

const moveAllSync = (root) => {
  return new Promise((resolve => {
    const redCirclePromise = moveCircle(root, 'circle-red', {top: '500px'})

    redCirclePromise.then(() => {
      const blueCirclePromise = moveCircle(root, 'circle-blue', {top: '500px', left: '500px'})

      blueCirclePromise.then(() => {
        const greenCirclePromise = moveCircle(root, 'circle-green', {left: '500px'})

        greenCirclePromise.then(() => {
          setTimeout(() => resolve('All done'), 1000)
        })
      })
    })
  }))
}

const onChoiceButtonClick = (root, choice) => {
  document.querySelectorAll('.btn').forEach(btn => btn.disabled = true)

  cleanDOM()

  let promise
  if (choice === 'sync') {
    promise = moveAllSync(root)
  } else if (choice === 'async') {
    promise = moveAllAsync(root)
  } else {
    alert('dont break me pls')
  }

  promise
    .then(() => {
        const root = document.querySelector('.root')
        const likeImg = document.createElement('img')
        likeImg.classList.add('like-img')
        likeImg.setAttribute('src', './img/like.jpg')
        likeImg.setAttribute('alt', 'Work!')

        setTimeout(() => {
          root.append(likeImg)
          likeImg.style.display = 'block'
          console.log('WORK!')

          document.querySelectorAll('.btn').forEach(btn => btn.disabled = false)
        }, 2000)
      },
    )
    .catch(() => console.error('One or some circles do not work!'))

}

const cleanDOM = () => {
  const circles = document.querySelectorAll('.circle')
  circles.forEach(circle => circle.remove())
  const img = document.querySelector('.like-img')
  if (img) {
    img.remove()
  }
}
