import request from '../../service/request.js'
import './list.css'
const URL = 'https://api.github.com/repos/Drlin/Drlin.github.io/issues'

xtag.register('x-list', {
  lifecycle:{
    created() {
      this.getDom()
    }
  },
  methods: {
    getDom() {
      request(URL)
        .then(res => {
          let frag = document.createDocumentFragment()
          res.forEach(item => {
            let { title, updated_at} = item
            let $li = document.createElement('li')
            let content = `<h3>${updated_at.substring(0, 10)}</h3>
            <h2><a href="2015/12/20/vuejs-2015-in-review/">${title}</a></h2>
            `
            $li.innerHTML = content
            $li.className = 'item'
            frag.appendChild($li)
          })
          this.appendChild(frag)
        })
        .catch(() => {
          this.innerHTML = '<div>暂无内容</div>'
        })
    }
  },
  accessors: {
    data: {
      attribute: {

      }
    }
  },
  events: {
    click(){
      console.log(111)
    }
  }
})
