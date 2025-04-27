let func_status = 0;
let moving = false
let refX, refY
let target
let target_width = 0
let target_height = 0
let target_top = 0
let target_left = 0
let adjustment, ts, bs, ls, rs
let adjustment_width = 0
let adjustment_height = 0
let adjustment_top = 0
let adjustment_left = 0
let ts_width = 0
let bs_width = 0
let ls_height = 0
let rs_height = 0
let func

function setup() {
  a.forEach((val, idx) => {
    const el1 = document.createElement("div");
    el1.id = val[0]
    el1.style.position = val[1]
    el1.style.top = val[2]
    el1.style.left = val[3]
    el1.style.width = val[4]
    el1.style.height = val[5]
    el1.style.backgroundColor = val[6]
    el1.addEventListener('click', () => { do_click(el1, event) })
    document.querySelector('#base').appendChild(el1)
    console.log(idx + ':' + val[0])
  })
  document.querySelector('#base').appendChild(document.querySelector('#adjustment'))

  adjustment = document.querySelector("#adjustment")
  ts = document.querySelector("#ts")
  bs = document.querySelector("#bs")
  ls = document.querySelector("#ls")
  rs = document.querySelector("#rs")
}

function do_click(el, event) {
  func_status = 1
  target = el
  adjustment.style.display = ''
  init_ajustment(parseInt(target.style.top), parseInt(target.style.left), parseInt(target.style.width), parseInt(target.style.height))
  display_message()
  event.stopPropagation()
}

function init_ajustment(top, left, width, height) {
  adjustment.style.width = width + 30 + 'px'
  adjustment.style.height = height + 30 + 'px'
  adjustment.style.top = top - 15 + 'px'
  adjustment.style.left = left - 15 + 'px'

  ts.style.width = (width + 10) + 'px'
  ts.style.height = '10px'
  bs.style.width = (width + 10) + 'px'
  bs.style.height = '10px'
  ls.style.width = '10px'
  ls.style.height = (height + 10) + 'px'
  rs.style.width = '10px'
  rs.style.height = (height + 10) + 'px'
}

function do_cancel(event) {
  if (event.target == event.currentTarget) {
    adjustment.style.display = 'none'
    event.stopPropagation()
  }
}

function release() {
  func = ''
  moving = false
}

function set_data1(event) {
  set_data(event)
  func = (event) => {
    move_top_side(event)
    move_left_side(event)
    display_message()
  }
  event.stopPropagation()
  moving = true
}

function set_data2(event) {
  set_data(event)
  func = (event) => {
    move_top_side(event)
    move_right_side(event)
    display_message()
  }
  event.stopPropagation()
  moving = true
}

function set_data3(event) {
  set_data(event)
  func = (event) => {
    move_bottom_side(event)
    move_left_side(event)
    display_message()
  }
  event.stopPropagation()
  moving = true
}

function set_data4(event) {
  set_data(event)
  func = (event) => {
    move_bottom_side(event)
    move_right_side(event)
    display_message()
  }
  event.stopPropagation()
  moving = true
}

function set_data5(event) {
  set_data(event)
  func = (event) => {
    move_top_side(event)
    display_message()
  }
  event.stopPropagation()
  moving = true
}

function set_data6(event) {
  set_data(event)
  func = (event) => {
    move_bottom_side(event)
    display_message()
  }
  event.stopPropagation()
  moving = true
}

function set_data7(event) {
  set_data(event)
  func = (event) => {
    move_left_side(event)
    display_message()
  }
  event.stopPropagation()
  moving = true
}

function set_data8(event) {
  set_data(event)
  func = (event) => {
    move_right_side(event)
    display_message()
  }
  event.stopPropagation()
  moving = true
}

function move(event) {
  set_data(event)
  func = (event) => {
    if (moving) {
      const offsetPageX = event.pageX - refX;
      const offsetPageY = event.pageY - refY;
      adjustment.style.top = adjustment_top + offsetPageY + 'px'
      target.style.top = target_top + offsetPageY + 'px'
      adjustment.style.left = adjustment_left + offsetPageX + 'px'
      target.style.left = target_left + offsetPageX + 'px'
      display_message()
    }
  }
  event.stopPropagation()
  moving = true
}

function move_top_side(event) {
  if (moving) {
    const offsetPageY = event.pageY - refY;
    if (adjustment_height - offsetPageY <= 30) {
      adjustment.style.height = 30 + 'px'
      adjustment.style.top = adjustment_top + (adjustment_height - 30) + 'px'
      target.style.height = 1 + 'px'
      target.style.top = target_top + (target_height) + 'px'
      ls.style.height = 10 + 'px'
      rs.style.height = 10 + 'px'
    }
    else {
      adjustment.style.height = adjustment_height - offsetPageY + 'px'
      adjustment.style.top = adjustment_top + offsetPageY + 'px'
      target.style.height = target_height - offsetPageY + 'px'
      target.style.top = target_top + offsetPageY + 'px'
      ls.style.height = ls_height - offsetPageY + 'px'
      rs.style.height = rs_height - offsetPageY + 'px'
    }
  }
}

function move_bottom_side(event) {
  if (moving) {
    const offsetPageY = event.pageY - refY;
    if (adjustment_height + offsetPageY <= 30) {
      adjustment.style.height = 30 + 'px'
      target.style.height = 1 + 'px'
      ls.style.height = 10 + 'px'
      rs.style.height = 10 + 'px'
    }
    else {
      adjustment.style.height = adjustment_height + offsetPageY + 'px'
      target.style.height = target_height + offsetPageY + 'px'
      ls.style.height = ls_height + offsetPageY + 'px'
      rs.style.height = rs_height + offsetPageY + 'px'
    }
  }
}

function move_left_side(event) {
  if (moving) {
    const offsetPageX = event.pageX - refX;
    if (adjustment_width - offsetPageX <= 30) {
      adjustment.style.width = 30 + 'px'
      adjustment.style.left = adjustment_left + (adjustment_width - 30) + 'px'
      target.style.width = 1 + 'px'
      target.style.left = target_left + (target_width) + 'px'
      ts.style.width = 10 + 'px'
      bs.style.width = 10 + 'px'
    }
    else {
      adjustment.style.width = adjustment_width - offsetPageX + 'px'
      adjustment.style.left = adjustment_left + offsetPageX + 'px'
      target.style.width = target_width - offsetPageX + 'px'
      target.style.left = target_left + offsetPageX + 'px'
      ts.style.width = ts_width - offsetPageX + 'px'
      bs.style.width = bs_width - offsetPageX + 'px'
    }
  }
}

function move_right_side(event) {
  if (moving) {
    const offsetPageX = event.pageX - refX;
    if (adjustment_width + offsetPageX <= 30) {
      adjustment.style.width = 30 + 'px'
      target.style.width = 1 + 'px'
      ts.style.width = 10 + 'px'
      bs.style.width = 10 + 'px'
    }
    else {
      adjustment.style.width = adjustment_width + offsetPageX + 'px'
      target.style.width = target_width + offsetPageX + 'px'
      ts.style.width = ts_width + offsetPageX + 'px'
      bs.style.width = bs_width + offsetPageX + 'px'
    }
  }
}

function set_data(event) {
  refX = event.pageX
  refY = event.pageY

  adjustment_width = parseInt(adjustment.style.width)
  adjustment_height = parseInt(adjustment.style.height)
  adjustment_left = parseInt(adjustment.style.left)
  adjustment_top = parseInt(adjustment.style.top)

  target_width = parseInt(target.style.width)
  target_height = parseInt(target.style.height)
  target_top = parseInt(target.style.top)
  target_left = parseInt(target.style.left)

  ts_width = parseInt(ts.style.width)
  bs_width = parseInt(bs.style.width)
  ls_height = parseInt(ls.style.height)
  rs_height = parseInt(rs.style.height)
}

function display_message() {
  let html = 'top:' + target.style.top
  html = html + '<br>left:' + target.style.left
  html = html + '<br>width:' + target.style.width
  html = html + '<br>height:' + target.style.height
  document.querySelector("#properties").innerHTML = html
}