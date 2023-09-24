const getPageNumber = (view: string): number => {
  return view === 'garage' ? Number(localStorage.getItem('page_g')) : Number(localStorage.getItem('page_w'));
};

const setPageNumber = (view: string, page: number): void => {
  if (view === 'garage') {
    localStorage.setItem('page_g', String(page));
  } else {
    localStorage.setItem('page_w', String(page));
  }
};

export { getPageNumber, setPageNumber };
