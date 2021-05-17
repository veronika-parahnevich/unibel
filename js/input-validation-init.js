$(document).ready(function () {
    const phone = $("#inputPhone")
    phone.intlTelInput({
        utilsScript: "intlTelInput-utils.js",
        defaultCountry: 'auto',
        preferredCountries: ['ly', 'by'],
        autoPlaceholder: "aggressive",
        nationalMode: false
    })
    phone.bind("input", function () {
        this.value = (this.value).replace(/[^\d\s\\+\-()]/g, '')
        if (this.value[0] !== '+') {
            this.value = ''
        }
    })
    phone.focus(function () {
        if (this.value.trim().length === 0) {
            const placeholder = this.placeholder
            this.value = this.placeholder.substring(0, placeholder.indexOf(' ') + 1)
        }
    })

    $("#inputName").bind("input", function () {
        this.value = (this.value).replace(/[^A-Za-zА-Яа-яا-ي\-]/g, '')
    })
})
