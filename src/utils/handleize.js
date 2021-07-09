const handleize = (str) => str.toLowerCase().replace(/[^\w\u00C0-\u024f]+/g, "-").replace(/^-+|-+$/g, "");

export default handleize;