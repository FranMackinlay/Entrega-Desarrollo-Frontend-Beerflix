const getItems = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      const items = ['Item 1', 'Item 2', 'Item 3'];
      resolve(items);
    }, 3000);
  });
};

export default getItems;
