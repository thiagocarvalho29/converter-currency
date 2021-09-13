const button = document.getElementById('convert')
const select = document.getElementById('select')

const dollar = 5.25
const euro = 6.2
const bitcoin = 238322.63

const convert_value = () => {
    const real = document.getElementById('input-convert').value
    const result_dollar = real / dollar
    const result_euro = real / euro
    const result_bitcoin = real / bitcoin
    const real_value_text = document.getElementById('real_value_text')
    const dollar_value_text = document.getElementById('dollar_value_text')

    real_value_text.innerHTML = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(real)

    if (select.value === 'US$ Dólar Americano') {
        dollar_value_text.innerHTML = Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(result_dollar)
    }

    if (select.value === '€ Euro') {
        dollar_value_text.innerHTML = Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(result_euro)
    }

    if (select.value === 'Bitcoin') {
        dollar_value_text.innerHTML = Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC',
        }).format(result_bitcoin)
    }
}

const change_currency = () => {
    const currency_name = document.getElementById('currency_name')
    const dollar_americano = document.getElementById('dollar_americano')

    if (select.value === 'US$ Dólar Americano') {
        currency_name.innerHTML = 'US$ Dollar Americano'
        dollar_americano.src = './images/estados-unidos.png'
    }

    if (select.value === '€ Euro') {
        currency_name.innerHTML = '€ Euro'
        dollar_americano.src = './images/europa.png'
    }

    if (select.value === 'Bitcoin') {
        currency_name.innerHTML = 'Bitcoin'
        dollar_americano.src = './images/bitcoin.png'
    }

    convert_value()

}

button.addEventListener('click', convert_value)

select.addEventListener('change', change_currency)