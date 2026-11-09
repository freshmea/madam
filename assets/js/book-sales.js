const filter = document.querySelector('#sales-month');
const channelFilter = document.querySelector('#sales-channel');
const rows = [...document.querySelectorAll('[data-sales-month]')];
const result = document.querySelector('#sales-filter-result');
if (filter && channelFilter && result) {
  const update = () => {
    let quantity = 0;
    let royalty = 0;
    let count = 0;
    for (const row of rows) {
      row.hidden = (filter.value !== 'all' && row.dataset.salesMonth !== filter.value) ||
        (channelFilter.value !== 'all' && row.dataset.channel !== channelFilter.value);
      if (!row.hidden) {
        quantity += Number(row.dataset.quantity);
        royalty += Number(row.dataset.royalty);
        count++;
      }
    }
    document.querySelector('#sales-empty').hidden = count > 0;
    result.textContent = `${count}개 내역 · ${quantity}부 · ${royalty.toLocaleString('ko-KR')}원`;
  };
  filter.addEventListener('change', update);
  channelFilter.addEventListener('change', update);
}
