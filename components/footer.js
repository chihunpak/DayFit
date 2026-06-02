export async function mountFooter(container, options = {}) {
  const template = await fetch("/components/footer.html")
    .then(res => res.text());
  container.innerHTML = template;
}
