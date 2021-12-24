const date = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: 'long',
  day: 'numeric',
}).format(Date.parse("2021-12-15"));
console.log(date)
console.log(Date.parse("2021-12-15").toLocaleString('en-US', {
  year: "numeric",
  month: 'long',
  day: 'numeric'
}))