export const deleteFromListById = (arr: any, id: number) => {
  return arr.filter((item: any) => item.id !== id);
};

export const deleteFromListByIndex = (arr: any, index: number) => {
  return arr.filter((item: any, ind: number) => index !== ind);
};
