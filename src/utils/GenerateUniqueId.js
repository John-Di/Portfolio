export default function GenerateUniqueId(context) {
  return `${context}-${(new Date()).getTime()}`
}