function getReleaseYear(date) {
  const year = new Date(date);
  return year.getFullYear();
}

export { getReleaseYear };
