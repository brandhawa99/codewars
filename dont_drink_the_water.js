function separateLiquids(glass) {
  const chart = {
    'H': 1.36,
    'W': 1.00,
    'A': 0.87,
    'O': 0.80,
  }

  let flat = [];
  for (let i = 0; i < glass.length; i++) {
    flat = [...flat, ...glass[i]];
  }
  let sorted = flat.sort((a, b) => {
    return chart[a] - chart[b];
  })

  let offset = 0;
  for (let i = 0; i < glass.length; i++) {
    glass[i] = sorted.slice(offset, offset + glass[0].length);
    offset += glass[0].length
  }
  console.log(glass)

  return glass;
}