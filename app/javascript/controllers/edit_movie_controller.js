import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="edit-movie"
export default class extends Controller {
  static targets = ['form', 'infos', "card"]
  connect() {
  }

  revealForm() {
    this.formTarget.classList.remove('d-none')
    this.infosTarget.classList.add('d-none')
  }

  update(event) {
    event.preventDefault()
    fetch(this.formTarget.action, {
      method: 'PATCH',
      headers: { "Accept": "text/plain" },
      body: new FormData(this.formTarget)
    })
      .then(response => response.text())
      .then((data) => {
        // console.log(data)
        this.cardTarget.outerHTML = data
      })
  }
}
