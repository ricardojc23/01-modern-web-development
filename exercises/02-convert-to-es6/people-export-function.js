function getEmails (people, options = {}, {withNames = false, onlyActive = false} = options) {
    // var withNames = options.withNames || false
    // var onlyActive = options.onlyActive || false

    // if (onlyActive) {
    //     people = people.filter(isActive)
    // }

    onlyActive ? people = people.filter(isActive) : null

    return people.map(function (person) {
        // var result = ''

        // if (withNames) {
        // result = `${person.name} <${person.email}>`
        // } else {
        // result = person.email
        // }

        // return result
        
        return withNames ? `${person.name} <${person.email}>` : result = person.email

    }).join(', ')
}
  
function getAddresses (people, options = {}, {onlyActive = false} = options) {
// let onlyActive = options.onlyActive;

// if (onlyActive) {
//     people = people.filter(isActive)
// }
onlyActive ? people = people.filter(isActive) : null

return people.map(function (person) {
    let address = person.address
    let fullAddress = `${person.name}
    ${address.line1} 
    `
    // person.name + '\n' + address.line1 + '\n'

    if (address.line2) {
    fullAddress += address.line2 + '\n'
    }
    address.line2 ? fullAddress += `${address.line2} 
    ` : null
    // address.line2 + '\n'

    fullAddress += `${address.city}, ${address.state}`
    // address.city + ', ' + address.state
    return fullAddress
}).join('\n\n')
}
  
function getYoungest (people) {
people.sort(function (personA, personB) {
    return personA.age - personB.age
})

return {
    youngest: people[0],
    others: people.slice(1)
}
}
  
function isActive (person) {
    return person.isActive
}

export {getEmails, getAddresses, getYoungest}