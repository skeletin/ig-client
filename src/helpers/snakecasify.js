export default function snakecasify(data) {
  const entries = Object.entries(data);
  return Object.fromEntries(
    entries.map((entry) => [
      entry[0]
        .replace(/([A-Z])/g, "_$1")
        .toLowerCase(),
      entry[1],
    ])
  );
}
