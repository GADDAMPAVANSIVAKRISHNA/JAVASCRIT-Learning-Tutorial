let candidateselected = {
    name: "pavan",
    age: 25,
    city: "hyderabad"
}

let selectedas = {
    job_title : "software developer",
    company : "google"
}

let totaldetails = {
    ...candidateselected,
    ...selectedas
}
console.log(totaldetails);