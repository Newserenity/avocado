export default async function timer() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
}
