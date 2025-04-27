function setup() {
  const e = document.querySelectorAll(".light-container>.light2")
  const a = ['s1', 's2', 's3']
  let idx = 0;
  function change() {
    e.forEach((v1) => {
      a.forEach((v2) => {
        v1.classList.remove(v2)
      })
    })

    for (let i = 0; i < e.length; i++) {
      e[i].classList.add(a[(idx + i) % a.length])
    }

    idx++
    idx %= a.length
  }
  change()
  setInterval(change, 500);
  // three lights cycle in sequence.
}

// rotation
let deg_r = 0
let rotate = (ele) => {
  deg_r += 20;
  deg_r = deg_r > 360 ? deg_r - 360 : deg_r
  ele.querySelector("img").style.transform = 'rotate(' + deg_r + 'deg)'
}

let rotating
function startRotate(ele) {
  rotating = setInterval(rotate, 100, ele);
}

function stopRotate(ele) {
  clearInterval(rotating)
  ele.querySelector("img").style.transform = 'rotate(0deg)'
  deg_r = 0
}
// rotation end

// zoom in
let mousein
function mouseenter() {
  document.querySelector("#zoomview").style.opacity = 1
  document.querySelector(".zoominmark").style.opacity = 0.5;
  mousein = true
}

function mouseleave() {
  document.querySelector("#zoomview").style.opacity = 0
  document.querySelector(".zoominmark").style.opacity = 0;
  mousein = false
}

function mousemove(event) {
  document.querySelector("#offset").value = event.offsetX + ', ' + event.offsetY
  document.querySelector("#screen").value = event.screenX + ', ' + event.screenY
  document.querySelector("#client").value = event.clientX + ', ' + event.clientY
  document.querySelector("#page").value = event.pageX + ', ' + event.pageY
  //console.log('offset(相對於container):' + event.offsetX + ',' + event.offsetY)
  //console.log('screen(相對於螢幕座標):' + event.screenX + ',' + event.screenY)
  //console.log('client(viewport):' + event.clientX + ',' + event.clientY)
  //console.log('page(相對於網頁):' + event.pageX + ',' + event.pageY)

  if (mousein) {
    const x = event.offsetX
    const y = event.offsetY
    let left = x - 20, top = y - 20 // box width=40px, height=40px

    if (left < 0) {
      left = 0
    } else if (left > 160) {
      left = 160
    }

    if (top < 0) {
      top = 0
    } else if (top > 60) {
      top = 60
    }

    const e = document.querySelector(".zoominmark");
    e.style.left = left + 'px'
    e.style.top = top + 'px'

    const e2 = document.querySelector(".zoomin");
    e2.style.left = -(left * 5) + 'px'
    e2.style.top = -(top * 5) + 'px'
  }
}
// zoom in end