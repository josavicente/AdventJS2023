function findFirstRepeated(gifts) {
  return gifts[Number(new Set(gifts).size)] ?? -1
}
